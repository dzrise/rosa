<template>
  <Loading v-if="loading || isFetchingHotel"/>
  <edit-hotel-form
      v-else
      :hotel="hotel"
      :locations="locations"
      :hotel-types="hotelTypes"
      :hotel-brands="hotelBrands"
  />
</template>

<script>
import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {fetchHotel} from "@/Api/requests";
import Loading from "@/components/loading";
import EditHotelForm from "@/modules/Hotels/EditHotelForm";

export default {
  name: "Hotel",
  components: {EditHotelForm, Loading},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {
    let isFetchingHotel = ref(true);
    let hotel = ref(null);
    const route = useRoute();
    const store = useStore();
    const {id} = route.params;

    const locations = computed(() => store.getters['locations/getLocations']);
    const hotelTypes = computed(() => store.getters['hotels/getHotelTypes']);
    const hotelBrands = computed(() => store.getters['hotelBrands/getHotelBrands']);

    onMounted(async () => {
      const {loading: hotelFetching, result} = await fetchHotel(id);
      isFetchingHotel.value = hotelFetching;
      hotel.value = result;
    })

    return {hotel, isFetchingHotel, locations, hotelTypes, hotelBrands}
  }
}
</script>
