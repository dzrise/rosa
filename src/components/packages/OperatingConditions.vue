<template>
  <div class="mb-3">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h3 class="mb-3">Условия использования</h3>
      <button class="btn btn-primary mr-3" title="Создать" type="button" @click="addOperatingConditions">
        Добавить
      </button>
    </div>
    <div v-if="items.length">
      <article
          class="droppable"
          v-for="(item, index) in items"
          :key="`${item}-${index}`"
          @dragstart=" onDragStart($event, index)"
          @drop="onDrop($event, index)"
          @dragover.prevent
          @dragenter.prevent
      >
        <span
            class="oi oi-transfer sort"
            :draggable="true"></span>

        <div class="mb-3" :draggable="false">
          <div class="form__control d-flex mb-3">
            <span class="input-group-text mr-2 h-100">{{ item.label.ru }}</span>
            <v-textarea
                class="w-100"
                :value="item.value.ru"
                v-model="item.value.ru"
            />
          </div>
          <div class="form__control d-flex mb-3">
            <span class="input-group-text mr-2 h-100">{{ item.label.en }}</span>
            <v-textarea
                class="w-100"
                :value="item.value.en"
                v-model="item.value.en"
            />
          </div>
        </div>
        <button
            class="btn btn-danger mb-2"
            title="Удалить"
            @click.prevent="handlerRemoveOperatingConditions(index)">
          Удалить
        </button>
        <hr>

      </article>
    </div>
  </div>
</template>

<script>
import VTextarea from "@/components/FormComponents/Textarea/VTextarea";
import {useSortable} from "@/hooks/sortable/useSortable";

export default {
  name: "OperatingConditions",
  components: {VTextarea,},
  props: {
    conditions: {type: Array, default: () => ([]), required: true},
  },
  setup(props, context) {

    return {
      ...useSortable(props.conditions, context)
    }
  },

}
</script>

<style scoped>
.sort {
  font-size: 45px;
  transform: rotate(90deg);
  cursor: pointer
}
</style>
