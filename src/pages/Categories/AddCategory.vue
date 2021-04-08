<template>
  <div class="AddCategory">
    <Loading v-if="!sections.length || !places.length"/>
    <div v-else>
      <h1 class="mt-3 mb-5">Добавление категории</h1>
      <add-category-form
          :sections="sections"
          :places="places"
      />
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import AddCategoryForm from '@/modules/Categories/AddCategoryForm';
import Loading from "@/components/loading";

export default {
  name: 'AddCategory',
  components: {Loading, AddCategoryForm},
  setup() {
    const store = useStore();
    const sections = computed(() => store.getters['sections/getSections']);
    const places = computed(() => store.getters['places/getPlaces']);

    return {sections, places}
  }
}

</script>
