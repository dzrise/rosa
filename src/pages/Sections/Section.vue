<template>
  <div v-if="!section || !categories.length || !products.length">
    <Loading/>
  </div>

  <div class="section" v-else>
    <h1 class="mb-5">Секция: {{ section.name.ru || '' }}</h1>
    <p><strong>id:</strong> {{ section.id }}</p>
    <edit-section-form
        :section="section"
        :categories="categories"
        :products="products"
    />
  </div>

</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import Loading from '@/components/loading'
import EditSectionForm from '@/modules/Sections/EditSectionForm'

export default {
  name: 'Section',
  components: {Loading, EditSectionForm},
  setup() {
    const store = useStore();
    const route = useRoute();
    const id = route.params.id;
    const section = computed(() => store.getters['sections/getSection']);
    const categories = computed(() => store.getters['categories/getCategories']);
    const products = computed(() => store.getters['products/getProducts']);

    if (!section.value || section.value.id !== id) {
      fetchSection();
    }

    async function fetchSection() {
      await store.dispatch('sections/fetchSection', {id});
    }

    return {id, categories, products, section}
  },
}
</script>
<style scoped>
.section {
  padding: 12px;
}
</style>
