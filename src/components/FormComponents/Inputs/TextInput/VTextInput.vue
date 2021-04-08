<template>
  <div class="input">
    <p class="input__title" v-if="title">{{ title }}</p>
    <label class="input__label">
      <input
          :class="['input__field form-control',classes, setClasses]"
          v-model="rootValue"
          :type="type"
          :placeholder="placeholder"
          @input="onInput"
          @blur="onBlur"
          @focus="onFocus"
          :minLength="Boolean(minLength) ? minLength : null"
          :maxLength="Boolean(maxlength) ? maxlength : null"
          ref="input"
          v-bind="$attrs"
      >
    </label>
    <!--    <transition name="drop">-->
    <div class="input__errors" v-if="hasError">
      <p>{{ errors.required }}</p>
    </div>
    <!--    </transition>-->
  </div>
</template>

<script>
import {useInput} from '@/hooks/input/useInput'

export default {
  emits: ['update:input'],
  props: {
    type: {type: String, default: 'text', required: false},
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


    return {
      ...useInput(props, context, validators)
    }
  }
}
</script>

<style scoped lang="scss">

.drop-enter-active, .drop-leave-active {
  transition: all .2s ease-in-out;
}

.drop-enter-from, .drop-leave-to {
  transform: translateY(-20%);
}
</style>
