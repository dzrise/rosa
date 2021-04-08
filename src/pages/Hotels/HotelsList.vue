<template>
  <Loading v-if="loading"/>

  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список отелей:</h1>
      <router-link class="btn btn-success" :to="ADD_HOTEL">Добавить отель</router-link>
    </div>

    <table-list
        :table="table"
        :show-remove-col="table.remove"
        :route-name="BASE"
        @on-remove="handlerRemoveHotelBrand"
    />
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {hotelsTable} from "@/services";
import {removeHotels} from "@/Api/requests";
import Loading from "@/components/loading";
import TableList from "@/modules/TableList/TableList";
import DefaultButton from "@/components/defaultButton";
import {hotelsRoutesNames} from "@/constants/RoutesNames";

const {BASE, ADD_HOTEL} = hotelsRoutesNames;

export default {
  name: "HotelsList",
  components: {TableList, DefaultButton, Loading},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {
    const store = useStore();
    const hotels = computed(() => store.getters['hotels/getHotels']);
    const table = computed(() => hotelsTable(hotels.value));

    async function handlerRemoveHotelBrand(id) {
      await removeHotels(id)
    }

    return {table, BASE, ADD_HOTEL, handlerRemoveHotelBrand}
  }

}
</script>

<style scoped>

</style>
