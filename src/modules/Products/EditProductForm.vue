<template>
  <base-form :validators-collection="refs" @on-submit="editProduct">
    <template v-slot:form-content>

      <div class="mb-5">
        <p class="mb-3">Название категории:</p>

        <div class="form__control category__form--control mb-3 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :name="nameRu.id"
              v-model="nameRu.value"
              :value="nameRu.value"
              :required="nameRu.required"
              :placeholder="nameRu.placeholder"
              :errors="nameRu.errors"
              classes="form-control w-100"
              :ref="el => addRef(el, 'nameRu')"
          />
        </div>

        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">en</span>
          <v-text-input
              class="w-100"
              :name="nameEn.id"
              v-model="nameEn.value"
              :value="nameEn.value"
              :required="nameEn.required"
              :placeholder="nameEn.placeholder"
              :errors="nameEn.errors"
              classes="form-control w-100"
              :ref="el => addRef(el, 'nameEn')"
          />
        </div>

      </div>

      <div class="mb-5" v-if="selectSections.options.length">
        <div class="form__control category__form--control mb-3 d-flex">
          <base-select
              class="w-100"
              :name="selectSections.id"
              v-model:value="selectSections.value"
              :placeholder="selectSections.placeholder"
              :title="selectSections.title"
              :value="selectSections.value"
              :options="selectSections.options"
              :required="selectSections.required"
              :errors="selectSections.errors"
              :classes="'form-control'"
              :ref="el => addRef(el, 'selectSections')"
          />
        </div>
      </div>

      <div class="mb-4">
        <h3> Настройки </h3>
        <div class="form__control category__form--control mb-3 d-flex">
          <v-text-input
              class="w-100"
              :name="cardType.id"
              v-model="cardType.value"
              :value="cardType.value"
              :required="cardType.required"
              :title="cardType.title"
              :placeholder="cardType.placeholder"
              :errors="cardType.errors"
              classes="form-control w-100"
              :ref="el => addRef(el, 'cardType')"/>
        </div>
      </div>

      <div class="mb-4">
        <div class="form__control category__form--control mb-3 d-flex">
          <v-text-input
              class="w-100"
              :name="ageCode.id"
              v-model="ageCode.value"
              :value="ageCode.value"
              :required="ageCode.required"
              :title="ageCode.title"
              :placeholder="ageCode.placeholder"
              :errors="ageCode.errors"
              classes="form-control w-100"
              :ref="el => addRef(el, 'ageCode')"/>
        </div>
      </div>

      <div class="mb-4">
        <div class="form__control category__form--control d-flex">
          <v-text-input
              class="w-100"
              :name="circleCount.id"
              v-model="circleCount.value"
              :value="circleCount.value"
              :required="circleCount.required"
              :title="circleCount.title"
              :placeholder="circleCount.placeholder"
              :errors="circleCount.errors"
              classes="form-control w-100"
              :ref="el => addRef(el, 'circleCount')"/>
        </div>
      </div>

      <div class="mb-4">
        <div class="form__control category__form--control d-flex">
          <v-text-input
              class="w-100"
              :name="activeDays.id"
              v-model="activeDays.value"
              :value="activeDays.value"
              :required="activeDays.required"
              :title="activeDays.title"
              :placeholder="activeDays.placeholder"
              :errors="activeDays.errors"
              classes="form-control w-100"
              :ref="el => addRef(el, 'activeDays')"/>
        </div>
      </div>

      <div class="mb-4" v-if="product?.prices?.length">
        <h3 class="mb-4"> Цены (загружаются из ППС) </h3>
        <div
            class="form__control category__form--control mb-2 d-flex"
            v-for="(item, index) in product.prices"
            :key="`${item}-${index}`"
        >
        <span class="mr-3">
          <b>{{ $filters.dateFilter(item.dateStart) }} - {{ $filters.dateFilter(item.dateEnd) }}</b>
        </span>
          <p>{{ $filters.currencyFilter(item.price, 'руб.') }}</p>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mr-3" title="Изменить">Сохранить</button>
      <button type="submit" class="btn btn-primary" title="Изменить">Сохранить и перезагрузить цены из ППС</button>

    </template>
  </base-form>
</template>

<script>
import {ref, reactive} from 'vue'
import {useStore} from "vuex";
import VTextInput from '@/components/FormComponents/Inputs/TextInput/VTextInput'
import BaseSelect from "@/components/FormComponents/Select/BaseSelect";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import BaseForm from "@/components/FormComponents/Form/BaseForm";

export default {
  name: 'EditProductForm',
  components: {BaseForm, BaseSelect, VTextInput},
  props: {
    product: {type: Object, default: () => ({}), required: true},
    sections: {type: Array, default: () => ([]), required: true},
  },
  setup({product,sections}) {
    const {refs, addRef} = useRefsValidation();
    const store = useStore();
    const nameRu = reactive({
      id: 'nameRu',
      value: product?.name || '',
      required: true,
      title: 'Название продукта:',
      placeholder: 'Введите название продукта',
      errors: {
        required: 'Обязательное поле'
      }
    });

    const nameEn = reactive({
      id: 'nameEn',
      value: '',
      required: true,
      title: 'Название продукта:',
      placeholder: 'Enter product name',
      errors: {
        required: 'Обязательное поле'
      }
    });

    const selectSections = reactive({
      id: 'selectSections',
      placeholder: 'Выбор одной из секций',
      title: 'Секции:',
      required: true,
      value: {name: '', id: ''},
      errors: {
        required: 'Обязательное поле'
      },
      options: sections.map(section => {
        return {id: section.id, name: section.name.ru, value: section.name.ru}
      })
    })

    const cardType = reactive({
      id: 'cardType',
      value: product.settings?.cardType || '',
      required: true,
      title: 'Тип карты:',
      placeholder: 'Введите тип карты',
      errors: {
        required: 'Обязательное поле'
      }
    });

    const ageCode = reactive({
      id: 'ageCode',
      value: product.settings?.age || '',
      required: true,
      title: 'Код возраста:',
      placeholder: 'Введите код возраста',
      errors: {
        required: 'Обязательное поле'
      }
    });

    const circleCount = reactive({
      id: 'circleCount',
      value: product.settings?.rounds || '',
      required: true,
      title: 'Количество кругов:',
      placeholder: 'Введите количество кругов',
      errors: {
        required: 'Обязательное поле'
      }
    });

    const activeDays = reactive({
      id: 'activeDays',
      value: product.settings?.amountOfDays || '',
      required: true,
      title: 'Количество дней активности билета:',
      placeholder: 'Введите количество дней активности билета',
      errors: {
        required: 'Обязательное поле'
      }
    });

    const editProduct = async () => {
      const {id} = product;
      const data = {
        id,
        submitData: {
          name: nameRu.value,
        }
      }
      await store.dispatch('products/editProduct', data)
    }

    return {
      nameRu,
      nameEn,
      cardType,
      circleCount,
      activeDays,
      selectSections,
      ageCode,
      refs,
      addRef,
      editProduct,
    }
  }

}
</script>
<style>
span {
  display: block;
}

.form-group {
  position: relative;
}
</style>
