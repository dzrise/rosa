<template>
  <h1 class="mt-3 mb-5">Список корзин: </h1>

  <div class="" v-if="!carts.length">
    <Loading/>
  </div>

  <table-list
      v-else
      :table="createTable"
      :show-remove-col="showRemoveCol"
      :route-name="BASE"
  />
</template>
<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import TableList from '@/modules/TableList/TableList'
import Loading from '@/components/loading'
import {cartTable} from "@/services";
import {cartRoutes} from "@/constants/RoutesNames";

const {BASE} = cartRoutes;

export default {
  name: 'CartList',
  components: {TableList, Loading},
  setup() {
    const store = useStore();
    const carts = computed(() => store.getters['cart/getCarts']);
    const createTable = computed(() => cartTable(carts.value));
    const showRemoveCol = ref('remove' in createTable.value.headers);

    return {carts, createTable, showRemoveCol, BASE}
  }
}
</script>
