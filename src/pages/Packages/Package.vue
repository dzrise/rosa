<template>
  <div class="package">
    <Loading v-if="!packageItem || loading"/>
    <div v-else>
      <h1 class="mb-5">Редактирование пакета: {{ packageItem.name?.ru || '' }}</h1>
      <p><strong>id:</strong> {{ packageItem.id }}</p>
      <edit-package-form
          :package="packageItem"
          :package-items="packageItems"
          :food-types="foodTypes"
      />
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import Loading from '@/components/loading'
import EditPackageForm from "@/modules/Packages/EditPackageForm";
import {fetchPackage} from "@/Api/requests";

export default {
  name: "package",
  components: {EditPackageForm, Loading},
  props: {
    loading: {type: Boolean, required: false, default: false,}
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const {id} = route.params;
    let packageItem = ref(null);
    const packageItems = computed(() => store.getters["packages/getPackageItems"]);
    const foodTypes = computed(() => store.getters["foodTypes/getFoodTypes"]);

    onMounted(async () => {
      const {result} = await fetchPackage(id);
      packageItem.value = result
    })

    return {packageItem, packageItems, foodTypes}
  }
}
</script>


