<template>

  <Loading v-if="loading"/>

  <div v-else>
    <h1 class="mb-5">Пакет: Название пакета</h1>
    <add-package-form :package-items="packageItems" :food-types="foodTypes"/>
  </div>

</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import AddPackageForm from "@/modules/Packages/AddPackageForm";
import Loading from "@/components/loading";

export default {
  name: "AddPackage",
  components: {Loading, AddPackageForm},
  props: {
    loading: {type: Boolean, required: false, default: false,}
  },
  setup() {
    const store = useStore();
    const packageItems = computed(() => store.getters["packages/getPackageItems"]);
    const foodTypes = computed(() => store.getters["foodTypes/getFoodTypes"]);

    return {packageItems, foodTypes};
  }
}
</script>

<style scoped>

</style>
