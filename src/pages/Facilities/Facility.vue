<template>
  <Loading v-if="loading"/>
  <edit-facility-form v-else :facility="facility"/>
</template>

<script>
import {ref, computed, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {fetchFacility} from '@/Api/requests';
import EditFacilityForm from "@/modules/Facilities/EditFacilityForm";
import Loading from "@/components/loading";

export default {
  name: "Facility",
  components: {Loading, EditFacilityForm},
  setup() {
    const route = useRoute();
    let loading = ref(true);
    let facility = ref(null);
    const {id} = route.params;
    onMounted(async () => {
      const {loading: facilityFetching, result} = await fetchFacility(id);
      loading.value = facilityFetching;
      facility.value = result;
    })
    return {loading, facility}
  }
}
</script>
