<template>
  <a
      :class="
            isActive
                ? 'active'
                : ''
        "
      class="nav-link"
      @click="activeteTab"
  >
    <slot/>
  </a>
</template>

<script>
import {computed, inject, watchEffect, getCurrentInstance} from "vue";

export default {
  name: "Tab",
  setup(props) {
    const instance = getCurrentInstance();
    const {tabs, selectTab, active} = inject("tabsState", {
      tabs: [],
      selectTab: () => {
      },
    });
    const index = computed(() =>
        tabs.value.findIndex((target) => target.uid === instance.uid)
    );
    const isActive = computed(() => index.value === active.value);

    const activeteTab = () => {
      selectTab(index.value);
    };

    watchEffect(() => {
      if (index.value === -1) {
        tabs.value.push(instance);
      }
    });

    return {
      activeteTab,
      isActive,
    };
  },
};
</script>
