<template>
  <router-view></router-view>
</template>
<script>
import {computed} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'Carts',
  setup() {
    const store = useStore();
    const carts = computed(() => store.getters['cart/getCarts']);
    if (!carts?.value.length) {
      fetchCarts();
    }

    async function fetchCarts() {
      await store.dispatch('cart/fetchCarts');
    }
  }
}
</script>
