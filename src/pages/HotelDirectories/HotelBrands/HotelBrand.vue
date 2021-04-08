<template>
  <Loading v-if="loading"/>
  <edit-hotel-brand-form v-else :hotel-brand="hotelBrand"/>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {fetchHotelBrand} from "@/Api/requests";
import EditFoodTypeForm from "@/modules/FoodTypes/EditFoodTypeForm";
import Loading from "@/components/loading";
import EditHotelBrandForm from "@/modules/HotelBrands/EditHotelBrandForm";

export default {
  name: "HotelBrand",
  components: {EditHotelBrandForm, Loading, EditFoodTypeForm},
  setup() {
    let loading = ref(true);
    const route = useRoute();
    const store = useStore();
    const {id} = route.params;

    const hotelBrand = computed(() => store.getters['hotelBrands/getHotelBrand']);

    onMounted(async () => {
      const {loading: hotelBrandFetching} = await fetchHotelBrand({id});
      loading.value = hotelBrandFetching;
    })
    return {hotelBrand, loading}
  }
}
</script>

<style scoped>

</style>
