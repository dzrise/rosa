<template>
  <Loading v-if="loading"/>

  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список брендов отелей:</h1>
      <router-link class="btn btn-success" :to="ADD_HOTEL_BRAND">Добавить бренд отеля</router-link>
    </div>

    <table-list
        :table="table"
        :show-remove-col="table.remove"
        :route-name="BASE_ROUTE_HOTEL_BRANDS_NAME"
        @on-remove="handlerRemoveHotelBrand"
    />
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {hotelBrandsTable} from "@/services";
import {removeHotelBrand} from "@/Api/requests";
import Loading from "@/components/loading";
import TableList from "@/modules/TableList/TableList";
import DefaultButton from "@/components/defaultButton";
import {hotelDirectories} from "@/constants/RoutesNames";

const {BASE_ROUTE_HOTEL_BRANDS_NAME, ADD_HOTEL_BRAND} = hotelDirectories;

export default {
  name: "HotelBrandsList",
  components: {TableList, DefaultButton, Loading},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {
    const store = useStore();
    const hotelBrands = computed(() => store.getters['hotelBrands/getHotelBrands']);
    const table = computed(() => hotelBrandsTable(hotelBrands.value));

    async function handlerRemoveHotelBrand(id) {
      await removeHotelBrand({id})
    }

    return {table, BASE_ROUTE_HOTEL_BRANDS_NAME, ADD_HOTEL_BRAND, handlerRemoveHotelBrand}
  }

}
</script>

<style scoped>

</style>
