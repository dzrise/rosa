<template>
  <Loading v-if="!categories.length || !products.length"/>
  <div v-else>
    <h1 class="mt-3 mb-5">Добавление секции</h1>
    <add-section-form
        :categories="categories"
        :products="products"
    />
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import AddSectionForm from '@/modules/Sections/AddSectionForm';
import Loading from "@/components/loading";

export default {
  name: 'Add-section',
  components: {Loading, AddSectionForm},
  setup() {
    const store = useStore();
    const categories = computed(() => store.getters['categories/getCategories']);
    const products = computed(() => store.getters['products/getProducts']);

    return {categories, products}
  }
}

</script>
