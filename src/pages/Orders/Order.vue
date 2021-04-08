<template>
  <div v-if="!order">
    <Loading />
  </div>
  <div v-else>
    <h1 class="mt-3 mb-5">Заказ {{id}}</h1>
    <p><strong>Статус: </strong> {{ order.status }}</p>
    <p><strong>Создан: </strong> {{ order.createdAt }}</p>
    <div class="row">
      <div class="col-md-3">
       <h3>Пользователь:</h3>
      <OrderUserCard
          :id="order.userId"
      />
      </div>
      <div class="col-md-9">
        <h3>Корзина:</h3>
        <OrderBasketItemsList
            :data="order.items"
            :del="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Loading from '@/components/loading'
import OrderBasketItemsList from '@/components/orders/OrderBasketItemsList'
import OrderUserCard from '@/components/orders/OrderUserCard'
export default {
  name: 'Order',
  components: {Loading, OrderBasketItemsList, OrderUserCard},
  setup(){
    const route = useRoute()
    const store = useStore()

    const id = route.params.id

    const order = computed({
      get: () => {
        return store.getters['orders/getOrder'](id)
      },
      set: (val) => {
        return val
      }
    })

    const toPage = (url) => {

    }

    return {id, order, toPage}
  }
}
</script>
