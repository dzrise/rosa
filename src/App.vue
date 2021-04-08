<template>
  <div class="app__wrapper container-fluid">
    <div class="row">

      <transition name="slide">
        <div class="bd-sidebar col-sm col-lg-2 sidebar row-cols-lg-1" v-if="showSidebar">
          <Logo/>
          <Sidebar/>
        </div>
      </transition>

      <div class="app__content col-12"  :class="showSidebar ? 'col-md-10' : 'col-md-12'">
        <navbar
            @on-toggle-sidebar="toggleSidebar"
        />
        <router-view class="page"/>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref, onErrorCaptured} from 'vue';
import Logo from '@/components/Logo';
import Sidebar from '@/modules/Sidebar/Sidebar';
import Navbar from "@/modules/Navbar/Navbar";
import Loading from "@/components/loading";

export default {
  name: 'App',
  components: {Loading, Navbar, Logo, Sidebar,},
  setup() {
    onErrorCaptured((error) => {
          console.log('someError', console.log(error))
        }
    );
    const showSidebar = ref(true);
    const userData = reactive({
      email: 'zakharov@dreamheads.ru',
      password: 'tY9WQ5',
    })
    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    }
    return {showSidebar, userData, toggleSidebar,};
  }
}
</script>

<style scoped lang="scss">
.page {
  padding: 8px 16px;
  overflow-x: hidden;
}

.app {
  overflow-x: hidden;
}

.sidebar {
  box-shadow: 0 0 32px 1px #b3b1b3;
  background: #fff;
  //border-right: 1px solid
}

.app__wrapper {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.app__content {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s linear;
  opacity: 1;
}

.slide-enter-from, .slide-leave-to {
  z-index: 10000;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100%;
  transform: translateX(-100%);
}

</style>
