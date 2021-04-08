<template>
  <base-form :validators-collection="refs" @on-submit="handlerAddHotel">
    <template v-slot:form-content>

      <h1 class="mb-5">Добавить отель</h1>
      <div class="mb-5">
        <h4 class="mb-3"> Название отеля </h4>
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
        <h4 class="mb-3"> Описание отеля </h4>
        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-textarea
              class="w-100"
              :required="description.ru.required"
              :placeholder="description.ru.placeholder"
              :errors="description.ru.errors"
              :value="description.ru.value"
              v-model="description.ru.value"
              :ref="el => addRef(el,'descriptionRu')"
          />
        </div>

        <div class="form__control category__form--control d-flex">
          <span class="input-group-text mr-2 h-100 ">en</span>
          <v-textarea
              class="w-100"
              :placeholder="description.en.placeholder"
              :value="description.en.value"
              v-model="description.en.value"
          />
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Количество звезд </h4>
        <div class="form__control category__form--control">
          <base-select
              class="w-100"
              :required="starCount.required"
              :placeholder="starCount.placeholder"
              :errors="starCount.errors"
              :value="starCount.value"
              :options="starCount.options"
              v-model:value="starCount.value"
              :ref="el => addRef(el,'starCount')"
          />
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Локации </h4>
        <div class="form__control category__form--control">
          <base-select
              class="w-100"
              :required="location.required"
              :placeholder="location.placeholder"
              :errors="location.errors"
              :value="location.value"
              :options="location.options"
              v-model:value="location.value"
              :ref="el => addRef(el,'location')"
          />
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Адрес </h4>
        <div class="form__control category__form--control mb-4 d-flex">
          <span class="input-group-text mr-2 h-100">ru</span>
          <v-text-input
              class="w-100"
              :required="address.ru.required"
              :placeholder="address.ru.placeholder"
              :errors="address.ru.errors"
              :value="address.ru.value"
              v-model="address.ru.value"
              :ref="el => addRef(el,'addressRu')"
          />
        </div>

        <div class="form__control category__form--control d-flex">
          <span class="input-group-text mr-2 h-100 ">en</span>
          <v-text-input
              class="w-100"
              :placeholder="address.en.placeholder"
              :value="address.en.value"
              v-model="address.en.value"
          />
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> логотипы </h4>
        <div class="form__control category__form--control mb-3">
          <upload-input :value="svgLogo.value" v-model:change="svgLogo.value" title="Логотип SVG"/>
        </div>

        <div class="form__control category__form--control">
          <upload-input :value="pngLogo.value" v-model:change="pngLogo.value" title="Логотип PNG"/>
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Типы отелей </h4>
        <div class="form__control category__form--control">
          <base-select
              class="w-100"
              :required="hotelType.required"
              :placeholder="hotelType.placeholder"
              :errors="hotelType.errors"
              :value="hotelType.value"
              :options="hotelType.options"
              v-model:value="hotelType.value"
              :ref="el => addRef(el,'hotelType')"
          />
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Заполните ссылки в формате JSON </h4>
        <div class="form__control category__form--control">
          <v-textarea
              class="w-100"
              :required="links.required"
              :placeholder="links.placeholder"
              :errors="links.errors"
              :value="links.value"
              v-model="links.value"
              :ref="el => addRef(el,'links')"
          />
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Бренды отелей </h4>
        <div class="form__control category__form--control">
          <base-select
              class="w-100"
              :required="hotelBrand.required"
              :placeholder="hotelBrand.placeholder"
              :errors="hotelBrand.errors"
              :value="hotelBrand.value"
              :options="hotelBrand.options"
              v-model:value="hotelBrand.value"
              :ref="el => addRef(el,'hotelBrands')"
          />
        </div>
      </div>

      <div class="mb-5">
        <h4 class="mb-3"> Координаты отеля </h4>
        <div class="form__control category__form--control mb-4 ">
          <map-component class="mb-3" @on-click="handleChangeCoords"/>
          <div class="d-flex">
            <v-text-input
                class="w-100 mr-3"
                :placeholder="coords.lng.placeholder"
                :value="coords.lng.value"
                v-model="coords.lng.value"
            />
            <v-text-input
                class="w-100"
                :placeholder="coords.lat.placeholder"
                :value="coords.lat.value"
                v-model="coords.lat.value"
            />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-5" title="Добавить отель">Добавить отель</button>
    </template>
  </base-form>
</template>

<script>
import {reactive, computed} from 'vue';
import VCheckbox from "@/components/FormComponents/Checkbox/VCheckbox";
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import VInputNumber from "@/components/FormComponents/Inputs/NumberInput/VInputNumber";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import VTextarea from "@/components/FormComponents/Textarea/VTextarea";
import BaseSelect from "@/components/FormComponents/Select/BaseSelect";
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";
import MapComponent from "@/components/MapComponent/MapComponent";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";
import {formDataCreator} from "@/services";
import {addHotel} from "@/Api/requests";

export default {
  name: "add-hotel-form",
  components: {MapComponent, UploadInput, BaseSelect, VTextarea, BaseForm, VTextInput, VInputNumber, VCheckbox},
  props: {
    locations: {type: Array, default: () => ([]), required: true},
    hotelTypes: {type: Array, default: () => ([]), required: true},
    hotelBrands: {type: Array, default: () => ([]), required: true},
  },
  setup({locations, hotelTypes, hotelBrands}) {
    const {refs, addRef} = useRefsValidation();
    const createLocationsOptions = computed(() => locations.filter(item => item.name?.ru).map(item => ({
      id: item.id,
      name: item.name.ru,
      value: item.name.ru,
    })));

    const createHotelTypesOptions = computed(() => hotelTypes.filter(item => item.name?.ru).map(item => ({
      id: item.id,
      name: item.name.ru,
      value: item.name.ru,
    })));

    const createHotelBrandsOptions = computed(() => hotelBrands.filter(item => item.name?.ru).map(item => ({
      id: item.id,
      name: item.name.ru,
      value: item.name.ru,
    })));

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
        placeholder: 'Enter hotel name',
      }
    });
    const description = reactive({
      ru: {
        id: 'descriptionRu',
        value: '',
        required: true,
        placeholder: 'Введите описание отеля',
        errors: {
          required: 'Это обязательное поле'
        }
      },
      en: {
        id: 'descriptionEn',
        value: '',
        placeholder: 'Enter hotel brand',
      }
    });

    const starCount = reactive({
      id: 'starCount',
      value: {id: '', name: ''},
      options: [
        {id: 1, name: 1, value: 1},
        {id: 2, name: 2, value: 2},
        {id: 3, name: 3, value: 3},
        {id: 4, name: 4, value: 4},
        {id: 5, name: 5, value: 5},
      ],
      required: true,
      placeholder: 'Выберите количество звезд отеля',
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const location = reactive({
      id: 'location',
      value: {id: '', name: ''},
      options: createLocationsOptions.value,
      required: true,
      placeholder: 'Выберите одну из локаций',
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const hotelBrand = reactive({
      id: 'locations',
      value: {id: '', name: ''},
      options: createHotelBrandsOptions.value,
      required: true,
      placeholder: 'Выберите одну из локаций',
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const hotelType = reactive({
      id: 'hotelTypes',
      value: {id: '', name: ''},
      options: createHotelTypesOptions.value,
      required: true,
      placeholder: 'Выберите один из типов отелей',
      errors: {
        required: 'Это обязательное поле'
      }
    });

    const address = reactive({
      ru: {
        id: 'addressRu',
        value: '',
        required: true,
        placeholder: 'Введите адрес отеля',
        errors: {
          required: 'Это обязательное поле'
        }
      },
      en: {
        id: 'addressEn',
        value: '',
        placeholder: 'Enter address name',
      }
    });

    const svgLogo = reactive({
      value: ''
    })

    const pngLogo = reactive({
      value: ''
    })

    const links = reactive({
      id: 'links',
      value: '',
      placeholder: 'json формата',
    });

    const coords = reactive({
      lng: {
        id: 'lng',
        value: '',
        placeholder: 'Введите долготу отеля',
      },
      lat: {
        id: 'lat',
        value: '',
        placeholder: 'Введите широту отеля',
      },

    })

    const handleChangeCoords = ({lng, lat}) => {
      coords.lng.value = lng
      coords.lat.value = lat;
    };

    async function handlerAddHotel() {
      const {lat, lng} = coords;
      const data = {
        ['nameRu']: name.ru.value,
        ['nameEn']: name.en.value,
        ['descriptionRu']: description.ru.value,
        ['descriptionEn']: description.en.value,
        ['addressRu']: address.ru.value,
        ['addressEn']: address.ru.value,
        starCount: starCount.value.name,
        location: location.value.id,
        links: links.value,
        lat: lat.value,
        lon: lng.value,
        type: hotelType.value.id,
        brand: hotelBrand.value.id,
      };
      const {formData} = formDataCreator(data);
      await addHotel(formData);
    }

    return {
      name, description,
      starCount, location,
      hotelBrand, hotelType,
      links, coords, address,
      svgLogo, pngLogo,
      handleChangeCoords,
      refs, addRef, handlerAddHotel
    }
  }
}
</script>
