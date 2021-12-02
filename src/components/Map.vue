<template>
  <div style="width: 100%; position: relative; margin-bottom: 10%">
    <GoogleMap
        style="width: 100%; height: 500px"
        apiKey="AIzaSyClrUGvx6_TY-VwfjmIJmJBOlaLGj-9714"
        libraries="geometry,drawing,places"
        :options="_optionsMap"
        :markers="markers"
    />
    <div  class="bg-white py-2 px-4 ml-4" style="position: absolute; bottom: -10%; z-index: 1">
      <h1 class="bold-900">Sustainable Wood</h1>
      <div>Know exactly where each part of your instrument comes from.</div>
    </div>
  </div>


</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {GoogleMap} from "google-map-ts-vue3";

@Options({
  components: {GoogleMap},
})
export default class Map extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  mapConfig?: Object;
  apiKey?: string;
  google?: string;
  center = {lat: 40.689247, lng: -74.044502};

  markerOptions = {position: this.center, label: 'L', title: 'LADY LIBERTY'}
  markers = [
    {
      position: {lat: 55.4871312, lng: -133.121919523918},
      title: 'USA - Alaska Specialty Woods Inc. - Sitka Spruce',
      icon: require('@/assets/icon/marker.svg'),
    }, {
      position: {lat: 17.5177021, lng: -90.0420652},
      title: 'Guatemala - Custodios de la Selva - Mahogany (Swietenia macrophylla)',
      icon: require('@/assets/icon/marker.svg')
    }, {
      position: {lat: -11.0578292, lng: -44.3068948},
      title: 'Brazil - Madinter Coex, S.A. - Bahia State - Brazilian Rosewood (Dalbergia nigra)',
      icon: require('@/assets/icon/marker.svg')
    }];

  stylesMarker() {
    return [
      // {elementType: "geometry", stylers: [{color: "#ebe3cd"}]},
      {elementType: "labels.text.fill", stylers: [{color: "#523735"}]},
      {elementType: "labels.text.stroke", stylers: [{color: "#f5f1e6"}]},
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{color: "#c9b2a6"}],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{color: "#dcd2be"}],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{color: "#ae9e90"}],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{color: "#f2f2f2"}],
      },

      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{color: "#daebfd"}],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{color: "#daebfd"}],
      },
    ];
  }

  get _optionsMap(): any {
    return {
      fullscreenControl: false,
      rotateControl: false,
      streetViewControl: false,
      panControl: false,
      keyboardShortcuts: false,
      center: this.markers[0].position,
      zoom: 2,
      mapTypeControl: false,
      styles: this.stylesMarker(),
      mapTypeId: 'satellite'
    };
  }
}
</script>

<style lang="scss">
</style>