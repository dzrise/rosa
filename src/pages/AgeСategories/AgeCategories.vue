<template>
  <router-view :loading="loading"/>
</template>

<script>
import {ref, onMounted} from 'vue';
import {fetchLocations} from "@/Api/requests";

export default {
  name: "AgeCategories",
  setup() {
    const loading = ref(true);
    onMounted(async () => {
      const {loading: locationsLoading} = fetchLocations();
      loading.value = locationsLoading;
    })

    return {loading}
  }
}
</script>

<style scoped>

</style>
