<template>
  <base-form :validators-collection="refs" @on-submit="handlerEditLocation">
    <template v-slot:form-content>
      <h1 class="mb-3">Добавить локацию</h1>
      <h3 class="mb-5"><b>ID:</b>{{ location.id }}</h3>

      <div class="mb-4">
        <div class="form__control category__form--control">
          <v-checkbox
              :value="isActive.value"
              :title="isActive.title"
              v-model:change="isActive.value"
          />
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Название локации </h4>
        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :name="name.ru.id"
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
              :name="name.en.id"
              :placeholder="name.en.placeholder"
              :value="name.en.value"
              v-model="name.en.value"
          />
        </div>

      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Высота над уровнем моря</h4>
        <div class="form__control category__form--control ">
          <v-input-number
              class="w-100"
              :name="altitude.id"
              :required="altitude.required"
              :placeholder="altitude.placeholder"
              :errors="altitude.errors"
              :value="altitude.value"
              v-model="altitude.value"
              :ref="el => addRef(el,'altitude')"
          />
        </div>

      </div>

      <default-button title="Изменить" type="submit" classes="btn-primary"/>
    </template>
  </base-form>
</template>

<script>
import {reactive} from 'vue';
import DefaultButton from "@/components/defaultButton";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import VInputNumber from "@/components/FormComponents/Inputs/NumberInput/VInputNumber";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import {editLocation} from "@/Api/requests";

export default {
  name: "editLocationForm",
  components: {VInputNumber, VCheckbox, BaseForm, VTextInput, DefaultButton},
  props: {
    location: {type: Object, default: () => ({}), required: true}
  },
  setup({location}) {
    const {refs, addRef} = useRefsValidation();
    const isActive = reactive({
      value: location.isActive || false,
      title: 'Активность'
    });
    const name = reactive({
      ru: {
        id: 'nameRu',
        required: true,
        placeholder: 'Введите название локации',
        errors: {
          required: 'Обязательное поле'
        },
        value: location.name?.ru || '',
      },
      en: {
        id: 'nameEn',
        placeholder: 'Enter location name',
        value: location.name?.en || '',
      }
    });

    const altitude = reactive({
      id: 'altitude',
      placeholder: 'Введите высоту над уровнем моря',
      errors: {
        required: 'Обязательное поле'
      },
      value: location.altitude || '',
    });
    const handlerEditLocation = async () => {
      const {ru, en} = name;
      const locationData = {
        id: location.id,
        name: {
          ru: ru.value,
          en: en.value
        },
        altitude: altitude.value,
        isActive: isActive.value
      };
      await editLocation(locationData);
    }

    return {name, altitude, isActive, refs, addRef, handlerEditLocation};
  }
}
</script>
