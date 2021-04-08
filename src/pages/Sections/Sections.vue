<template>
  <router-view/>
</template>
<script>

import {computed, onMounted} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'Sections',
  setup() {
    const store = useStore();
    const sections = computed(() => store.getters['sections/getSections']);
    if (!sections.value.length) {
      fetchSections();
    }
    onMounted(async () => {
      await fetchCategories();
      await fetchProducts();
    })

    async function fetchCategories() {
      await store.dispatch('categories/fetchCategories');
    }

    async function fetchProducts() {
      await store.dispatch('products/fetchProducts');
    }

    async function fetchSections() {
      await store.dispatch('sections/fetchSections');
    }
  }
}
</script>
<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
