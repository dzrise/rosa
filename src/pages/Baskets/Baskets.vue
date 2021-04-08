<template>
    <router-view></router-view>
</template>
<script>
import { getCurrentInstance } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Baskets',
  setup () {
    const store = useStore()
    const internalInstance = getCurrentInstance()
    const http =  internalInstance.appContext.config.globalProperties.createHttp()
    try {
      http.get('/cart').then((response) => {
        response.data.forEach((basket) => {
          store.dispatch('baskets/addBasket', basket)
        })
      })
    } catch (e){
      console.log(e)
    }
  }

}
</script>
