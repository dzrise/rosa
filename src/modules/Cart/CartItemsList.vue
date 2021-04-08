<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Товар</th>
      <th scope="col">Колличество</th>
      <th  v-if="del" scope="col">Удалить</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data" :key="item.id">
      <th scope="row"  class="click-td" @click="goTo(item.productId)">{{ item.id }}</th>
      <td  class="click-td" @click="goTo(item.productId)">{{ item.name }}</td>
      <td>{{ item.quantity }}</td>
      <td v-if="del"><span class="oi oi-trash"></span></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'CartItemsList',
  props: {
    data: Object,
    del: Boolean
  },
  setup() {
    const router = useRouter()

    const goTo = (id) => {
      router.push(`/product/${id}`)
    }

    return { goTo }
  }
}
</script>

<style scoped>
.click-td {
  cursor: pointer;
}
.click-td:hover {
  color: green;
}
</style>
