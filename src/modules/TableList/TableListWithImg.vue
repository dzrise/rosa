<template>
  <set-to-page
      :item-on-page="tablePageParams.itemsOnPage"
      @set-items-on-page="handlerChangeTotalItemsOnPage"
  />
  <div class="table-responsive mb-5">
    <table class="table">
      <thead class="table-header">
      <tr class="table-header__wrapper">
        <th
            v-for="(headItem, index) in Object.values(table.headers)"
            :key="`${headItem}-${index}`"
        >
          {{ headItem }}
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(tableBody,index) in displayItems.items" :key="`${tableBody}-${index}`">
        <td class="goto" v-for="(item, index) in Object.values(tableBody)" :key="`${item}-${index}`"
            @click="toCurrentItem(tableBody.id)">
          <p v-if="!imageCheck(String(item))">
            {{ item }}
          </p>
          <img v-else class="table__img" :src="item" alt="">
        </td>
        <td v-if="showRemoveCol" @click="handlerRemove(tableBody.id)"><span class="oi oi-trash"></span></td>
      </tr>
      </tbody>
    </table>
    <pagination
        v-if="totalPages > 1"
        :items-on-page="tablePageParams.itemsOnPage"
        :pages="totalPages"
        :current-page="tablePageParams.currentPage === 0 ? 1 : tablePageParams.currentPage"
        @on-change-page="handlerChangePage"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/Pagination'
import SetToPage from "@/components/list/SetToPage";
import {useBaseTable} from "@/hooks/Table/useTable";
import {imageCheck} from "@/services";

export default {
  name: "TableList",
  emits: ['on-remove'],
  components: {SetToPage, Pagination},
  props: {
    table: {type: Object, default: () => ({}), required: true},
    routeName: {type: String, default: '/', required: true},
    showRemoveCol: {type: Boolean, default: true, required: false},
  },
  setup(props, context) {
    return {...useBaseTable(props, context), imageCheck}
  }
}
</script>

<style scoped lang="scss">
.table-responsive {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.table {
  th, td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: #e8e8e8;
    }
  }
}

.table__img {
  width: 100%;
  height: 20%;
  object-fit: cover;
}

.table-header {
  &__wrapper {
    th {
      width: 15%;

      &:first-child {
        width: 20%;
      }
    }
  }
}
</style>
