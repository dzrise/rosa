<template>
  <Loading v-if="loading"/>

  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список языков:</h1>
      <default-button
          title="Добавить тип кровати"
          color="success"
          @clickHunder="toAddBedType"
      />
    </div>

    <table-list
        :table="table"
        :show-remove-col="table.remove"
        :route-name="BASE_ROUTE_BED_TYPE_NAME"
        @on-remove="handlerRemoveBedType"
    />
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {bedTypeTable} from "@/services";
import {removeBedType} from "@/Api/requests";
import Loading from "@/components/loading";
import TableList from "@/modules/TableList/TableList";
import DefaultButton from "@/components/defaultButton";
import {hotelDirectories} from "@/constants/RoutesNames";

const {BASE_ROUTE_BED_TYPE_NAME, ADD_FOOD_TYPE} = hotelDirectories;
export default {
  name: "BedTypesList",
  components: {DefaultButton, TableList, Loading},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const bedTypes = computed(() => store.getters['bedTypes/getBedTypes']);
    const table = computed(() => bedTypeTable(bedTypes.value));

    function toAddBedType() {
      router.push(ADD_FOOD_TYPE);
    }

    async function handlerRemoveBedType(id) {
      await removeBedType({id})
    }

    return {bedTypes, table, BASE_ROUTE_BED_TYPE_NAME, toAddBedType, handlerRemoveBedType}
  }
}
</script>

<style scoped>

</style>
