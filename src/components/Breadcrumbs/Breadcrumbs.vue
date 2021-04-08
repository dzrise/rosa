<template>
  <ol class="breadcrumb">
    <router-link
        class="breadcrumb-item"
        exact-active-class="active"
        aria-current="page"
        v-for="(item, index) in breadcrumbs"
        :key="index"
        :to="item.path">
      {{ item.name }}
    </router-link>

  </ol>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'Breadcrumbs',
  setup() {
    const store = useStore();
    const breadcrumbs = computed(() => store.getters['settings/getBreadcrumbs']);
    return {breadcrumbs};
  },
}
</script>

<style scoped lang="scss">
@import './Breadcrumbs.scss';
</style>
