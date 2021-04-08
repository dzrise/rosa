<template>
  <Loading v-if="!user"/>
  <div v-else>
    <h1 class="mt-3 mb-5">Пользователь {{ fullName }}</h1>
    <tabs v-model="active">
      <tab>Профиль</tab>
      <tab>Системная информация</tab>
    </tabs>
    <tab-panels v-model="active">
      <tab-panel>
        <UserCard
            :user="user"
        />
      </tab-panel>
      <tab-panel></tab-panel>
    </tab-panels>
  </div>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useStore} from 'vuex';
import Tabs from "@/components/tabs/Tabs";
import Tab from "@/components/tabs/Tab";
import TabPanels from "@/components/tabs/TabPanels";
import TabPanel from "@/components/tabs/TabPanel";
import UserCard from "@/modules/Users/UserCard";
import Loading from "@/components/loading";
import {userRoutes} from '@/constants/RoutesNames';

const {USERS_LIST} = userRoutes;
export default {
  name: 'User',
  components: {Loading, Tabs, Tab, TabPanels, TabPanel, UserCard},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const active = ref(0);

    const id = route.params.id
    const user = computed(() => store.getters['users/getUser'](id));
    const fullName = computed(() => {
      const firstName = user.value?.firstName || '';
      const middleName = user.value?.middleName || '';
      const lastName = user.value?.lastName || '';
      return `${firstName} ${middleName} ${lastName}`.trim();
    })
    onMounted(() => {
      if (!user.value) {
        router.push(USERS_LIST)
      }
    })

    return {active, id, fullName, user}
  }
}
</script>
