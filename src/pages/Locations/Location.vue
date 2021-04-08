<template>
  <Loading v-if="loading"/>
  <edit-location-form v-else-if="location" :location="location"/>
  <p v-else>error</p>
</template>

<script>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import Loading from "@/components/loading";
import {languagesRoutes} from "@/constants/RoutesNames";
import EditLocationForm from "@/modules/Locations/EditLocationForm";
import {fetchLocation} from "@/Api/requests";

const {BASE} = languagesRoutes
export default {
  name: "Location",
  components: {
    EditLocationForm,
    Loading,
  },
  setup() {
    const route = useRoute();
    const {id} = route.params;
    const loading = ref(true);
    const location = ref(null);

    onMounted(async () => {
      const {loading: locationFetching, result} = await fetchLocation(id);
      location.value = result;
      loading.value = locationFetching;
    })
    return {location, loading};
  }
}
</script>
