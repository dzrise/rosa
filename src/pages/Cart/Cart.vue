<template>
  <Loading v-if="!cart"/>
  <div v-else>
    <h1 class="mt-3 mb-5">Корзина: {{ id }}</h1>
    <strong class="mb-3">id:</strong> {{ cart?.id }}
    <h3 class="mb-3">Товары в корзине: </h3>
    <cart-items-list
        :data="cart.items"
        :del="true"
    />
  </div>
</template>

<script>
import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'
import CartItemsList from '@/modules/Cart/CartItemsList'
import {cartRoutes} from "@/constants/RoutesNames";
import Loading from "@/components/loading";

const {BASE} = cartRoutes;
export default {
  name: 'Basket',
  components: {Loading, CartItemsList},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const id = route.params.id;
    const cart = computed(() => store.getters['cart/getCurrentCart'](id));
    if (!cart.value) {
      router.push(BASE);
    }
    return {id, cart}

  }
}
</script>
