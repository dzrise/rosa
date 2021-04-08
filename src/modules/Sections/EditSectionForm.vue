<template>
  <base-form :validators-collection="refs" @on-submit="editSection">
    <template v-slot:form-content>
      <div class="mb-5">
        <p> Название </p>

        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :name="nameRu.id"
              :required="true"
              :placeholder="nameRu.placeholder"
              :errors="nameRu.errors"
              :value="nameRu.value"
              v-model="nameRu.value"
              :ref="el => addRef(el, 'nameRu')"
          />
        </div>

        <div class="form__control category__form--control d-flex">
          <span class="input-group-text mr-2 h-100 ">en</span>
          <v-text-input
              class="w-100"
              :name="nameEn.id"
              :required="true"
              :placeholder="nameEn.placeholder"
              :errors="nameEn.errors"
              :value="nameEn.value"
              v-model="nameEn.value"
              :ref="el => addRef(el, 'nameEn')"
          />
        </div>

      </div>

      <div class="mb-5">
        <p> Описание </p>

        <div class="form__control d-flex mb-3">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-textarea
              class="w-100"
              :name="descriptionRu.id"
              :required="true"
              :placeholder="descriptionRu.placeholder"
              :errors="descriptionRu.errors"
              :value="descriptionRu.value"
              v-model="descriptionRu.value"
              :ref="el => addRef(el, 'descriptionRu')"
          />
        </div>

        <div class="form__control d-flex">
          <span class="input-group-text mr-2 h-100">en</span>
          <v-textarea
              class="w-100"
              :name="descriptionEn.id"
              :required="true"
              :placeholder="descriptionEn.placeholder"
              :errors="descriptionEn.errors"
              :value="descriptionEn.value"
              v-model="descriptionEn.value"
              :ref="el => addRef(el, 'descriptionEn')"
          />
        </div>

      </div>

      <div class="mb-5">
        <p> Описание тарифа </p>

        <div class="form__control d-flex mb-3">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-textarea
              class="w-100"
              :name="rateDescriptionRu.id"
              :required="true"
              :placeholder="rateDescriptionRu.placeholder"
              :errors="rateDescriptionRu.errors"
              :value="rateDescriptionRu.value"
              v-model="rateDescriptionRu.value"
              :ref="el => addRef(el, 'rateDescriptionRu')"
          />
        </div>

        <div class="form__control d-flex">
          <span class="input-group-text mr-2 h-100">en</span>
          <v-textarea
              class="w-100"
              :name="rateDescriptionEn.id"
              :required="true"
              :placeholder="rateDescriptionEn.placeholder"
              :errors="rateDescriptionEn.errors"
              :value="rateDescriptionEn.value"
              v-model="rateDescriptionEn.value"
              :ref="el => addRef(el, 'rateDescriptionEn')"
          />
        </div>

      </div>

      <div class="mb-5">
        <p> Внутренний заголовок </p>

        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :name="innerTitleRu.id"
              :required="true"
              :placeholder="innerTitleRu.placeholder"
              :errors="innerTitleRu.errors"
              :value="innerTitleRu.value"
              v-model="innerTitleRu.value"
              :ref="el => addRef(el, 'innerTitleRu')"
          />
        </div>

        <div class="form__control category__form--control d-flex">
          <span class="input-group-text mr-2 h-100 ">en</span>
          <v-text-input
              class="w-100"
              :name="innerTitleEn.id"
              :required="true"
              :placeholder="innerTitleEn.placeholder"
              :errors="innerTitleEn.errors"
              :value="innerTitleEn.value"
              v-model="innerTitleEn.value"
              :ref="el => addRef(el, 'innerTitleEn')"
          />
        </div>

      </div>

      <div class="mb-5">
        <p> Внутреннее описание</p>

        <div class="form__control d-flex mb-3">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-textarea
              class="w-100"
              :name="innerDescriptionRu.id"
              :required="true"
              :placeholder="innerDescriptionRu.placeholder"
              :errors="innerDescriptionRu.errors"
              :value="innerDescriptionRu.value"
              v-model="innerDescriptionRu.value"
              :ref="el => addRef(el, 'innerDescriptionRu')"
          />
        </div>

        <div class="form__control d-flex">
          <span class="input-group-text mr-2 h-100">en</span>
          <v-textarea
              class="w-100"
              :name="innerDescriptionEn.id"
              :required="true"
              :placeholder="innerDescriptionEn.placeholder"
              :errors="innerDescriptionEn.errors"
              :value="innerDescriptionEn.value"
              v-model="innerDescriptionEn.value"
              :ref="el => addRef(el, 'innerDescriptionEn')"
          />
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
        <p> Индекс сортировки (для рекомендации) </p>

        <div class="form__control category__form--control mb-4 d-flex">
          <v-text-input
              class="w-100"
              :name="recomendationSort.id"
              :required="true"
              :placeholder="recomendationSort.placeholder"
              :errors="recomendationSort.errors"
              :value="recomendationSort.value"
              v-model="recomendationSort.value"
              :ref="el => addRef(el, 'recomendationSort')"
          />
        </div>
      </div>

      <div class="mb-5">
        <h3 class="mb-4">Настройки</h3>

        <p>ID: {{ section.id }}</p>

        <div class="form__control ">
          <p class="mb-2">UI controls (JSON)</p>
          <v-textarea
              class="w-100"
              classes="area-controls"
              :name="uiControls.id"
              :required="false"
              :placeholder="uiControls.placeholder"
              :errors="uiControls.errors"
              :value="uiControls.value"
              v-model="uiControls.value"
              :ref="el => addRef(el, 'uiControls')"
          />

          <VCheckbox
              :name="isOnlineOnly.id"
              v-model="isOnlineOnly.value"
              :value="isOnlineOnly.value"
              :title="isOnlineOnly.title"
              :required="false"
              :errors="isOnlineOnly.errors"
              :ref="el => addRef(el, 'isOnlineOnly')"
          />
          <VCheckbox
              :name="isActivationDateRequired.id"
              v-model="isActivationDateRequired.value"
              :value="isActivationDateRequired.value"
              :title="isActivationDateRequired.title"
              :required="false"
              :errors="isActivationDateRequired.errors"
              :ref="el => addRef(el, 'isActivationDateRequired')"
          />
          <VCheckbox
              :name="isNotQuantitave.id"
              v-model="isNotQuantitave.value"
              :value="isNotQuantitave.value"
              :title="isNotQuantitave.title"
              :required="false"
              :errors="isNotQuantitave.errors"
              :ref="el => addRef(el, 'isNotQuantitave')"
          />
        </div>
      </div>

      <div class="mb-5">

        <div class="form__control mb-4">
          <h4 class="mb-3">Продукты в секции</h4>
          <multiple-select
              :name="selectProducts.id"
              v-model:value="selectProducts.value"
              v-model:values="selectProducts.values"
              :placeholder="selectProducts.placeholder"
              :value="selectProducts.value"
              :values="selectProducts.values"
              :options="selectProducts.options"
              :required="selectProducts.required"
              :errors="selectProducts.errors"
              :classes="'form-control'"
              :ref="el => addRef(el, 'selectProducts')"
          />
        </div>

        <div class="form__control">
          <h4 class="mb-3">Категории, связанные с категорией</h4>
          <multiple-select
              :name="selectCategories.id"
              v-model:value="selectCategories.value"
              v-model:values="selectCategories.values"
              :placeholder="selectCategories.placeholder"
              :value="selectCategories.value"
              :values="selectCategories.values"
              :options="selectCategories.options"
              :required="selectCategories.required"
              :errors="selectProducts.errors"
              :classes="'form-control'"
              :ref="el => addRef(el, 'selectCategories')"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-5" title="Сохранить">Сохранить</button>

    </template>
  </base-form>
</template>

<script>
import {reactive, computed} from 'vue'
import {useStore} from 'vuex'
import DefaultButton from "@/components/defaultButton";
import BaseSelect from "@/components/FormComponents/Select/BaseSelect";
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";
import MultipleSelect from "@/components/FormComponents/Select/MultiSelect";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import VTextarea from "@/components/FormComponents/Textarea/VTextarea";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";

export default {
  name: "EditSectionForm",
  props: {
    section: {type: Object, default: () => ({}), required: true},
    categories: {type: Array, default: () => ([]), required: true},
    products: {type: Array, default: () => ([]), required: true},
  },
  components: {BaseForm, DefaultButton, VTextInput, UploadInput, VTextarea, BaseSelect, VCheckbox, MultipleSelect},
  setup(props) {
    const store = useStore();
    const {refs, addRef} = useRefsValidation();

    const createCategoriesOptions = computed(() => props.categories.filter(item => item.name.ru).map(category => ({
      id: category.id,
      name: category.name.ru,
      value: category.name.ru
    })));

    const createProductsOptions = computed(() => props.products.filter(item => item.name && item.name.trim()).map(product => ({
      id: product.id,
      name: product.name,
      value: product.name
    })));

    const nameRu = reactive({
      id: 'nameRu',
      value: props.section.name?.ru || '',
      required: true,
      placeholder: 'Название секции',
      errors: {
        required: 'Поле название категории обязательно для заполнения\n'
      }
    });

    const nameEn = reactive({
      id: 'nameEn',
      value: props.section.name?.en || '',
      required: true,
      placeholder: 'Section name',
      errors: {
        required: 'Поле название категории обязательно для заполнения\n'
      }
    });

    const descriptionRu = reactive({
      id: 'descriptionRu',
      value: props.section.description?.ru || '',
      required: true,
      placeholder: 'Описание секции',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });
    const descriptionEn = reactive({
      id: 'descriptionEn',
      value: props.section.description?.en || '',
      required: true,
      placeholder: 'Section description',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });

    const rateDescriptionRu = reactive({
      id: 'rateDescriptionRu',
      value: props.section.tariffDescription?.ru || '',
      required: true,
      placeholder: 'Описание секции',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });

    const rateDescriptionEn = reactive({
      id: 'rateDescriptionEn',
      value: props.section.tariffDescription?.en || '',
      required: true,
      placeholder: 'Section description',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });

    const innerTitleRu = reactive({
      id: 'innerTitleRu',
      value: props.section.innerTitle?.ru || '',
      required: true,
      placeholder: 'Название секции',
      errors: {
        required: 'Поле название категории обязательно для заполнения\n'
      }
    });

    const innerTitleEn = reactive({
      id: 'innerTitleEn',
      value: props.section.innerTitle?.en || '',
      required: true,
      placeholder: 'Section name',
      errors: {
        required: 'Поле название категории обязательно для заполнения\n'
      }
    });

    const innerDescriptionRu = reactive({
      id: 'innerDescriptionRu',
      value: props.section.innerDescription?.ru || '',
      required: true,
      placeholder: 'Описание секции',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });

    const innerDescriptionEn = reactive({
      id: 'innerDescriptionEn',
      value: props.section.description?.en || '',
      required: true,
      placeholder: 'Section description',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });

    const recomendationSort = reactive({
      id: 'recomendationSort',
      value: props.section.recomendationSort || 0,
      required: true,
      placeholder: 'Для рекомендации',
      errors: {
        required: 'Поле название категории обязательно для заполнения\n'
      }
    });

    const uiControls = reactive({
      id: 'uiControls',
      value: JSON.stringify(props.section.settings?.controls, null, 2) || '',
      required: true,
      placeholder: '',
      errors: {
        required: 'Поле описание категории обязательно для заполнения\n'
      }
    });

    const isOnlineOnly = reactive({
      id: 'isOnlineOnly',
      title: 'Только онлайн',
      value: props.section.settings?.isOnlineOnly || false,
      required: false,
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const isActivationDateRequired = reactive({
      id: 'isActivationDateRequired',
      title: 'Требуется дата',
      value: props.section.settings?.isActivationDateRequired || false,
      required: false,
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const isNotQuantitave = reactive({
      id: 'isNotQuantitave',
      title: 'Нельзя изменять количество в корзине',
      value: props.section.settings?.isNotQuantitative || false,
      required: false,
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const selectProducts = reactive({
      id: 'selectProducts',
      placeholder: 'Мультивыбор продуктов',
      required: true,
      value: '',
      errors: {
        required: 'Обязательное поле'
      },
      options: createProductsOptions.value
    })
    const selectCategories = reactive({
      id: 'selectCategories',
      placeholder: 'Мультивыбор категорий',
      required: true,
      value: '',
      errors: {
        required: 'Обязательное поле'
      },
      options: createCategoriesOptions.value
    })
    const editSection = async () => {
      const submitData = {
        id: props.section.code,
        code: props.section.code,
        name: {
          ru: nameRu.value,
          en: nameEn.value
        },
        description: {
          ru: descriptionRu.value,
          en: descriptionEn.value
        },
        tariffDescription: {
          ru: rateDescriptionRu.value,
          en: rateDescriptionEn.value,
        },
        innerTitle: {
          ru: innerTitleRu.value,
          en: innerTitleEn.value
        },
        innerDescription: {
          ru: innerDescriptionRu.value,
          en: innerDescriptionEn.value,
        },
        picture: 'null',
        webIcon: 'null',
        webIconSvg: 'null',
        mobileIcon: 'null',
        mobileBackground: 'null',
        settings:
            {
              section: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              controls: JSON.parse(uiControls.value) || [],
              isOnlyOne: isOnlineOnly.value,
              isActivationDateRequired: isActivationDateRequired.value,
              activeDays: 0,
              isNotQuantitave: isNotQuantitave.value
            }
      }
      await store.dispatch('sections/editSection', submitData)
    }
    return {
      nameRu, nameEn,
      descriptionRu, descriptionEn,
      recomendationSort,
      uiControls,
      rateDescriptionRu, rateDescriptionEn,
      innerTitleRu, innerTitleEn,
      innerDescriptionRu, innerDescriptionEn,
      isOnlineOnly, isActivationDateRequired, isNotQuantitave,
      selectProducts, selectCategories,
      refs, addRef,
      editSection,
    }
  }
}
</script>
