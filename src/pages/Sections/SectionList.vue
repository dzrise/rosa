<template>
  <div v-if="!sections.length">
    <Loading/>
  </div>
  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список секций: </h1>
      <default-button
          title="Добавить секцию"
          color="success"
          @clickHunder="toAddSection"
      />
    </div>

    <table-list-with-img :table="table" :show-remove-col="showRemoveCol" :route-name="BASE" @on-remove="removeSection"/>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import defaultButton from '@/components/defaultButton'
import TableListWithImg from "@/modules/TableList/TableListWithImg";
import Loading from '@/components/loading'
import {sectionsTable} from '@/services'
import {sectionsRoutes} from "@/constants/RoutesNames";

const {ADD_SECTION, BASE} = sectionsRoutes;
export default {
  name: 'CategoriesList',
  components: {TableListWithImg, defaultButton, Loading},
  setup() {
    const router = useRouter();
    const store = useStore();

    const sections = computed(() => store.getters['sections/getSections']);
    const table = computed(() => sectionsTable(sections.value));
    const showRemoveCol = ref('remove' in table.value.headers);

    const toAddSection = () => {
      router.push(ADD_SECTION);
    };

    const removeSection = async (id) => {
      await store.dispatch('sections/removeSection', {id});
    }

    return {sections, table, showRemoveCol, BASE, toAddSection, removeSection}
  }
}
</script>
