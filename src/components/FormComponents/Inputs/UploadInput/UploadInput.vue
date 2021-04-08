<template>

  <div class="input input-upload">
    <p class="input__title">{{ title }}</p>
    <div>
      <input
          type="file"
          ref="file"
          @change="onFileChange"
          class="d-none"
          :accept="accept"
      >

      <div class="mb-4 d-flex" v-if="file">
        <img :src="file" :alt="fileName" ref="img" class="input-upload__img">
        <div class="input-upload__info d-flex flex-column justify-content-end ml-4">
          <p>{{ fileName }}</p>
          <span v-if="imageHeight && imageWidth"> <b>{{ imageHeight }}</b> {{ '&#10005' }} <b>{{
              imageWidth
            }}</b></span>
<!--          <p>{{ file }}</p>-->
        </div>
      </div>
      <button type="button" class="btn btn-primary mr-3" title="Новое изображение" @click="selectFile">
        <span v-if="!file">Новое изображение</span>
        <span v-else>Изменить изображение</span>
      </button>

      <button
          v-if="!file" type="button"
          class="btn btn-primary mr-3"
          title="Изображение из хранилища"
          @click="selectFile"
      >
        Изображение из хранилища
      </button>

      <button type="button" @click="removeFile" class="btn btn-primary" v-if="file">Удалить изображение</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "UploadInput",
  emits: ['update:change'],
  props: {
    accept: {type: String, default: 'image/*', required: false},
    title: {type: String, default: '', required: false},
    value: {type: [String, Object], default: '', required: true}
  },
  data() {
    return {
      file: '',
      fileName: '',
      imageHeight: 0,
      imageWidth: 0,
      loading: false
    }
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        this.removeFile()
        return;
      }
      this.fileName = files[0].name;
      this.$emit('update:change', files[0]);
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let image = new Image();
      reader.onload = (e) => {
        const file = e.target.result
        this.file = file;
        image.src = file;
        this.$nextTick().then(() => {
          this.imageHeight = image.height;
          this.imageWidth = image.width;
        })
        // this.$emit('update:change', this.file);
      }
      reader.readAsDataURL(file);
    },
    removeFile() {
      this.file = '';
      this.fileName = '';
      this.imageHeight = 0
      this.imageWidththis = 0
    }
  },
  mounted() {
    this.file = this.value
  }
}
</script>

<style scoped>
.input-upload__img {
  width: auto;
  height: 200px;
  max-width: 320px;
  border: 1px solid rgba(96, 81, 81, .5);
}
</style>
