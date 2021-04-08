<template>
  <base-form :validators-collection="refs" @on-submit="addUser">
    <template v-slot:form-content>

      <div class="form-group mt-3 mb-4" v-for="(input, index) in inputsCollection" :key="`${input}-${index}`">
        <v-text-input
            class="w-100"
            :name="input.id"
            :required="true"
            :title="input.title"
            :placeholder="input.placeholder"
            :errors="input.errors"
            :value="input.value"
            v-model="input.value"
            :ref="el => addRef(el, input.id)"
        />

      </div>
      <div class="form-group mt-3 mb-3">
        <label>Дата рождения: </label>
        <Datepicker
            :id-attr="datepickerSetting.id"
            :name-attr="datepickerSetting.name"
            :class-attr="datepickerSetting.class"
            :value-attr="datepickerSetting.value"
            :placeholder-attr="datepickerSetting.placeholder"
            :locale="datepickerSetting.locale"
            :year-minus="datepickerSetting.yearMinus"
            :from="datepickerSetting.fromDate"
            :to="datepickerSetting.toDate"
            :disabled-date="datepickerSetting.disabledDate"
            @value-changed="datepickerSetting.changeEvent"
            :disableInput="datepickerSetting.disableInput"
        />
      </div>
      <h3>Пол:</h3>
      <div class="form-check pl-0 mb-3">
        <radio-button
            :name="genderParams.name"
            :radios="genderParams.values"
            :required="true"
            v-model="genderParams.value"
            :error-message="genderParams.errorMessage"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-5">Добавить</button>
    </template>
  </base-form>
</template>

<script>
import {reactive, ref} from 'vue'
import Datepicker from '@/components/DatepickerLite'
import VTextInput from "@/components/FormComponents/Inputs/TextInput/VTextInput";
import {useStore} from 'vuex'
import RadioButton from "@/components/FormComponents/Radiobutton/Radiobutton";
import BaseForm from "@/components/FormComponents/Form/BaseForm";
import {useRefsValidation} from "@/hooks/Refs/useRefsValidation";

export default {
  name: 'UserAddForm',
  components: {BaseForm, RadioButton, VTextInput,  Datepicker},
  setup() {
    const store = useStore();
    const {refs, addRef} = useRefsValidation();
    const genderParams = reactive({
          name: 'gender',
          value: '',
          errorMessage: 'Обязательное поле',
          values: [
            {value: '100', title: 'Муж'},
            {value: '200', title: 'Жен'},
          ]
        }
    )
    const inputsCollection = reactive([
      {
        id: 'firstName',
        value: '',
        required: true,
        title: 'Имя:',
        placeholder: 'Введите имя',
        errors: {
          required: 'Поле Имя обязательно для заполнения'
        }
      },
      {
        id: 'middleName',
        value: '',
        required: true,
        title: 'Отчество:',
        placeholder: 'Введите отчество',
        errors: {
          required: 'Поле Отчество обязательно для заполнения'
        }
      },
      {
        id: 'lastName',
        value: '',
        required: true,
        title: 'Фамилия:',
        placeholder: 'Введите фамилию',
        errors: {
          required: 'Поле Фамилия обязательно для заполнения'
        }
      },
      {
        id: 'email',
        value: '',
        required: true,
        title: 'Email:',
        placeholder: 'Введите email',
        errors: {
          required: 'Поле Email обязательно для заполнения'
        }
      },
      {
        id: 'phone',
        value: '',
        required: true,
        title: 'Телефон:',
        placeholder: 'Введите телефон',
        errors: {
          required: 'Поле Телефон обязательно для заполнения'
        }
      }
    ])
    const birthDate = ref('')

    let date = new Date();

    const convertDate = (inputFormat) => {
      function pad(s) {
        return (s < 10) ? '0' + s : s;
      }

      let d = new Date(inputFormat)
      return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
    }
    const datepickerSetting = {
      id: "birthday",
      name: "День рождения",
      class: "form-control",
      value: "",
      placeholder: "Выберете дату своего рождения",
      yearMinus: 0,
      fromDate: "1901/01/01",
      toDate: convertDate(date),
      locale: {
        format: "YYYY-MM-DD",
        weekday: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        startsWeeks: 1,
        todayBtn: "Сегодня",
        clearBtn: "Очистить",
        closeBtn: "Закрыть",
      },
      changeEvent: (value) => {
        birthDate.value = value
      },
      disableInput: false,
    }

    const addUser = async () => {
      const sex = genderParams.value;
      let data = {sex, birthDate: birthDate.value};
      for (let item of inputsCollection) {
        data[item.id] = item.value;
      }
      await store.dispatch('users/addUser', data)
    }
    return {
      datepickerSetting,
      inputsCollection,
      genderParams,
      birthDate,
      refs,
      addRef,
      addUser
    }
  },

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
