<template>
  <SetToPage
      :itemOnPage="itemOnPage"
      @setItemOnPage="setOnPage"
  />
  <div class="table-responsive mb-5">
    <table class="table">
      <thead>
      <tr>
        <th scope="col" v-for="(item, index) in headers" :key="index" @click="setSorting(index)">
          {{ item }}
          <span class="oi ml-3" :class="[params.sortDirection == 'asc' ? 'oi-arrow-top' : 'oi-arrow-bottom']" v-if="params.sortColumns === index"></span>
        </th>
        <th v-if="deleteColumn">Удалить</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in displayItems" :key="item.id">
          <td class="goto" v-for="(it, index) in item" :key="index + item.id" @click="goTo(item.id)" >{{text.trimText(it, 25)}}</td>
          <td v-if="deleteColumn"><span class="oi oi-trash"></span></td>
        </tr>
      </tbody>
    </table>
  </div>
    <Pagination
          :page="params.page"
          :pages="params.pages"
          @returnPage="setPage"
    />
</template>

<script>
  import { ref, reactive, computed, watchEffect, 	onMounted} from 'vue'
  import { useRouter } from 'vue-router'
  import Pagination from '@/components/list/Pagination'
  import SetToPage from '@/components/list/SetToPage'
  import useSorting from '@/composition/useSorting'
  import  useKitText  from '@/composition/useKitText'

  export default {
    name: 'List',
    components: {Pagination, SetToPage},
    props: {
      data: Array,
      headers: Object,
      toPage: Number,
      dataType: String,
      displayColums: Array,
      deleteColumn: Boolean,
    },
    setup(props, context) {
      const router = useRouter()

      let params = reactive({
        pages: [],
        page: 1,
        sortColumns: 'id',
        sortDirection: 'asc'
      })

      const sort = useSorting()
      const text = useKitText

      let itemOnPage = ref(props.toPage)

      let setPages = () => {
        params.pages = []
        let numberOfPages = Math.ceil(props.data.length / itemOnPage.value);
        for (let index = 1; index <= numberOfPages; index++) {
          params.pages.push(index);
        }
        if(params.pages.length < params.page){
          params.page = params.pages.length
        }
      }

      let paginate = (items) => {
        let perPage = itemOnPage.value;
        let from = (params.page * perPage) - perPage;
        let to = (params.page * perPage);
        sort.sort(items, params.sortColumns, params.sortDirection)
        return  items.slice(from, to);
      }

      let displayItems = computed(() =>{
       let items =  paginate(props.data)
        let display = {}
        items.forEach((item, key) => {
          display[key] = {}
          props.displayColums.forEach((it) => {
           display[key][it] = item[it]
          })
        })
        return display;

      })

      let setSorting = (column) => {
        params.sortColumns = column;
        if(params.sortDirection === 'asc')
          params.sortDirection = 'desc'
        else
          params.sortDirection = 'asc'
      }

      let setPage = (num) => {
        params.page = num
      }
      let setOnPage = (num) => {
        itemOnPage.value = num
        setPages()
      }

      watchEffect(props.data, setPages())

      onMounted(() => {
        setPages();
      })

      let goTo = (id) => {
          let url = '/' + props.dataType + '/' + id
          router.push(url)
      }

      return { params, displayItems, setOnPage, itemOnPage,  setPage, goTo, setSorting, text}
    }
  }
</script>

<style>
.goto {
  cursor: pointer;

}
.goto:hover {
  background: #e8e8e8;
}
td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
