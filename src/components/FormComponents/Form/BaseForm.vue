<template>
  <form @submit.prevent="handlerSubmit" class="pb-5">
    <slot name="form-content"></slot>
  </form>
</template>

<script>
// import {useForm} from "@/services/FormServices"
export default {
  name: "BaseForm",
  emits: ['on-submit'],
  props: {validatorsCollection: {type: Object, default: () => ({}), required: true,}},
  setup(props, {emit}) {
    // const {formValidate} = useForm(props.validatorsCollection)
    const formValidate = () => {
      if (Object.values(props.validatorsCollection).length) {
        return !Object.values(props.validatorsCollection)
            .map(el => {
              return typeof el === 'function' && el();
            })
            .some(Boolean);
      }
    };
    const handlerSubmit = () => {
      if (formValidate()) {
        emit('on-submit');
      }
    }
    return {handlerSubmit}
  }
}
</script>
