<template>
  <div class="d-flex justify-content-around">
    <router-link class="btn btn-success" :to="BAD_TYPES_LIST">Типы кровати</router-link>
    <router-link class="btn btn-success" :to="FOOD_TYPES_LIST">Типы питания</router-link>
    <router-link class="btn btn-success" :to="HOTELS_BRANDS_LIST">Брэнд отеля</router-link>
  </div>

</template>


<script>
import {hotelDirectories} from "@/constants/RoutesNames";
import DefaultButton from "@/components/defaultButton";

const {BASE, HOTELS_BRANDS_LIST, FOOD_TYPES_LIST, BAD_TYPES_LIST} = hotelDirectories;
export default {
  name: "HotelDirectoriesList",
  components: {DefaultButton},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {
    return {BAD_TYPES_LIST,FOOD_TYPES_LIST, HOTELS_BRANDS_LIST}
  }
}
</script>

<style scoped>

</style>
