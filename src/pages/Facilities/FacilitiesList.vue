<template>
  <Loading v-if="loading"/>

  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список удобств:</h1>
      <router-link class="btn btn-success" :to="ADD_FACILITY">Добавить удобство</router-link>
    </div>

    <table-list
        :table="table"
        :show-remove-col="table.remove"
        :route-name="BASE"
        @on-remove="handlerRemoveFacility"
    />
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {facilitiesTable} from "@/services";
import Loading from "@/components/loading";
import TableList from "@/modules/TableList/TableList";
import {facilitiesRoutesNames} from "@/constants/RoutesNames";
import {removeFacility} from "@/Api/requests";

const {BASE, ADD_FACILITY} = facilitiesRoutesNames;
export default {
  name: "FacilitiesList",
  components: {TableList, Loading},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {
    const store = useStore();
    const facilities = computed(() => store.getters['facilities/getFacilities']);
    const table = computed(() => facilitiesTable(facilities.value));
    async function handlerRemoveFacility(id){
      await removeFacility(id);
    }
    return {facilities, table,BASE,ADD_FACILITY, handlerRemoveFacility}
  }
}
</script>
