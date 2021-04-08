<template>
  <div class="input" v-click-outside="hideOptionsList">
    <p v-if="title">{{ title }}</p>
    <label class="input__label">
      <input
          ref="select"
          v-model="rootValue.name"
          type="text"
          :class="['input__field select form-control',classes, setClasses]"
          :placeholder="placeholder"
          readonly
          v-bind="$attrs"
          @click="onClickSelect"
      >
      <span class="input--cross oi oi-circle-x" v-if="!!rootValue.name" @click.prevent="onClear"></span>
    </label>

    <ul v-if="optionsVisible && options.length" class="select__options-list">
      <li
          v-for="option in options"
          :key="option.value"
          class="select__option"
          @click="handlerSelectOption(option)">
        {{ option.name }}
      </li>
    </ul>

    <div class="input__errors" v-if="hasError">
      <p>{{ errors.required }}</p>
    </div>
  </div>
</template>

<script>
import {useSelect} from "@/hooks/Select/useSelect";

export default {
  name: 'base-select',
  emits: ["update:value"],
  props: {
    name: {type: String, default: '', required: false},
    options: {type: Array, default: () => ([]), required: true},
    placeholder: {type: String, default: '', required: false},
    title: {type: String, default: '', required: false},
    value: {type: Object, default: () => ({}), required: true},
    classes: {type: String, default: '', required: false},
    errors: {type: Object, default: () => ({}), required: false},
    required: {type: Boolean, default: false}
  },
  setup(props, context) {
    const validators = {required: props.required};
    return {...useSelect(props, context, validators)}
  }
};
</script>
