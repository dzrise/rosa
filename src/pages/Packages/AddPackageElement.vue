<template>
  <Loading v-if="loading"/>
  <div v-else>
    <h1 class="mb-5">Элемент пакета: Название элемента пакета</h1>
    <add-package-element-form :places="places"/>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex';
import AddPackageElementForm from "@/modules/Packages/AddPackageElementForm";
import Loading from "@/components/loading";

export default {
  name: "PackageElement",
  components: {Loading, AddPackageElementForm},
  props: {
    loading: {type: Boolean, required: false, default: false,}
  },
  setup() {
    const store = useStore();
    const places = computed(() => store.getters['places/getPlaces'])
    return {places}
  }
}
</script>

<style scoped>

</style>
