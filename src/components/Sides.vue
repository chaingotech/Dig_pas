<template>
  <aside class=" mt-sm-5  bg-white p-sm-5 d-flex flex-column" v-if="item">
    <h1 class="text-uppercase bold-900 text-center">
      {{ item.getSpecieName }}
      <span v-if="!item.isDefault">{{ item.partName }}</span>
    </h1>
    <a target="_blank" :href="item.getCountryLink" class="my-4 side-indo radial-background">
      <img alt="" class="side-indo_logo" :src="item.getCountryImage">
      <div class="text-white side-indo_title">Origin country</div>
      <div class="side-indo_center flex-column lh1">
        <div>
          <img alt="" src="@/assets/icon/pin.svg" style="width: 30px;">
        </div>
        <h4>{{ item.getCountryName }}</h4>
      </div>
    </a>
    <a target="_blank" :href="item.getSpecieLink" class="my-4 side-indo radial-background">
      <img alt="" class="side-indo_logo" :src="item.getSpecieImage">
      <div class="text-white side-indo_title">specie &amp; botanic name</div>
      <div class="side-indo_center flex-column lh1">
        <div>
          <span class="icon icon-src"></span>
        </div>
        <h4>{{ item.getSpecieName }}</h4>
        <small>{{ item.getSpecieScientificName }}</small>
      </div>
    </a>
  </aside>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SideData from '@/domain/model/SideData'

export default defineComponent({
  components: { },
  props: {
    item: Object as PropType<SideData>
  }
})
</script>

<style lang="scss">
  .radial-background {
    position: relative;
    > div {
      z-index: 5;
    }
    &::after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(0,0,0,0.75) 0%, rgba(13,13,4,0) 100%);
      z-index: 1;
    }
  }
</style>
