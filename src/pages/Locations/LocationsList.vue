<template>
  <Loading v-if="loading"/>

  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список локаций:</h1>
      <router-link class="btn btn-success" :to="ADD_LOCATIONS">Добавить локацию</router-link>
    </div>

    <table-list
        :table="table"
        :show-remove-col="table.remove"
        :route-name="BASE"
        @on-remove="handlerRemove"
    />
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import TableList from "@/modules/TableList/TableList";
import Loading from '@/components/loading';
import {locationsTable} from '@/services';
import {removeLocation} from "@/Api/requests";

import {locationsRoutesNames} from "@/constants/RoutesNames";

const {BASE, ADD_LOCATIONS} = locationsRoutesNames;
export default {
  name: 'LocationsList',
  components: {TableList, Loading},
  props: {
    loading: {type: Boolean, default: false, required: false}
  },
  setup() {
    const store = useStore();
    const locations = computed(() => store.getters['locations/getLocations']);
    const table = computed(() => locationsTable(locations.value));

    const handlerRemove = async (id) => {
    await  removeLocation(id)
    }
    return {locations, table, BASE, ADD_LOCATIONS, handlerRemove}
  }
}
</script>
