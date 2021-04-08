<template>
  <div v-if="!categories.length">
    <Loading/>
  </div>

  <div v-else>

    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список категорий: </h1>
      <default-button
          title="Добавить категорию"
          color="success"
          @clickHunder="toAddCategory"
      />
    </div>

    <table-list :table="createTable" :show-remove-col="showRemoveCol" :route-name="BASE"/>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import defaultButton from '@/components/defaultButton'
import TableList from "@/modules/TableList/TableList";
import Loading from '@/components/loading'
import {categoriesTable} from '@/services'
import {categoriesRoutes} from "@/constants/RoutesNames";

const {ADD_CATEGORY, BASE} = categoriesRoutes;
export default {
  name: 'CategoriesList',
  components: {TableList, defaultButton, Loading},
  setup() {
    const router = useRouter();
    const store = useStore();

    const categories = computed(() => store.getters['categories/getCategories']);
    const createTable = computed(() => categoriesTable(categories.value));
    const showRemoveCol = ref('remove' in createTable.value.headers);

    const toAddCategory = () => {
      router.push(ADD_CATEGORY);
    };

    return {categories, createTable, showRemoveCol, BASE, toAddCategory}
  }
}
</script>
