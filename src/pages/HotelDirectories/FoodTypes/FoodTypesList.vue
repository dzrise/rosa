<template>
  <Loading v-if="loading"/>

  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список языков:</h1>
      <default-button
          title="Добавить тип питания"
          color="success"
          @clickHunder="toAddFoodType"
      />
    </div>

    <table-list
        :table="table"
        :show-remove-col="table.remove"
        :route-name="BASE_ROUTE_FOOD_TYPE_NAME"
        @on-remove="handlerRemoveFoodType"
    />
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {bedTypeTable} from "@/services";
import {removeFoodType} from "@/Api/requests";
import Loading from "@/components/loading";
import TableList from "@/modules/TableList/TableList";
import DefaultButton from "@/components/defaultButton";
import {hotelDirectories} from "@/constants/RoutesNames";

const {BASE_ROUTE_FOOD_TYPE_NAME, ADD_FOOD_TYPE} = hotelDirectories;

export default {
  name: "FoodTypesList",
  components: {TableList, DefaultButton, Loading},
  props: {
    loading: {type: Boolean, default: true, required: false},
  },
  setup() {

    const store = useStore();
    const router = useRouter();
    const foodTypes = computed(() => store.getters['foodTypes/getFoodTypes']);
    const table = computed(() => bedTypeTable(foodTypes.value));

    function toAddFoodType() {
      router.push(ADD_FOOD_TYPE);
    }

    async function handlerRemoveFoodType(id) {
      await removeFoodType({id})
    }

    return {table, BASE_ROUTE_FOOD_TYPE_NAME, toAddFoodType, handlerRemoveFoodType}
  }

}
</script>

<style scoped>

</style>
