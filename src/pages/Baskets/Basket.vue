<template>
  <div>
    <h1 class="mt-3 mb-5">Корзина {{id}}</h1>
    <strong class="mb-3">id:</strong> {{basket.id}}
    <h3 class="mb-3">Товары в корзине: </h3>
    <BasketItemsList
        :data="basket.items"
        :del="true"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import BasketItemsList from '@/components/baskets/BasketItemsList'

export default {
  name: 'Basket',
  components: {BasketItemsList},
  setup(){
    const route = useRoute()
    const store = useStore()
    const id = route.params.id

    const basket = computed({
      get: () => {
        return store.getters['baskets/getBasket'](id)
      },
      set: (val) => {
        return val
      }
    })

    const toPage = (/*url*/) => {

    }

    return {id, basket, toPage}

  }
}
</script>
