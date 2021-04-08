<template>
  <div class="dropdown mb-3">
    <button class="btn btn-secondary dropdown-toggle" type="button" @click="dropdownPerPage = !dropdownPerPage">
      По {{ itemOnPage }} на странице
    </button>
    <div class="dropdown-menu show" aria-labelledby="dropdownPerPage"
         :style="[dropdownPerPage ? 'display:block;' : 'display:none;']">
      <a class="dropdown-item" @click="setItemOnPage(5)">По 5</a>
      <a class="dropdown-item" @click="setItemOnPage(10)">По 10</a>
      <a class="dropdown-item" @click="setItemOnPage(20)">По 20</a>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'SetToPage',
  emits:['set-items-on-page'],
  props: {
    itemOnPage: {type: Number, required: true}
  },
  setup(props, {emit}) {
    let dropdownPerPage = ref(false);

    let setItemOnPage = (num) => {
      dropdownPerPage.value = false
      emit('set-items-on-page', num);
    };
    return {dropdownPerPage, setItemOnPage}
  }
}
</script>
