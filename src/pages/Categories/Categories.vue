<template>
  <router-view/>
</template>
<script>

import {onMounted} from 'vue';
import {fetchCategories, fetchSections, fetchPlaces} from "@/Api/requests";
import {multiplyRequest} from "@/services";

export default {
  name: 'Categories',
  setup() {
    onMounted(async () => {
      await multiplyRequest([fetchCategories(), fetchSections(), fetchPlaces()])
    })
  }
}
</script>
<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
