<template>
  <div class="loading d-flex justify-content-center">
    <div class="text-centers">
      <span class="oi oi-reload"></span>
      <h3>Загрузка...</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
}
</script>

<style scoped>
  .loading{
    width: 100%;
    height: 100%;
    min-height:100%;
  }
  span {
    font-size:5rem;
    animation: 1s linear 0s normal none infinite running rot;
    -webkit-animation: 1s linear 0s normal none infinite running rot;
  }
  h3 {
    display: block;
    width:100%;
    clear: both;
  }
  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
