<template>
  <base-form :validators-collection="refs" @on-submit="handlerAddPackage">
    <template v-slot:form-content>

      <div class="mb-5">
        <p> Название пакета </p>
        <div class="form__control category__form--control mb-4 d-flex">
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

      <div class="form__control category__form--control mb-3">
        <v-checkbox
            v-model:change="placements.value"
            :value="placements.value"
            :title="placements.title"
        />
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <v-input-number
              class="w-100"
              :required="true"
              :placeholder="dayCount.placeholder"
              :title="dayCount.title"
              :errors="dayCount.errors"
              :value="dayCount.value"
              v-model="dayCount.value"
              :ref="el => addRef(el,'dayCount')"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <base-select
              class="w-100"
              :name="foodType.id"
              v-model:value="foodType.value"
              :placeholder="foodType.placeholder"
              :required="foodType.required"
              :errors="code.errors"
              :title="foodType.title"
              :value="foodType.value"
              :options="foodType.options"
              :classes="'form-control'"
              :ref="el => addRef(el,'foodType')"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <v-text-input
              class="w-100"
              :required="true"
              :placeholder="code.placeholder"
              :title="code.title"
              :errors="code.errors"
              :value="code.value"
              v-model="code.value"
              :ref="el => addRef(el,'code')"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <v-input-number
              class="w-100"
              :required="true"
              :placeholder="minPrice.placeholder"
              :title="minPrice.title"
              :errors="minPrice.errors"
              :value="minPrice.value"
              v-model="minPrice.value"
              :ref="el => addRef(el,'minPrice')"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <v-input-number
              class="w-100"
              :required="true"
              :title="profit.title"
              :placeholder="profit.placeholder"
              :errors="profit.errors"
              :value="profit.value"
              v-model="profit.value"
              :ref="el => addRef(el,'profit')"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <upload-input
              :title="photo.title"
              :value="photo.value"
              v-model:change="photo.value"
          />
        </div>
      </div>

      <div class="mb-3">
        <div class="form__control category__form--control">
          <v-input-number
              class="w-100"
              :required="sortIndex.required"
              :title="sortIndex.title"
              :placeholder="sortIndex.placeholder"
              :value="sortIndex.value"
              v-model="sortIndex.value"
          />
        </div>
      </div>

      <div class="mb-3">
        <div>
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="mb-3">Элементы пакета</h3>
            <button class="btn btn-primary mr-3" title="Создать" type="button" @click="toAddPackageElement">
              Создать новый
            </button>
          </div>
          <div class="mb-3">
            <div class="form__control category__form--control mb-3">
              <multi-select
                  :name="selectPackageItem.id"
                  v-model:value="selectPackageItem.value"
                  v-model:values="selectPackageItem.values"
                  :placeholder="selectPackageItem.placeholder"
                  :value="selectPackageItem.value"
                  :values="selectPackageItem.values"
                  :options="selectPackageItem.options"
                  :classes="'form-control'"
                  :ref="el => addRef(el, 'selectPackageItem')"
              />
            </div>
            <template v-for="card in selectPackageItem.values" :key="card.id">
              <package-item-card @on-remove="handlerRemovePackageItem" :card="card" class="mb-2"/>
            </template>
          </div>

        </div>
      </div>

      <operating-conditions
          :conditions="conditions"
          @add-condition="addOperatingConditions"
          @remove-condition="removeOperatingConditions"
      />

      <button type="submit" class="btn btn-primary" title="Добавить">Добавить пакет</button>
    </template>
  </base-form>
</template>

<script>
import {reactive, computed, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import {formDataCreator} from "@/services";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import VInputNumber from "@/components/FormComponents/Inputs/NumberInput/VInputNumber";
import VTextarea from "@/components/FormComponents/Textarea/VTextarea";
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import BaseSelect from "@/components/FormComponents/Select/BaseSelect";
import MultiSelect from "@/components/FormComponents/Select/MultiSelect";
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";
import PackageItemCard from "@/components/packages/PackageItemCard";
import OperatingConditions from "@/components/packages/OperatingConditions";
import {addPackage} from "@/Api/requests"
import {packagesRoutes} from "@/constants/RoutesNames";

const {ADD_PACKAGE_ELEMENT} = packagesRoutes;

export default {
  name: "AddPackageForm",
  components: {
    PackageItemCard,
    UploadInput, BaseSelect, MultiSelect, OperatingConditions, VTextarea, VTextInput, VInputNumber, BaseForm, VCheckbox
  },
  props: {
    packageItems: {type: Array, default: () => ([]), required: true,},
    foodTypes: {type: Array, default: () => ([]), required: true,}
  },
  setup(props) {
    const {refs, addRef} = useRefsValidation();
    const router = useRouter();
    const store = useStore();
    const createPackageItemsOptions = computed(() => props.packageItems.filter(item => item.name?.ru).map(item => ({
      id: item.id,
      name: item.name.ru,
      value: item.name.ru,
    })));

    const createFoodTypesOptions = computed(() => props.foodTypes.filter(item => item.name?.ru).map(place => ({
      id: place.id,
      name: place.name.ru,
      value: place.name.ru
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
    })

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
    })

    const photo = reactive({
      id: 'photo',
      title: 'Изображение',
      value: '',
    })

    const placements = reactive({
      id: 'placements',
      title: 'С размещением',
      value: false,
    });

    const foodType = reactive({
      id: 'foodType',
      placeholder: 'Единый выбор типа питания',
      title: 'Типа питания',
      required: true,
      errors: {
        required: 'Обязательное поле'
      },
      value: {
        name: '',
        id: '',
      },
      options: createFoodTypesOptions.value
    });

    const dayCount = reactive({
      id: 'dayCount',
      value: 0,
      required: true,
      title: 'Количество дней',
      placeholder: 'Введите количество name',
      errors: {
        required: 'Обязательное поле'
      }
    });

    const code = reactive({
      id: 'code',
      value: '',
      required: true,
      title: 'Код',
      placeholder: 'Введите код',
      errors: {
        required: 'Обязательное поле'
      }
    });

    const minPrice = reactive({
      id: 'minPrice',
      title: 'Минимальная стоимость (руб. / чел.)',
      value: 0,
      placeholder: 'Введите минимальную стоимость',
      required: true,
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const profit = reactive({
      id: 'profit',
      title: 'Выгода (руб. / чел)',
      value: '',
      placeholder: 'Введите выгоду',
      required: 0,
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const sortIndex = reactive({
      id: 'sortIndex',
      title: 'Индекс сортировки',
      value: '',
      placeholder: 'Введите индекс',
    });

    const selectPackageItem = reactive({
      id: 'selectPackageItem',
      placeholder: 'Мультивыбор элементов пакета',
      value: '',
      values: [],
      options: createPackageItemsOptions.value
    })

    let conditions = ref([]);

    const addOperatingConditions = () => {
      const condition = {label: {ru: 'ru', en: 'en'}, value: {ru: '', en: ''},};
      conditions.value.push(condition);
    }
    const removeOperatingConditions = (id) => {
      conditions.value = conditions.value.filter((_, index) => index !== id);
    }

    const toAddPackageElement = () => {
      router.push(ADD_PACKAGE_ELEMENT)
    }

    const handlerRemovePackageItem = (id) => {
      selectPackageItem.values = selectPackageItem.values.filter(item => item.id !== id)
    }

    const handlerAddPackage = async () => {
      const data = {
        ['name[ru]']: name.ru.value,
        ['name[en]']: name.en.value,
        ['description[ru]']: description.ru.value,
        ['description[en]']: description.en.value,
        dayCount: dayCount.value,
        minPrice: minPrice.value,
        profit: profit.value,
        code: code.value,
        foodType: foodType.value.id,
        isWithAccommodation: placements.value,
        webBackground: photo.value,
        sortIndex: sortIndex.value,
        items: selectPackageItem.values.map(item => item.id),
      };
      const {formData} = formDataCreator(data);
      await addPackage(formData)
    }
    return {
      name, description,
      dayCount, code,
      minPrice, profit,
      sortIndex,
      placements,
      photo,
      foodType,
      conditions,
      selectPackageItem,
      refs, addRef,
      addOperatingConditions,
      handlerRemovePackageItem,
      removeOperatingConditions,
      toAddPackageElement,
      handlerAddPackage,
    }
  }
}
</script>
