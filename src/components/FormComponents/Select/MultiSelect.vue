<template>
  <div class="input" v-click-outside="hideOptionsList">
    <p v-if="title">{{ title }}</p>
    <div class="input__label">
      <input
          ref="select"
          v-model="rootValue"
          type="text"
          :class="[classes, setClasses]"
          class="input__field select"
          :placeholder="!values.length ? placeholder : ''"
          readonly
          @input="onInput"
          v-bind="$attrs"
          @click="onClickSelect"
      />
      <span class="input--cross oi oi-circle-x" v-if="rootValue" @click.prevent="onClear"></span>
      <ul class="select-multiple__items" v-if="values.length">
        <li v-for="item in values" :key="item.value" class="select-multiple__item mr-3">
          {{ item.name }}
          <span
              class="oi oi-circle-x ml-2"
              @click="handlerRemoveItem(item.id)">
          </span>
        </li>
      </ul>
    </div>

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
import {useMultipleSelect} from "@/hooks/Select/useMultipleSelect";

export default {
  name: 'multiple-select',
  emits: ["update:value", "update:values"],
  props: {
    name: {type: String, default: '', required: true},
    options: {type: Array, default: () => ([]), required: true},
    placeholder: {type: String, default: '', required: false},
    title: {type: String, default: '', required: false},
    value: {type: String, default: '', required: true},
    values: {type: Array, default: () => ([]), required: true},
    classes: {type: String, default: '', required: false},
    errors: {type: Object, default: () => ({}), required: false},
    required: {type: Boolean, default: false}
  },
  setup(props, context) {
    const validators = {required: props.required};
    return {...useMultipleSelect(props, context, validators)}
  }
};
</script>
<style scoped>
.input__field {
  color: transparent;
}

.select-multiple__items {
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  padding: 12px;
}

.select-multiple__item {
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drop-enter-active, .drop-leave-active {
  transition: all .2s ease-in-out;
}

.drop-enter-from, .drop-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}
</style>
