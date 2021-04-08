<template>
  <Loading v-if="loading"/>
  <edit-bed-type-form v-else :bed-type="badType"/>

</template>

<script>
import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import EditBedTypeForm from "@/modules/BedTypes/EditBedTypeForm";
import {fetchBedType} from "@/Api/requests";
import Loading from "@/components/loading";

export default {
  name: "BedType",
  components: {Loading, EditBedTypeForm},
  setup() {
    let loading = ref(true);
    const route = useRoute();
    const store = useStore();
    const {id} = route.params;

    const badType = computed(() => store.getters['bedTypes/getBedType']);

    onMounted(async () => {
      const {loading: bedTypeFetching} = await fetchBedType({id});
      loading.value = bedTypeFetching;
    })
    return {badType, loading}
  }
}
</script>

<style scoped>

</style>
