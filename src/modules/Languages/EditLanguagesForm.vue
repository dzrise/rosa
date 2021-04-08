<template>
  <base-form :validators-collection="refs" @on-submit="handlerEditLanguage">
    <template v-slot:form-content>
      <h1 class="mb-5" v-if="language?.name"> Язык: {{ language.name }} </h1>
      <h3 class="mb-5" v-if="language?.id"> ID: {{ language.id }} </h3>
      <div class="form-group mt-3 ">
        <v-text-input
            class="w-100"
            :required="true"
            :title="name.title"
            :placeholder="name.placeholder"
            :errors="name.errors"
            :value="name.value"
            v-model="name.value"
            :ref="el => addRef(el,'name')"
        />
      </div>
      <div class="form-group mt-3 ">
        <v-text-input
            class="w-100"
            :required="true"
            :title="code.title"
            :placeholder="code.placeholder"
            :errors="code.errors"
            :value="code.value"
            v-model="code.value"
            :ref="el => addRef(el,'code')"
        />
      </div>
      <default-button class="mr-4" title="Сохранить" type="submit" classes="btn-primary"/>
    </template>
  </base-form>
</template>

<script>
import {reactive, computed} from 'vue';
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import Loading from "@/components/loading";
import DefaultButton from "@/components/defaultButton";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import {languagesRoutes} from "@/constants/RoutesNames";
import {editLanguage} from '@/Api/requests'

const {BASE} = languagesRoutes
export default {
  name: "EditLanguagesForm",
  props: {
    language: {type: Object, default: () => ({}), required: true}
  },
  components: {
    BaseForm,
    VTextInput,
    DefaultButton,
    Loading,
  },
  setup(props) {
    const {refs, addRef} = useRefsValidation();
    const language = computed(() => props.language);

    const name = reactive({
      id: 'name',
      title: 'Название:',
      placeholder: 'Введите название',
      errors: {
        required: 'Обязательное поле'
      },
      value: language.value?.name || '',
    });

    const code = reactive({
      id: 'code',
      title: 'Код:',
      placeholder: 'Введите код',
      errors: {
        required: 'Обязательное поле'
      },
      value: language.value?.code || '',
    });

    const handlerEditLanguage = async () => {
      const languageData = {id: language.value.id, name: name.value, code: code.value}
      await editLanguage(languageData);
    }
    return {language, name, code, refs, addRef, handlerEditLanguage};
  }
}
</script>
