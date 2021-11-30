<template>
  <aside class=" mt-sm-5  bg-white p-sm-5 d-flex flex-column" v-if="item">
    <h1 class="text-uppercase bold-900 text-center">{{ item.data.attributes.customAttributes.specie.text }} {{ item.title }}</h1>
    <div class="my-4  side-indo">
      <img alt="" class="side-indo_logo" :src="images[item.data.attributes.customAttributes.origin]">
      <div class="text-white side-indo_title">Origin country</div>
      <div class="side-indo_center flex-column lh1">
        <div>
          <img alt="" src="@/assets/icon/pin.svg" style="width: 30px;">
        </div>
        <h4>{{ item.data.attributes.customAttributes.origin }}</h4>
      </div>
    </div>
    <div class="my-4  side-indo">
      <img alt="" class="side-indo_logo" :src="images[item.data.attributes.customAttributes.specie.text]">
      <div class="text-white side-indo_title">specie &amp; botanic name</div>
      <div class="side-indo_center flex-column lh1">
        <div>
          <span class="icon icon-src"></span>
        </div>
        <h4>{{ item.data.attributes.customAttributes.specie.text }}</h4>
        <small>{{ item.data.attributes.customAttributes.specie.value }}</small>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: { },
  props: {
    item: Object
  },
  setup() {
    const images = {
      'Brazil': '/images/countries/Brazil.jpg',
      'USA': '/images/countries/USA.jpg',
      'Guatemala': '/images/countries/Guatemala.jpg',
      'Brazilian Rosewood': '/images/species/Brazilian-Rosewood.jpg',
      'Mahogany': '/images/species/Mahogany.jpg',
      'Sitka Spruce': '/images/species/Sitka-Spruce.jpg',
    }
    return {
      images
    }
  },
})
</script>

<style lang="scss">
</style>