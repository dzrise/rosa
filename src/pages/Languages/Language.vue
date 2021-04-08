<template>
  <Loading v-if="!language"/>
  <edit-languages-form v-else :language="language"/>
</template>

<script>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import Loading from "@/components/loading";
import {languagesRoutes} from "@/constants/RoutesNames";
import EditLanguagesForm from "@/modules/Languages/EditLanguagesForm";

const {BASE} = languagesRoutes
export default {
  name: "Language",
  components: {
    EditLanguagesForm,
    Loading,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const {id} = route.params;
    const language = computed(() => store.getters['languages/getLanguage'](id));

    return {language};
  }
}
</script>

<style scoped>

</style>
