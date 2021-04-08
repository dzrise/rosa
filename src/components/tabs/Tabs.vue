<template>
  <nav>
    <div class="nav nav-tabs" role="tablist">
      <slot />
    </div>
  </nav>
</template>

<script>
import { provide, computed, ref } from "vue";

export default {
  name: "Tabs",
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const active = computed(() => props.modelValue);
    const tabs = ref([]);

    function selectTab(tab) {
      emit("update:modelValue", tab);
    }

    provide("tabsState", {
      active,
      tabs,
      selectTab,
    });
  },
};
</script>
