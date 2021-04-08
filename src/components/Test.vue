<template>
  <a  @click="downloadSVG" class="link-download btn btn-primary btn-sm">Download displayed SVG</a>

<!--  xmlns="http://www.w3.org/2000/svg"-->
  <svg viewBox="0 0 200 200" ref="figure">
    <defs>
      <radialGradient id="gradient1" cx="10%" cy="24%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" :style="`stop-color:${color1};`"/>
        <stop offset="49%" :style="`stop-color:${color2};`"/>
        <stop offset="51%" :style="`stop-color:${color3};`"/>
        <stop offset="70%" :style="`stop-color:${color4};`"/>
        <stop offset="100%" :style="`stop-color:${color5};`"/>
      </radialGradient>
    </defs>
    <circle cx="40" cy="60" r="30" fill="url(#gradient1)"/>
  </svg>
</template>
<script>
export default {
  data() {
    return {
      color1:`#21A038`,
      color2:`#F7A600`,
      color3:`#31C2A7`,
      color4:`#FF0066`,
      color5:`#FFCC00`,
    }
  },
  methods: {
    downloadSVG(event) {
      const svgContent = this.$refs.figure.outerHTML;
      const svgBlob = new Blob([svgContent], {type: "image/svg+xml;charset=utf-8"});
      const url = window.URL.createObjectURL(svgBlob);
      // const svgUrl = URL.createObjectURL(svgBlob);
      // this.$refs.href = svgUrl;
      // this.$refs.download = "funtimes.svg";
      const link = event.target;
      link.target = "_blank";
      link.download = `${this.svgName}.svg`;
      link.href = url;
    }
  },

}
</script>
<style scoped>
.test {
  width: 300px;
  height: 300px;
}
</style>
