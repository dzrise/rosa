<template>
  <div class="card">
    <h5 class="card-header">ID: {{ card.id }}</h5>
    <div class="card-body d-flex justify-content-between">
      <h3 class="card-text">{{ card.name }}</h3>
      <button class="btn btn-primary" @click.prevent="handlerRemove">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageItemCard",
  props: {
    card: {type: Object, default: () => ({}), required: true}
  },
  methods: {
    handlerRemove() {
      this.$emit('on-remove', this.card.id)
    }
  }
}
</script>

<style scoped>

</style>
