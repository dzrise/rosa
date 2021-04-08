<template>
  <div class="card">
    <div class="card-body">
      <p><strong>id: </strong> {{ id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderUserCard',
  props: {
    id: String,
  },
  setup(){

  }
}
</script>
