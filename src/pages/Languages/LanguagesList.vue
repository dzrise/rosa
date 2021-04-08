<template>
  <Loading v-if="loading"/>

  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список языков:</h1>
      <router-link class="btn btn-success" :to="ADD_LANGUAGE">Добавить язык</router-link>
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
import defaultButton from '@/components/defaultButton';
import TableList from "@/modules/TableList/TableList";
import Loading from '@/components/loading';
import {languageTable} from '@/services';
import {languagesRoutes} from "@/constants/RoutesNames";
import {removeLanguage} from '@/Api/requests'

const {BASE, ADD_LANGUAGE} = languagesRoutes;
export default {
  name: 'LanguagesList',
  components: {TableList, defaultButton, Loading},
  props: {
    loading: {type: Boolean, required: false, default: false,}
  },
  setup() {
    const store = useStore();
    const languages = computed(() => store.getters['languages/getLanguages']);
    const table = computed(() => languageTable(languages.value));

    const handlerRemove = async (id) => {
      await removeLanguage(id);
    }
    return {languages, table, BASE,ADD_LANGUAGE, handlerRemove}
  }
}
</script>
