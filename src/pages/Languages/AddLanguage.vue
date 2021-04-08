<template>
  <base-form :validators-collection="refs" @on-submit="handlerAddLanguage">
    <template v-slot:form-content>
      <h1 class="mb-5">Добавить язык</h1>
      <div class="form-group mt-3 ">
        <v-text-input
            class="w-100"
            :name="name.id"
            :required="true"
            :title="name.title"
            :placeholder="name.placeholder"
            :errors="name.errors"
            :value="name.value"
            v-model="name.value"
            :ref="el => addRef(el,'name')"
        />
      </div>
      <div class="form-group mb-5">
        <v-text-input
            class="w-100"
            :name="code.id"
            :required="true"
            :title="code.title"
            :placeholder="code.placeholder"
            :errors="code.errors"
            :value="code.value"
            v-model="code.value"
            :ref="el => addRef(el,'code')"
        />
      </div>
      <default-button title="Добавить" type="submit" classes="btn-primary"/>
    </template>
  </base-form>
</template>

<script>
import {reactive} from 'vue';
import DefaultButton from "@/components/defaultButton";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import {addLanguage} from '@/Api/requests'
export default {
  name: "AddLanguage",
  components: {BaseForm, VTextInput, DefaultButton},
  setup() {
    const {refs, addRef} = useRefsValidation();
    const name = reactive({
      id: 'name',
      title: 'Название:',
      placeholder: 'Введите название',
      errors: {
        required: 'Обязательное поле'
      },
      value: '',
    });

    const code = reactive({
      id: 'code',
      title: 'Код:',
      placeholder: 'Введите код',
      errors: {
        required: 'Обязательное поле'
      },
      value: '',
    });
    const handlerAddLanguage = async () => {
      const languageData = {name: name.value, code: code.value};
      await addLanguage(languageData);
    }

    return {name, code, refs, addRef, handlerAddLanguage};
  }
}
</script>

<style scoped>

</style>
