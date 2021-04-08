<template>
  <base-form :validators-collection="refs" @on-submit="handlerEditFacility">
    <template v-slot:form-content>
      <h1 class="mb-5">Редактирование удобства: {{ facility.name?.ru || '' }}</h1>
      <h4 class="mb-5"><b>ID:{{ facility.id || '' }} </b></h4>
      <div class="mb-5">
        <div class="form__control category__form--control mb-4 ">
          <v-checkbox
              v-model:change="isActive.value"
              :value="isActive.value"
              :title="isActive.title"
          />
        </div>
      </div>

      <div class="mb-5">
        <p> Название удобства </p>

        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :required="name.ru.required"
              :placeholder="name.ru.placeholder"
              :errors="name.ru.errors"
              :value="name.ru.value"
              v-model="name.ru.value"
              :ref="el => addRef(el,'nameR')"
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

      <div class="mb-5">
        <div class="form__control category__form--control mb-4 ">
          <v-checkbox
              v-model:change="isShownInRoomList.value"
              :value="isShownInRoomList.value"
              :title="isShownInRoomList.title"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <upload-input
              v-model:change="webIcon.value"
              :value="webIcon.value"
              :title="webIcon.title"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <upload-input
              v-model:change="mobileIcon.value"
              :value="mobileIcon.value"
              :title="mobileIcon.title"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-5" title="Изменить удобство">Изменить удобство</button>

    </template>
  </base-form>
</template>

<script>
import {reactive} from 'vue';
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import {editFacility} from "@/Api/requests";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";

export default {
  name: "EditFacilityForm",
  components: {VCheckbox, VTextInput, UploadInput, BaseForm},
  props: {
    facility: {type: Object, default: () => ({}), required: true}
  },
  setup({facility}) {
    const {refs, addRef} = useRefsValidation();

    const isActive = reactive({
      value: facility.isActive || false,
      title: 'Активность'
    });

    const name = reactive({
      ru: {
        id: 'nameRu',
        value: facility.name?.ru || '',
        required: true,
        placeholder: 'Введите удобство категории',
        errors: {required: 'Обязательное поле'}
      },
      en: {
        id: 'nameRu',
        value: facility.name?.en || '',
        placeholder: '',
      }
    });
    const isShownInRoomList = reactive({
      value: facility.isShownInRoomList || false,
      title: 'используется для комнат'
    });
    const mobileIcon = reactive({
      title: 'иконка svg для мобильных устройств',
      value: '',
    })
    const webIcon = reactive({
      title: 'иконка svg для сайта',
      value: '',
    })


    async function handlerEditFacility() {
      const {ru,en} = name;
      const data = {
        id: facility.id,
        name: {ru: ru.value, en: en.value},
        isShownInRoomList: isShownInRoomList.value,
        mobileIcon: mobileIcon.value,
        webIcon: webIcon.value
      }
      await editFacility(data);
    }

    return {refs, isActive, webIcon, isShownInRoomList, mobileIcon, name, addRef, handlerEditFacility}
  }
}
</script>
