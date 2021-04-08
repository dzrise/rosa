<template>
  <base-form :validators-collection="refs" @on-submit="addCategory">
    <template v-slot:form-content>
      <div class="mb-5">
        <p> Название категории </p>

        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :required="true"
              :placeholder="nameRu.placeholder"
              :errors="nameRu.errors"
              :value="nameRu.value"
              v-model="nameRu.value"
              :ref="el => addRef(el,'nameRu')"
          />
        </div>

        <div class="form__control category__form--control d-flex">
          <span class="input-group-text mr-2 h-100 ">en</span>
          <v-text-input
              class="w-100"
              :required="true"
              :placeholder="nameEn.placeholder"
              :errors="nameEn.errors"
              :value="nameEn.value"
              v-model="nameEn.value"
              :ref="el => addRef(el,'nameEn')"
          />
        </div>

      </div>

      <div class="mb-5">
        <p> Описание категории </p>

        <div class="form__control d-flex mb-3">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-textarea
              class="w-100"
              :required="true"
              :placeholder="descriptionRu.placeholder"
              :errors="descriptionRu.errors"
              :value="descriptionRu.value"
              v-model="descriptionRu.value"
              :ref="el => addRef(el,'descriptionRu')"
          />
        </div>

        <div class="form__control d-flex">
          <span class="input-group-text mr-2 h-100">en</span>
          <v-textarea
              class="w-100"
              :required="true"
              :placeholder="descriptionEn.placeholder"
              :errors="descriptionEn.errors"
              :value="descriptionEn.value"
              v-model="descriptionEn.value"
              :ref="el => addRef(el,'descriptionEn')"
          />
        </div>

      </div>

      <div class="mb-5 ">
        <div class="d-flex">

          <div class="mr-5">
            <p class="mb-1">Цвет градиента 1</p>
            <label class="d-flex align-items-center">
              <input class="form-control mr-3" type="text" :maxlength="7" v-model="color1">
              <span class="input-group-text" :style="`height: 30px; width: 30px; background-color: ${color1}`"></span>
            </label>
          </div>

          <div>
            <p class="mb-1">Цвет градиента 2</p>
            <label class="d-flex align-items-center">
              <input class="form-control mr-3" type="text" :maxlength="7" v-model="color2">
              <span class="input-group-text" :style="`height: 30px; width: 30px; background-color: ${color2}`"></span>
            </label>
          </div>

        </div>
      </div>

      <div class="mb-5">
        <upload-input title="Иконка (веб)"/>
      </div>

      <div class="mb-5">
        <upload-input title="Иконка (мобильная)"/>
      </div>

      <div class="mb-5">
        <upload-input title="Фон (мобильный)"/>
      </div>

      <div class="mb-5">
        <v-checkbox
            v-model:change="todo.value"
            :value="todo.value"
            :title="todo.title"
            :required="true"
            :errors="todo.errors"
            :ref="el => addRef(el,'todo')"

        />
        <v-checkbox
            v-model:change="onlineShop.value"
            :value="onlineShop.value"
            :title="onlineShop.title"
            :required="true"
            :errors="onlineShop.errors"
            :ref="el => addRef(el,'onlineShop')"

        />
      </div>

      <div class="mb-5">

        <div class="form__control mb-4">
          <p class="mb-1">Cекции, связанные с категорией</p>
          <multiple-select
              :name="selectSections.id"
              v-model:value="selectSections.value"
              v-model:values="selectSections.values"
              :placeholder="selectSections.placeholder"
              :value="selectSections.value"
              :values="selectSections.values"
              :options="selectSections.options"
              :required="selectSections.required"
              :errors="selectSections.errors"
              :classes="'form-control'"
              :ref="el => addRef(el,'selectSections')"
          />
        </div>

        <div class="form__control">
          <p class="mb-1">Места, связанные с категорией</p>
          <multiple-select
              :name="selectPlaces.id"
              v-model:value="selectPlaces.value"
              v-model:values="selectPlaces.values"
              :placeholder="selectPlaces.placeholder"
              :value="selectPlaces.value"
              :values="selectPlaces.values"
              :options="selectPlaces.options"
              :required="selectPlaces.required"
              :errors="selectSections.errors"
              :classes="'form-control'"
              :ref="el => addRef(el,'selectPlaces')"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-5" title="Добавить">Добавить категорию</button>
    </template>
  </base-form>
</template>

<script>
import {reactive, ref} from 'vue'
import {useStore} from 'vuex'
import DefaultButton from "@/components/defaultButton";
import BaseSelect from "@/components/FormComponents/Select/BaseSelect";
import MultipleSelect from "@/components/FormComponents/Select/MultiSelect";
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";
import BaseTextarea from "@/components/FormComponents/Textarea/Textarea";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import VTextarea from "@/components/FormComponents/Textarea/VTextarea";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";

export default {
  name: 'AddCategoryForm',
  components: {
    VCheckbox,
    VTextarea,
    VTextInput,
    BaseForm, DefaultButton, UploadInput, BaseTextarea, BaseSelect, MultipleSelect
  },
  props: {
    sections: {type: Array, required: true, default: () => ([])},
    places: {type: Array, required: true, default: () => ([])}
  },
  setup(props) {
    const store = useStore();
    const {refs, addRef} = useRefsValidation();
    const color1 = ref('#ffffff');
    const color2 = ref('#333333');
    const nameRu = reactive({
      id: 'nameRu',
      value: '',
      required: true,
      placeholder: 'Название категории',
      errors: {
        required: 'Поле название категории обязательно для заполнения\n'
      }
    });

    const nameEn = reactive({
      id: 'nameEn',
      value: '',
      required: true,
      placeholder: 'Category name',
      errors: {
        required: 'Поле название категории обязательно для заполнения\n'
      }
    });

    const descriptionRu = reactive({
      id: 'descriptionRu',
      value: '',
      required: true,
      placeholder: 'Описание категории',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });
    const descriptionEn = reactive({
      id: 'descriptionEn',
      value: '',
      required: true,
      placeholder: 'Category description',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });

    const selectSections = reactive({
      id: 'selectSections',
      placeholder: 'Мультивыбор секций',
      required: true,
      value: '',
      values: [],
      errors: {
        required: 'Обязательное поле'
      },
      options: props.sections.map(section => {
        return {id: section.id, name: section.name.ru, value: section.name.ru}
      })
    })
    const selectPlaces = reactive({
      id: 'selectPlaces',
      placeholder: 'Мультивыбор мест',
      required: true,
      value: '',
      values: [],
      errors: {
        required: 'Обязательное поле'
      },
      options: props.places.map(place => {
        return {id: place.id, name: place.title?.ru || '', value: place.name?.ru || ''}
      })
    })
    const todo = reactive({
      id: 'todo',
      title: 'Чем заняться',
      value: false,
      required: false,
      errors: {
        required: 'Это обязательное поле'
      }
    });
    const onlineShop = reactive({
      id: 'onlineShop',
      title: 'Онлайн-магазин',
      value: false,
      required: true,
      errors: {
        required: 'Это обязательное поле'
      }
    });
    const addCategory = async () => {
      const submitData = {
        name: nameRu.value,
        nameEn: nameEn.value,
        description: descriptionRu.value,
        descriptionEn: descriptionEn.value,
        webGradientColor1: color1.value,
        webGradientColor2: color2.value,
        places: selectSections,
        section: selectPlaces,
        webIconSvg: "string",
        mobileIcon: "string",
        mobileBackground: "string",
        todo: todo.value,
        onlineShop: onlineShop.value
      }
      await store.dispatch('categories/addCategory', submitData)
    }
    return {
      refs, addRef,
      color1, color2,
      nameRu, nameEn,
      descriptionRu, descriptionEn,
      selectSections, selectPlaces,
      todo, onlineShop,
      addCategory
    }
  }
}
</script>
