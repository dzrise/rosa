<template>
  <div>
    <h1>Чек {{id}}</h1>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'Receipt',
  setup(){
    const route = useRoute();
    const id = route.params.id;

    return {id}
  }
}
</script>
