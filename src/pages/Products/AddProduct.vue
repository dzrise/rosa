<template>
  <div class="AddProduct">
    <h1>Добавление продукта</h1>
    <Loading v-if="!sections.length"/>
    <add-product-form v-else :sections="sections"/>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
import Loading from '@/components/loading'
import AddProductForm from '@/modules/Products/AddProductForm'

export default {
  name: 'Addproduct',
  components: {Loading, AddProductForm},
  setup() {
    const store = useStore();
    const sections = computed(() => store.getters['sections/getSections']);

    return {sections}
  }
}
</script>
