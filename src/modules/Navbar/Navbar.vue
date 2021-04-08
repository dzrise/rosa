<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="mr-5">
      <button class="btn btn-secondary" @click="toggleSidebar">
        <span class="oi oi-menu"></span>
      </button>
    </div>

    <Breadcrumbs/>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

      </ul>
    </div>
  </nav>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

export default {
  name: "Navbar",
  components: {Breadcrumbs},
  setup(props, {emit}) {
    const toggleSidebar = () => {
      emit('on-toggle-sidebar');
    };
    return {toggleSidebar};
  }
}
</script>
