<template>
  <router-view></router-view>
</template>
<script>
import {computed, onMounted} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'Users',
  setup() {
    const store = useStore();

    const users = computed(() => store.getters['users/getUsers']);

    onMounted(() => {
      if (!users.value.length) {
        fetchUsers();
      }
    })

    async function fetchUsers() {
      await store.dispatch('users/fetchUsers');
    }
  }
}
</script>
