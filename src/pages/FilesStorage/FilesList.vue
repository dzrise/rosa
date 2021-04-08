<template>
  <upload-input/>
  <upload-input/>
  <upload-input/>
  <upload-input/>
  <button type="submit" class="btn btn-primary mt-5 w-25" title="Загрузить">Загрузить еще</button>
</template>

<script>
import UploadInput from "@/components/FormComponents/Inputs/UploadInput/UploadInput";

export default {
  name: "FilesList",
  components: {UploadInput}
}
</script>

<style scoped>

</style>
