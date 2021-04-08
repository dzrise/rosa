<template>
  <div class="pagination">
    <ul class="pagination__list">

      <li class="page-item" @click="toPage(currentPage - 1 )" v-if="showPrev">
        <a class="page-link">Назад</a>
      </li>

      <li v-for="(page, index) in pages"
          :key="`${page}-${index}`"
          class="page-item">
        <a class="page-link"
           :class="{'active': page === currentPage }"
           @click="toPage(page)"
        >{{ page }}</a>
      </li>

      <li class="page-item" @click="toPage(currentPage + 1)" v-if="showNext">
        <a class="page-link">Вперед</a>
      </li>

    </ul>


  </div>
</template>

<script>
import {computed} from 'vue';

export default {
  name: "Pagination",
  emits: ['on-change-page'],
  props: {
    pages: {type: Number, required: true},
    itemsOnPage: {type: Number, required: true},
    currentPage: {type: Number, required: true},
  },
  setup(props, {emit}) {
    const toPage = (page) => {
      emit('on-change-page', page);
    };

    const showPrev = computed(() => props.currentPage > 1);
    const showNext = computed(() => props.currentPage < props.pages);

    return {toPage, showPrev, showNext}
  }
}
</script>

<style scoped lang="scss">
.pagination {
  &__list {
    display: flex;
    justify-content: flex-start;
    padding: 0;
  }

  .active {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  li {
    list-style: none;
    cursor: pointer
  }
}
</style>
