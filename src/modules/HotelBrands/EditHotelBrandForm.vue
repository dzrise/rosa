<template>
  <base-form :validators-collection="refs" @on-submit="handlerEditHotelBrand">
    <template v-slot:form-content>
      <h1 class="mb-5">Добавить бред отеля</h1>
      <h3 class="mb-5">ID: {{hotelBrand.id}}</h3>
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

      <button type="submit" class="btn btn-primary mt-5" title="Изменить бред отеля">Изменить бред отеля</button>
    </template>
  </base-form>
</template>

<script>
import {reactive} from 'vue';
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import {editHotelBrand} from "@/Api/requests";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";

export default {
  name: "EditHotelBrandForm",
  components: {VCheckbox, VTextInput, BaseForm},
  props:{
    hotelBrand: {type: Object, default: () => ({}), required: true},
  },

  setup(props) {
    const {refs, addRef} = useRefsValidation();
    const name = reactive({
      ru: {
        id: 'nameRu',
        value: props.hotelBrand.name?.ru || '',
        required: true,
        placeholder: 'Введите бред отеля',
        errors: {
          required: 'Это обязательное поле'
        }
      },
      en: {
        id: 'nameEn',
        value:  props.hotelBrand.name?.en || '',
        placeholder: 'Enter hotel brand',
      }
    });
    const isActive = reactive({
      id: 'isActive',
      title: 'Активен',
      value:  props.hotelBrand.isActive || false,
    })

    async function handlerEditHotelBrand() {
      const data = {
        id: props.hotelBrand.id,
        name: {ru: name.ru.value, en: name.en.value},
        isActive: isActive.value
      }
      await editHotelBrand(data);
    }

    return {
      name,
      isActive,
      refs,
      addRef, handlerEditHotelBrand
    }
  }
}
</script>
