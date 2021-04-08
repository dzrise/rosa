<template>
  <router-view/>
</template>

<script>
import {onMounted, ref} from 'vue';
import {fetchLanguages} from '@/Api/requests'

export default {
  name: "Languages",
  setup() {
    let loading = ref(true);

    onMounted(async () => {
      loading.value  = await fetchLanguages();
    })
    return {loading}
  }
}
</script>
