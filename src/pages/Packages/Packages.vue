<template>
  <router-view :loading="loading"/>
</template>

<script>
import {onMounted, ref} from 'vue';
import {multiplyRequest} from "@/services";
import {fetchPackages, fetchPlaces, fetchPackageItem, fetchFoodTypes} from "@/Api/requests";

export default {
  name: "Packages",
  setup() {
    let loading = ref(true);
    onMounted(async () => {
      loading.value = await multiplyRequest([
        await fetchPackages(),
        await fetchPlaces(),
        await fetchPackageItem(),
        await fetchFoodTypes()])
    })

    // async function fetchPackages() {
    //   await store.dispatch('packages/fetchPackages');
    // }
    //
    // async function fetchPlaces() {
    //   await store.dispatch('places/fetchPlaces');
    // }
    //
    // async function fetchPackageItem() {
    //   await store.dispatch('packages/fetchPackageItem');
    // }
    //
    // async function fetchFoodTypes() {
    //   await store.dispatch('foodTypes/fetchFoodTypes');
    // }
    return {loading};
  }
}
</script>
