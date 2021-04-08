<template>
  <h1 class="mt-3 mb-5">Список заказов: </h1>
  <div class="" v-if="orders.length === 0">
    <Loading />
  </div>
  <List
      v-else
      :data="orders"
      :headers="headers"
      :toPage="toPage"
      dataType="order"
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
  name: 'OrdersList',
  components: {Loading, List},
  setup() {
    const store = useStore()
    const orders = store.getters['orders/getOrders']

    const params = reactive({
      toPage: 10,
      displayColums: ['id', 'userId', 'amount', 'status', 'createdAt'],
    })

    let headers = ref({id: 'id', userId: 'Пользователь', amount: 'Колличество', status: 'Статус', createdAt: 'Дата создания' })
    return { ...params, orders, headers }
  }
}
</script>
