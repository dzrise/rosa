<template>
  <div class="input">
    <label class="input__label" :class="setClasses">
      <input
          type="checkbox"
          v-model="rootValue"
          @change="onChange"
          @blur="onBlur"
          v-bind="$attrs"
          autocomplete="off"
          class="mr-3"
      />
      <span v-if="title">{{ title }}</span>
    </label>
    <div class="input__errors" v-if="hasError">
      <p>{{ errors.required }}</p>
    </div>
  </div>
</template>


<script>
import {useCheckbox} from "@/hooks/checkbox/useCheckbox";

export default {
  emits: ['update:change'],
  props: {
    value: {type: Boolean, default: false, required: true},
    title: {type: String, required: false, default: ''},
    required: {type: Boolean, required: false, default: false,},
    errors: {type: Object, default: () => ({}), required: false},
    classes: {type: String, default: "", required: false},
  },
  setup(props, context) {
    const validators = {required: props.required};
    return {...useCheckbox(props, context, validators)};
  }
}
</script>

<style scoped>
.drop-enter-active, .drop-leave-active {
  transition: all .2s ease-in-out;
}

.drop-enter-from, .drop-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}
</style>
