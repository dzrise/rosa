<template>
  <button type="button" class='btn' :class="[computedBtnClasses, classes]" @click="clickHandler">
    {{ title }}
  </button>
</template>
<script>
import {computed} from 'vue';

export default {
  name: 'defaultButton',
  props: {
    color: {type: String, default: 'primary', required: false},
    title: {type: String, default: '', required: true},
    classes: {type: String, default: '', required: false}
  },
  setup(props, {emit}) {
    const computedBtnClasses = computed(() => {
     return props.classes ? `${props.classes} btn-${props.color}` : `btn-${props.color}`
    });

    const clickHandler = () => {
      emit('clickHunder');
    };

    return {computedBtnClasses, clickHandler}
  }
}
</script>
