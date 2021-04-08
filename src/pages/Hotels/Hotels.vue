<template>
  <router-view :loading="loading"/>
</template>

<script>
import {onMounted, ref} from 'vue';
import {fetchHotelBrands, fetchHotels, fetchLocations, fetchHotelTypes} from "@/Api/requests";
import {multiplyRequest} from "@/services";

export default {
  name: "Hotels",
  setup() {
    let loading = ref(true);

    onMounted(async () => {
      loading.value = await multiplyRequest([fetchHotelBrands(), fetchHotels(), fetchLocations(), fetchHotelTypes()]);
    })
    return {loading}
  }
}
</script>
