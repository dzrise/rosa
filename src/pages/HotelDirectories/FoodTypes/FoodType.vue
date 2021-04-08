<template>
  <Loading v-if="loading"/>
  <edit-food-type-form v-else :food-type="foodType"/>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {fetchFoodType} from "@/Api/requests";
import EditFoodTypeForm from "@/modules/FoodTypes/EditFoodTypeForm";
import Loading from "@/components/loading";

export default {
  name: "FoodType",
  components: {Loading, EditFoodTypeForm},
  setup() {
    let loading = ref(true);
    const route = useRoute();
    const store = useStore();
    const {id} = route.params;

    const foodType = computed(() => store.getters['foodTypes/getFoodType']);

    onMounted(async () => {
      const {loading: foodTypeFetching} = await fetchFoodType({id});
      loading.value = foodTypeFetching;
    })
    return {foodType, loading}
  }
}
</script>

<style scoped>

</style>
