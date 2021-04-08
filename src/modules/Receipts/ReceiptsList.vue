<template>
  <h1 class="mt-3 mb-5">Список чеков: </h1>
  <Loading v-if="!receipts.length"/>
  <div v-else>
    <div v-if="receipts.length === 0">
      <h3 class="text-center">Нет чеков</h3>
    </div>
    <table-list :table="table" :route-name="BASE" :show-remove-col="showRemoveCol"/>
  </div>

</template>
<script>
import {ref, computed} from 'vue';
import {useStore} from 'vuex';
import TableList from '@/modules/TableList/TableList';
import Loading from '@/components/loading';

import {receiptsTable} from "@/services";
import {receiptRoutes} from "@/constants/RoutesNames/Receipt";

const {BASE} = receiptRoutes;
export default {
  name: 'ReceiptsList',
  components: {Loading, TableList},
  setup() {
    const store = useStore();
    const receipts = computed(() => store.getters['receipts/getReceipts']);
    const table = computed(() => receiptsTable(receipts.value));
    const showRemoveCol = ref('remove' in table.value.headers);

    return {receipts, table, showRemoveCol, BASE};
  }
}
</script>
