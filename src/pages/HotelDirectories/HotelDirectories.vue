<template>
  <router-view :loading="loading"/>
</template>

<script>
import {onMounted, ref} from 'vue';
import {fetchBedTypes, fetchFoodTypes, fetchHotelBrands} from "@/Api/requests";
import {multiplyRequest} from "@/services";

export default {
  name: "Hotels",
  setup() {
    let loading = ref(true);
    onMounted(async () => {
      loading.value = await multiplyRequest([fetchFoodTypes(), fetchBedTypes(), fetchHotelBrands()]);
    })
    return {loading}
  }
}
</script>
