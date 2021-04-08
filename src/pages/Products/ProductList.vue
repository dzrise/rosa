<template>
  <Loading v-if="!products.length"/>
  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список продуктов: </h1>
      <defaultButton
          title="Добавить продукт"
          color="success"
          @clickHunder="toAddProduct"
      />
    </div>

    <table-list :table="createTable" :show-remove-col="showRemoveCol" :route-name="BASE"
                @on-remove="handlerRemoveProduct"/>

  </div>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import defaultButton from '@/components/defaultButton'
import TableList from "@/modules/TableList/TableList";
import Loading from '@/components/loading'
import {productsTable} from '@/services'
import {productsRoutes} from "@/constants/RoutesNames";

const {ADD_PRODUCT, BASE} = productsRoutes;

export default {
  name: 'ProductList',
  components: {Loading, TableList, defaultButton},
  setup() {
    const router = useRouter();
    const store = useStore();
    const products = computed(() => store.getters['products/getProducts']);
    const createTable = computed(() => productsTable(products.value));
    const showRemoveCol = ref('remove' in createTable.value.headers);

    const toAddProduct = () => {
      router.push(ADD_PRODUCT);
    }
    const handlerRemoveProduct = async (id) => {
      await store.dispatch('products/removeProduct', {id});
    }

    return {createTable, showRemoveCol, products, BASE, toAddProduct, handlerRemoveProduct}
  }
}
</script>
