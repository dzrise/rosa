<template>
  <base-form :validators-collection="refs" @on-submit="addPackageItem">
    <template v-slot:form-content>

      <div class="mb-5">
        <p> Название пакета </p>
        <div class="form__control place__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :required="true"
              :placeholder="name.ru.placeholder"
              :errors="name.ru.errors"
              :value="name.ru.value"
              v-model="name.ru.value"
              :ref="el => addRef(el,'nameRu')"
          />
        </div>

        <div class="form__control place__form--control d-flex">
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
        <p> Подзаголовок пакета </p>
        <div class="form__control place__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :required="true"
              :placeholder="subName.ru.placeholder"
              :errors="subName.ru.errors"
              :value="subName.ru.value"
              v-model="subName.ru.value"
              :ref="el => addRef(el,'subNameRu')"
          />
        </div>

        <div class="form__control place__form--control d-flex">
          <span class="input-group-text mr-2 h-100 ">en</span>
          <v-text-input
              class="w-100"
              :placeholder="subName.en.placeholder"
              :value="subName.en.value"
              v-model="subName.en.value"
          />
        </div>
      </div>

      <div class="mb-4">
        <p> Описание пакета</p>

        <div class="form__control d-flex mb-3">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-textarea
              class="w-100"
              :required="true"
              :placeholder="description.ru.placeholder"
              :errors="description.ru.errors"
              :value="description.ru.value"
              v-model="description.ru.value"
              :ref="el => addRef(el,'descriptionRu')"
          />
        </div>

        <div class="form__control d-flex mb-3">
          <span class="input-group-text mr-2 h-100">en</span>
          <v-textarea
              class="w-100"
              :placeholder="description.en.placeholder"
              :value="description.en.value"
              v-model="description.en.value"
          />
        </div>
      </div>

      <div class="mb-5">
        <div class="form__control place__form--control">
          <base-select
              classes="form-control w-100 w-100"
              :options="selectPlaces.options"
              :placeholder="selectPlaces.placeholder"
              :title="selectPlaces.title"
              :value="selectPlaces.value"
              v-model:value="selectPlaces.value"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control place__form--control">
          <upload-input
              :title="webBackground.title"
              :value="webBackground.value"
              v-model:change="webBackground.value"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary" title="Добавить">Добавить пакет</button>

    </template>
  </base-form>
</template>

<script>
import {reactive, computed} from 'vue';
import {useStore} from 'vuex';
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import {formDataCreator} from "@/services";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import VTextarea from "@/components/FormComponents/Textarea/VTextarea";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import BaseSelect from "@/components/FormComponents/Select/BaseSelect";
import MultiSelect from "@/components/FormComponents/Select/MultiSelect";
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";

export default {
  name: "addPackageItemElementForm",
  components: {UploadInput, BaseSelect, MultiSelect, VTextarea, VTextInput, BaseForm, VCheckbox},
  props: {
    places: {type: Array, default: () => ([]), required: true}
  },
  setup(props) {
    const store = useStore();
    const {refs, addRef} = useRefsValidation();
    const createPlacesOptions = computed(() => props.places.filter(item => item.title?.ru).map(place => ({
      id: place.id,
      name: place.title.ru,
      value: place.title.ru
    })));
    const name = reactive({
      ru: {
        id: 'nameRu',
        value: '',
        required: true,
        placeholder: 'Название пакета',
        errors: {
          required: 'Обязательное поле'
        }
      },
      en: {
        id: 'nameEn',
        value: '',
        placeholder: 'Package name',
      }
    });
    const subName = reactive({
      ru: {
        id: 'subNameRu',
        value: '',
        required: true,
        placeholder: 'Подзаголовок пакета',
        errors: {
          required: 'Обязательное поле'
        }
      },
      en: {
        id: 'subNameEn',
        value: '',
        placeholder: 'Package sub name',
      }
    });

    const description = reactive({
      ru: {
        id: 'descriptionRu',
        value: '',
        required: true,
        placeholder: 'Описание пакета',
        errors: {
          required: 'Обязательное поле'
        }
      },
      en: {
        id: 'descriptionEn',
        value: '',
        placeholder: 'Package description',
      }
    });
    const selectPlaces = reactive({
      id: 'selectCategories',
      placeholder: 'Выберете место',
      title: 'Единый выбор мест',
      value: {
        name: '',
        id: '',
      },
      options: createPlacesOptions.value
    })

    const webBackground = reactive({
      title: 'Фон (веб)',
      value: ''
    })
    const addPackageItem = async () => {
      const data = {
        ['name[ru]']:name.ru.value,
        ['name[en]']:name.en.value,
        ['subName[ru]']:subName.ru.value,
        ['subName[en]']:subName.en.value,
        ['description[ru]']:description.ru.value,
        ['description[en]']:description.en.value,
        photo: webBackground.value,
        place: selectPlaces.value.id,
      };
      const {formData} = formDataCreator(data)

      await store.dispatch('packages/addPackageItem', formData)
    }
    return {
      name, description, subName,
      selectPlaces,
      webBackground,
      refs, addRef,
      addPackageItem
    }
  }
}
</script>
