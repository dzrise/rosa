<template>
  <base-form :validators-collection="refs" @on-submit="handlerAddLocation">
    <template v-slot:form-content>
      <h1 class="mb-5">Добавить локацию</h1>

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

      <default-button title="Добавить" type="submit" classes="btn-primary"/>
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
import {addLocation} from "@/Api/requests";

export default {
  name: "AddLocationForm",
  components: {VInputNumber, VCheckbox, BaseForm, VTextInput, DefaultButton},
  setup() {
    const {refs, addRef} = useRefsValidation();
    const isActive = reactive({
      value: false,
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
        value: '',
      },
      en: {
        id: 'nameEn',
        placeholder: 'Enter location name',
        value: '',
      }
    });

    const altitude = reactive({
      id: 'altitude',
      placeholder: 'Введите высоту над уровнем моря',
      errors: {
        required: 'Обязательное поле'
      },
      value: '',
    });
    const handlerAddLocation = async () => {
      const {ru, en} = name;
      const locationData = {
        name: {
          ru: ru.value,
          en: en.value
        },
        altitude: altitude.value,
        isActive: isActive.value
      };
      await addLocation(locationData);
    }

    return {name, altitude, isActive, refs, addRef, handlerAddLocation};
  }
}
</script>
