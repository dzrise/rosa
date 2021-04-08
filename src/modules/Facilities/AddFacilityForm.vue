<template>
  <base-form :validators-collection="refs" @on-submit="handlerAddFacility">
    <template v-slot:form-content>
      <h1 class="mb-5">Добавление удобства</h1>

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

      <button type="submit" class="btn btn-primary mt-5" title="Изменить удобство">Добавить удобство</button>

    </template>
  </base-form>
</template>

<script>
import {reactive} from 'vue';
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import {addFacility} from "@/Api/requests";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import {formDataCreator} from "@/services";

export default {
  name: "AddFacilityForm",

  components: {VCheckbox, VTextInput, UploadInput, BaseForm},
  setup() {
    const {refs, addRef} = useRefsValidation();

    const name = reactive({
      ru: {
        id: 'nameRu',
        value: '',
        required: true,
        placeholder: 'Введите удобство категории',
        errors: {required: 'Обязательное поле'}
      },
      en: {
        id: 'nameRu',
        value: '',
        placeholder: '',
      }
    });
    const isShownInRoomList = reactive({
      value: false,
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

    async function handlerAddFacility() {
      const {ru, en} = name;
      const data = {
        ['name[Ru]']: ru.value,
        ['name[En]']: en.value,
        isShownInRoomList: isShownInRoomList.value,
        mobileIcon: mobileIcon.value,
        webIcon: webIcon.value,
      }
      const {formData} = formDataCreator(data)
      await addFacility(formData);
    }

    return {refs, webIcon, mobileIcon, name, isShownInRoomList, addRef, handlerAddFacility}
  }
}
</script>

