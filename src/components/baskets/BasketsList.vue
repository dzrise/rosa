<template>
  <h1 class="mt-3 mb-5">Список корзин: </h1>
  <div class="" v-if="baskets.length === 0">
    <Loading />
  </div>
  <List
      v-else
      :data="baskets"
      :headers="headers"
      :toPage="toPage"
      dataType="basket"
      :displayColums="displayColums"
      :deleteColumn="false"
  />
</template>
<script>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import List from '@/components/list/list'
import Loading from '@/components/loading'

export default {
  name: 'BasketsList',
  components: {Loading, List},
  setup() {
    const store = useStore()
    const baskets = store.getters['baskets/getBaskets']

    const params = reactive({
      toPage: 10,
      displayColums: ['id'],
    })

    let headers = ref({id: 'id'})
    return { ...params, baskets, headers }
  }
}
</script>
