<template>
  <div class="Product">
    <Loading v-if="!product"/>
    <div v-else>
      <h1 class="mb-5">Редактирование продукта: {{ product.name }}</h1>
      <p><strong>id:</strong> {{ product.id }}</p>
      <edit-product-form
          :product="product"
          :sections="sections"
      />
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import Loading from '@/components/loading'
import EditProductForm from "@/modules/Products/EditProductForm";
import {fetchProduct} from "@/Api/requests";

export default {
  name: 'Product',
  components: {Loading, EditProductForm},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const {id} = route.params;
    let product = ref(null);
    const sections = computed(() => store.getters['sections/getSections']);

    onMounted(async () => {
      const {result} = await fetchProduct(id);
      product.value = result;
    })


    return {product, sections}
  }
}
</script>
