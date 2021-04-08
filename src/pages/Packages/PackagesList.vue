<template>
  <Loading v-if="loading"/>
  <div v-if="!loading && packages.length">
    <div class="d-flex flex-column mt-3 mb-5">
      <h1>Список пакетов: </h1>
      <div>
        <default-button
            title="Добавить пакет"
            color="success"
            @clickHunder="toAddPackage"
            class="mr-3"
        />
        <default-button
            title="Добавить элемент пакета"
            color="success"
            @clickHunder="toAddPackageElement"
        />
      </div>
    </div>
    <table-list
        :table="table"
        :show-remove-col="showRemoveCol"
        :route-name="BASE"
        @on-remove="handlerRemovePackage"
    />
  </div>
  <div v-else>
    <p>Error</p>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import DefaultButton from "@/components/defaultButton";
import {packagesRoutes} from "@/constants/RoutesNames";
import Loading from "@/components/loading";
import {packagesTable} from "@/services";
import TableList from "@/modules/TableList/TableList";

const {ADD_PACKAGE, ADD_PACKAGE_ELEMENT, BASE} = packagesRoutes;

export default {
  name: "PackagesList",
  components: {TableList, Loading, DefaultButton},
  props: {
    loading: {type: Boolean, required: false, default: false,}
  },
  setup() {
    const router = useRouter()
    const store = useStore();
    const packages = computed(() => store.getters['packages/getPackages']);
    const table = computed(() => packagesTable(packages.value));
    const showRemoveCol = ref('remove' in table.value.headers);

    const toAddPackage = () => {
      router.push(ADD_PACKAGE);
    }
    const toAddPackageElement = () => {
      router.push(ADD_PACKAGE_ELEMENT);
    }
    const handlerRemovePackage = async (id) => {
      await store.dispatch('packages/removePackage', id);
    }
    return {packages, table, showRemoveCol, BASE, toAddPackage, toAddPackageElement, handlerRemovePackage}
  }
}
</script>

<style scoped>

</style>
