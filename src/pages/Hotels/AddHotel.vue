<template>
  <Loading v-if="loading"/>
  <add-hotel-form
      v-else
      :locations="locations"
      :hotel-types="hotelTypes"
      :hotel-brands="hotelBrands"
  />
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import AddHotelForm from "@/modules/Hotels/AddHotelForm";
import Loading from "@/components/loading";

export default {
  name: "AddHotel",
  components: {Loading, AddHotelForm},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {
    const store = useStore();
    const locations = computed(() => store.getters['locations/getLocations']);
    const hotelTypes = computed(() => store.getters['hotels/getHotelTypes']);
    const hotelBrands = computed(() => store.getters['hotelBrands/getHotelBrands']);
    return {locations, hotelTypes, hotelBrands};
  }
}
</script>
