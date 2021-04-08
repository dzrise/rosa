<template>
  <base-form :validators-collection="refs" @on-submit="handlerAddHotelBrand">
    <template v-slot:form-content>
      <h1 class="mb-5">Добавить бред отеля</h1>
      <div class="mb-5">
        <h4 class="mb-3"> Бред отеля </h4>
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

      <div class="mb-5">
        <div class="form__control category__form--control mb-4 d-flex">
          <v-checkbox
              v-model:change="isActive.value"
              :value="isActive.value"
              :title="isActive.title"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-5" title="Добавить бред отеля">Добавить бред отеля</button>
    </template>
  </base-form>
</template>

<script>
import {reactive} from 'vue';
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import {addHotelBrand} from "@/Api/requests";

export default {
  name: "addHotelBrandForm",
  components: {VCheckbox, VTextInput, BaseForm},

  setup() {
    const {refs, addRef} = useRefsValidation();
    const name = reactive({
      ru: {
        id: 'nameRu',
        value: '',
        required: true,
        placeholder: 'Введите название отеля',
        errors: {
          required: 'Это обязательное поле'
        }
      },
      en: {
        id: 'nameEn',
        value: '',
        placeholder: 'Enter hotel brand',
      }
    });
    const isActive = reactive({
      id: 'isActive',
      title: 'Активен',
      value: false,
    })

    async function handlerAddHotelBrand() {
      const data = {
        name: {ru: name.ru.value, en: name.en.value},
        isActive: isActive.value
      }
      await addHotelBrand(data);
    }

    return {
      name,
      isActive,
      refs,
      addRef, handlerAddHotelBrand
    }
  }
}
</script>
