<template>
  <router-view></router-view>
</template>
<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'Receipts',
  setup() {
    const store = useStore();
    const receipts = computed(() => store.getters['receipts/getReceipts']);
    onMounted(() => {
      if (!receipts.value.length) {
        fetchReceipts();
      }
    })

    async function fetchReceipts() {
      await store.dispatch('receipts/fetchReceipts');
    }
  }
}
</script>
