<template>
  <div class="input">
    <p class="input__title" v-if="title">{{ title }}</p>
    <label class="input__label" :for="name">
      <input
          :name="name"
          :id="name"
          :class="['form-control',classes, setClasses]"
          :type="type"
          v-model="inputValue"
          @input="handleChange"
          @blur="handleBlur"
          v-bind="$attrs"
          autocomplete="off"
      />
    </label>

    <transition name="drop">
      <div class="input__errors" v-if="hasError">
        <p>{{ errorMessage }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import {useBaseFormControl} from "@/hooks/BaseFormControl/useBaseFormControl";

export default {
  props: {
    type: {type: String, default: "text",},
    value: {type: [Number, String], default: "", required: true},
    name: {type: String, required: true,},
    title: {type: String, required: false, default: ''},
    required: {type: Boolean, required: false, default: false,},
    successMessage: {type: String, default: "",},
    errorMessage: {type: String, default: "", required: false},
    classes: {type: String, default: "", required: false},
  },
  setup(props) {
    return {
     ...useBaseFormControl(props)
    };
  },
};
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
