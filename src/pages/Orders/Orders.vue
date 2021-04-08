<template>
    <router-view></router-view>
</template>
<script>
import { getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Orders',
  setup () {
    const store = useStore()
    const internalInstance = getCurrentInstance()
    const http =  internalInstance.appContext.config.globalProperties.createHttp()
    try {
      http.get('/order').then((response) => {
        response.data.forEach((order) => {
          store.dispatch('orders/addOrder', order)
        })
      })
    } catch (e){
      console.log(e)
    }
  }
}
</script>
