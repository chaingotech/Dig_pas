<template>

  <aside class=" mt-sm-5  bg-white p-sm-5 d-flex flex-column ">
    <!---->
    <!---->
    <h1 class="text-uppercase bold-900 text-center">Khaya Sides</h1>

    <!--
    <span class="actions-groups text-center center">
      <span class="active">General</span>
      <span>Related Info</span>
    </span>
    -->
    <div class="my-4  side-indo">
      <img alt="" class="side-indo_logo" src="@/assets/imgs/forest.png">
      <div class="text-white side-indo_title">Origin country</div>
      <div class="side-indo_center flex-column lh1">
        <div>
          <img alt="" src="@/assets/icon/pin.svg" style="width: 30px;">
          <!---->
        </div>
        <h4>Republic of Congo</h4>
      </div>
    </div>
    <!---->
    <div class="my-4  side-indo">
      <img alt="" class="side-indo_logo" src="@/assets/imgs/specie.png">
      <div class="text-white side-indo_title">specie & botanic name</div>
      <div class="side-indo_center flex-column lh1">
        <div>
          <span class="icon icon-src"></span>
        </div>
        <h4>Khaya</h4>
        <small>Khaya anthotheca</small>
      </div>
    </div>
    <!---->
  </aside>


</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  components: {}
})
export default class Sides extends Vue {


}
</script>

<style lang="scss">
</style>