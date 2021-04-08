<template>
  <Loading v-if="!category"/>

  <div class="Category" v-else>
    <h1 class="mb-5">Категория: {{ category.name?.ru || '' }}</h1>
    <p><strong>id:</strong> {{ category.id }}</p>
    <edit-category-form
        :category="category"
        :sections="sections"
        :places="places"
    />
  </div>

</template>

<script>
import {computed, onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import Loading from '@/components/loading'
import EditCategoryForm from '@/modules/Categories/EditCategoryForm'
import {fetchCategory} from '@/Api/requests'

export default {
  name: 'Category',
  components: {Loading, EditCategoryForm},
  setup() {
    const store = useStore()
    const route = useRoute()
    const id = route.params.id;
    let category = ref(null);

    const sections = computed(() => store.getters['sections/getSections']);
    const places = computed(() => store.getters['places/getPlaces']);
    onMounted(async () => {
      category.value = await fetchCategory(id);
    })

    return {category, sections, places}
  },
}
</script>
