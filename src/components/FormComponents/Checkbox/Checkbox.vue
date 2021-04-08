<template>
  <div class="input">
    <label class="input__label" :class="setClasses" :for="name">
      <input
          :name="name"
          :id="name"
          type="checkbox"
          @click="handleChange(inputValue)"
          v-model="inputValue"
          @blur="handleBlur"
          v-bind="$attrs"
          autocomplete="off"
          class="mr-3"
      />
      <span v-if="title">{{ title }}</span>
    </label>
    <transition name="drop">
      <div class="input__errors" v-if="hasError">
        <p>{{ errorMessage }}</p>
      </div>
    </transition>
  </div>
</template>


<script>
import {useCheckbox} from "@/hooks/checkbox/useCheckbox";

export default {
  emits: ['on-change'],
  props: {
    value: {type: Boolean, default: false, required: true},
    name: {type: String, required: true,},
    title: {type: String, required: false, default: ''},
    required: {type: Boolean, required: false, default: false,},
    successMessage: {type: String, default: "",},
    errorMessage: {type: String, default: "", required: false},
    classes: {type: String, default: "", required: false},
  },
  setup(props) {
    return {...useCheckbox(props)};
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
