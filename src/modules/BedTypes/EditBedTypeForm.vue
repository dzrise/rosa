<template>
  <base-form :validators-collection="refs" @on-submit="handlerEditBedType">
    <template v-slot:form-content>
      <h1 class="mb-5">Изменение типа кровати</h1>
      <h3 class="mb-5">ID: {{ bedType.id }}</h3>
      <div class="mb-5">
        <h4 class="mb-3"> Тип кровати </h4>
        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :required="name.ru.required"
              :placeholder="name.ru.placeholder"
              :errors="name.ru.errors"
              :value="name.ru.value"
              v-model="name.ru.value"
              :ref="el => addRef(el,'nameRu')"
          />
        </div>

        <div class="form__control category__form--control d-flex">
          <span class="input-group-text mr-2 h-100 ">en</span>
          <v-text-input
              class="w-100"
              :placeholder="name.en.placeholder"
              :value="name.en.value"
              v-model="name.en.value"
          />
        </div>

      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <upload-input
              v-model:change="webIcon.value"
              :title="webIcon.title"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <upload-input
              v-model:change="mobileIcon.value"
              :title="mobileIcon.title"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-5" title="Изменить">Изменить тип кровати</button>
    </template>
  </base-form>
</template>

<script>
import {reactive} from 'vue';
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import {formDataCreator} from "@/services";
import {editBadType} from "@/Api/requests";

export default {
  name: "editBedTypeForm",
  components: {UploadInput, VTextInput, BaseForm},
  props: {
    bedType: {type: Object, default: () => ({}), required: true}
  },
  setup(props) {
    const {refs, addRef} = useRefsValidation();
    const name = reactive({
      ru: {
        id: 'nameRu',
        value: props.bedType.name?.ru || '',
        required: true,
        placeholder: 'Введите тип кровати',
        errors: {
          required: 'Это обязательное поле'
        }
      },
      en: {
        id: 'nameEn',
        value: props.bedType.name?.en || '',
        placeholder: 'Enter bed type',
      }
    });

    const webIcon = reactive({
      title: 'иконка svg для сайта',
      value: '',
    })

    const mobileIcon = reactive({
      title: 'иконка png для МП',
      value: '',
    })

    async function handlerEditBedType() {
      const data = {
        ['name[ru]']: name.ru.value,
        ['name[en]']: name.en.value,
      }
      const {formData} = formDataCreator(data);
      await editBadType({id: props.bedType.id, formData});
    }

    return {
      name,
      webIcon, mobileIcon,
      refs,
      addRef, handlerEditBedType
    }
  }
}
</script>

<style scoped>

</style>
