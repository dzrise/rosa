<template>
  <div class="map d-flex flex-column" :class="{'map--hidden': !showMap}">
    <button @click="mapToggle" class="btn btn-primary mb-3">{{ computedBtnText }}</button>
    <div v-show="showMap" class="map__field" ref="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "MapComponent",
  data() {
    return {
      showMap: true,
      map: null,
      mapParams: {
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [43.61813925009676, 40.290617],
        zoom: 8,
        attributionControl: false
      }
    }
  },
  computed: {
    computedBtnText() {
      return this.showMap ? 'Скрыть карту' : 'Показать карту';
    }
  },
  methods: {
    mapToggle() {
      this.showMap = !this.showMap;
    },
    mapHandlerClick(event) {
      const {lng, lat} = event.lngLat.wrap();
      this.$emit('on-click', {lng, lat});
    },
    initMap() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiemxvYmluLWFuZHkiLCJhIjoiY2tuNGZiOXp1MTRnaTJvb3V0Yjk4ZWdraCJ9.U47ENUZ5DZHDZWOI7n9bPA';
      this.map = new mapboxgl.Map({...this.mapParams, container: this.$refs.map,});
      this.map.on('click', this.mapHandlerClick)
    },
    destroyMap() {
      this.map.off('click', this.mapHandlerClick);
      this.map = null;
    }
  },
  mounted() {
    this.initMap();
  },
  beforeUnmount() {
    this.destroyMap();
  }
}
</script>
<style scoped lang="scss">
.map {
  width: 300px;
  height: 250px;

  &__field {
    width: 100%;
    height: 100%;
  }

  &--hidden {
    height: auto;
  }
}
</style>

