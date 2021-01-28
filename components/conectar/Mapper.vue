<template>
  <div class="layout-mapper">
    <mapbox
      ref="theMap"
      :access-token="mapboxApiKey"
      :map-options="mapboxOptions"
      @map-load="loaded"
    />
  </div>
</template>

<script>
/* eslint-disable no-undef */
import Mapbox from 'mapbox-gl-vue'

export default {
  components: { Mapbox },
  props: {
    sheetData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      mapboxOptions: {
        style: null,
        center: null,
        zoom: null
      }
    }
  },
  computed: {
    mapboxApiKey () {
      return this.$config.mapboxApiKey
    },
    extraHeaders () {
      if (!this.sheetData) { return [] }
      const noExtra = ['title', 'lat', 'long', 'color']
      const extraHeaders = Object.keys(this.sheetData[0]).filter((x) => {
        return !noExtra.includes(x)
      })
      return extraHeaders
    }
  },
  beforeMount () {
    this.mapboxOptions.style = this.$config.mapboxMapStyle
    this.mapboxOptions.center = [this.$config.mapCenterLongitude, this.$config.mapCenterLatitude]
    this.mapboxOptions.zoom = this.$config.mapZoomDefault
  },
  methods: {
    loaded (map) {
      this.addPoints(map)
    },
    addPoints (map) {
      // iterate through your table to set the marker to lat/long values for each row
      this.sheetData.filter(row => row.long != null).forEach((row) => {
        // Create the Title
        let str = `<h3><i class="fas fa-dot-circle" style="color: ${row.color}"></i>&nbsp;${row.title}</h3>`
        str += '<h4>'
        str += `<p><b>Acerca</b><br/><span>${row.description || '<i>- Sin Data -</i>'}</span></p>`
        str += '</h4>'
        str += '<h4>'
        str += `<p><b>Categoria</b><br/><span>${row.category || '<i>- Sin Data -</i>'}</span></p>`
        str += '</h4>'
        str += '<h4>'
        str += `<p><b>Ubicación</b><br/><span>${row.country || '(Digital)'}, ${row.city || '(Sin ciudad)'}</span></p>`
        str += '</h4>'
        str += '<h4>'
        str += `<p><b>Contacto</b><br/><span>${row.contact || '<i>- Sin datos -</i>'}</span></p>`
        str += '</h4>'
        // create a variable for your popup for the current event
        const popup = new mapboxgl.Popup().setHTML(str) // use the table to populate your popup with text

        // create a variable for your markup and add it to the map
        new mapboxgl.Marker({
          color: row.color
        })
          .setLngLat([row.long, row.lat])
          .setPopup(popup)
          .addTo(map) // add the marker to the map
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-mapper {
  height: 500px;
  width: 100%;
}
.mapboxgl-map {
  height: 100%;
}
</style>
