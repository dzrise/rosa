<template>
  <router-view :loading="loading"/>
</template>

<script>
import {ref, onMounted} from 'vue';
import {fetchFacilities} from "@/Api/requests";

export default {
  name: "Facilities",
  setup() {
    const loading = ref(true);
    onMounted(async () => {
      const {loading: facilitiesFetching} = await fetchFacilities();
      loading.value = facilitiesFetching;
    })
    return {loading}
  }
}
</script>
