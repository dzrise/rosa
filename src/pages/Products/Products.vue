<template>
  <router-view :loading="loading"/>
</template>

<script>
import {ref, onMounted} from 'vue'
import {multiplyRequest} from "@/services";
import {fetchProducts, fetchSections} from "@/Api/requests";

export default {
  name: 'Products',
  setup() {
    let loading = ref(true);

    onMounted(async () => {
      loading.value = await multiplyRequest([fetchProducts(), fetchSections()])
    })
    return {loading};
  }
}

</script>
