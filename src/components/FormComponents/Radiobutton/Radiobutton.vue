<template>
  <div class="radio">
    <template v-for="radio in radios" :key="radio">
      <label class="radio__label mr-2">
        <input
            :name="name"
            class="radio__filed"
            type="radio"
            v-model="inputValue"
            :value="radio.value"
            @input="handleChange"
            @blur="handleBlur"
            v-bind="$attrs"
        >
        {{ radio.title }}
      </label>

    </template>
    <transition name="drop">
      <div class="input__errors" v-if="hasError">
        <p>{{ errorMessage }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import {useBaseFormControl} from '@/hooks/BaseFormControl/useBaseFormControl'

export default {
  name: "Radiobutton",
  props: {
    name: {type: String, default: '', required: true},
    radios: {type: Array, default: () => ([]), required: true},
    title: {type: String, default: '', required: false},
    required: {type: Boolean, default: false, required: false},
    errors: {type: Object, default: () => ({}), required: false},
    classes: {type: String, default: '', required: false},
    errorMessage: {type: String, default: '', required: false},
  },
  setup(props) {
    return {
      ...useBaseFormControl(props)
    }
  }
}
</script>

<style scoped>

</style>
