<template>
    <ul class="pagination">
      <li class="page-item" v-if="currentPage != 1"><a class="page-link" @click="currentPage--">Назад</a></li>
      <li class="page-item" :class="{'active': pageNumber === currentPage}" v-for="(pageNumber, index) in pages" :key="index"><a class="page-link" @click="currentPage = pageNumber">{{ pageNumber }}</a></li>
      <li class="page-item"  v-if="currentPage < pages.length"><a class="page-link" @click="currentPage++">Вперед</a></li>
    </ul>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Pagination',
  props: {
    page: Number,
    pages: Array,
  },
  setup(props, {emit}){

    let currentPage = computed({
      get: () => props.page,
      set: val => emit('returnPage', val)
    })

    return {currentPage}
  }
}
</script>

<style>
.page-item {
  cursor: pointer;
}
</style>
