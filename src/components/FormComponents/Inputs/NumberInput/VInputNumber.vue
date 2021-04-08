<template>
  <div class="input">
    <p class="input__title" v-if="title">{{ title }}</p>
    <label class="input__label">
      <input
          v-number-only
          v-model.number="rootValue"
          :class="['input__field form-control',classes, setClasses]"
          :type="type"
          :placeholder="placeholder"
          :minLength="Boolean(minLength) ? minLength : null"
          :maxlength="Boolean(maxlength) ? maxlength : null"
          ref="input"
          v-bind="$attrs"
          @input="onInput"
          @blur="onBlur"
          @focus="onFocus"
      >
    </label>
    <div class="input__errors" v-if="hasError">
      <p>{{ errors.required }}</p>
    </div>
  </div>
</template>

<script>
import {useInput} from '@/hooks/input/useInput'

export default {
  emits: ['update:input'],
  props: {
    type: {type: String, default: 'number', required: false},
    value: {type: [String, Number], default: '', required: true},
    required: {type: Boolean, default: false, required: false},
    maxlength: {type: Number, default: null, required: false},
    minLength: {type: Number, default: null, required: false},
    placeholder: {type: String, default: '', required: false},
    title: {type: String, default: '', required: false},
    icon: {type: String, default: '', required: false},
    errors: {type: Object, default: () => ({}), required: false},
    classes: {type: String, default: '', required: false},
  },

  setup(props, context) {
    const validators = {required: props.required};
    const onInput = event => {
      let value = Number(event.target.value);
      context.emit("update:input", value);
    };
    return {
      ...useInput(props, context, validators),
      onInput,
    }
  }
}
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
