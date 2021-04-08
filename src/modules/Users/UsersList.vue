<template>

  <Loading v-if="!users.length"/>

  <div v-else>
    <div class="d-flex justify-content-between mt-3 mb-5">
      <h1>Список пользователей: </h1>
      <default-button
          title="Добавить пользователя"
          color="success"
          @clickHunder="toAddUser"
      />
    </div>

    <table-list :table="table" :show-remove-col="showRemoveCol" :route-name="BASE"/>

  </div>

</template>
<script>
import {ref, computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

import TableList from '@/modules/TableList/TableList';
import Loading from '@/components/loading';
import defaultButton from '@/components/defaultButton';

import {userRoutes} from '@/constants/RoutesNames';
import {usersTable} from "@/services";

const {ADD_USER, BASE} = userRoutes
export default {
  name: 'UsersList',
  components: {Loading, defaultButton, TableList},
  setup() {
    const store = useStore();
    const router = useRouter();
    const users = computed(() => store.getters['users/getUsers']);
    const table = computed(() => usersTable(users.value));
    const showRemoveCol = ref('remove' in table.value.headers);

    const toAddUser = () => {
      router.push(ADD_USER);
    }
    return {users, table, showRemoveCol, BASE, toAddUser};
  }

}
</script>
