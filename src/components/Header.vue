<template>
  <section id="first" class="d-flex bg-white w100 position-relative flex-column-sm ">
    <img alt="" class="bg-white logo mb-auto  py-3" src="@/assets/logo-bedell.png">


    <div class="box-content b-primary d-flex flex-column">
      <section>
        <img alt="" class="w-100" src="@/assets/passport-letters.svg">
        <img alt="" class=" lines-curves" src="@/assets/curves-lines.svg">
      </section>
      <section class="p-sm-5   " style="margin: 0 auto">
        <div class=" ml-sm-5 d-flex">
          <img alt="" src="@/assets/featured-img.svg" id="featured-img-sm">

          <div class="first_info">
            <div class="text-white text-light">
              {{ props.modelType || 'Acoustic Guitar - SCCCE' }}
            </div>
            <h1 class="text-white text-uppercase bold-900 lh1 ">
              {{ props.model }}
            </h1>
          </div>
        </div>

        <div class="ml-sm-5  text-white box-info">
          <div class="d-flex">
            <img alt="" src="@/assets/icon/hash-icon.svg" style="width: 28px" class="mr-4">

            <div class="lh1 bold-500">
                {{ props.name }}
              <br>
              <span class="text-light">Passport Blockchain Hash</span>
            </div>
            <a
              class="ml-4 ml-auto"
              href="https://rinkeby.etherscan.io/tx/0x605bccecbcb9ceeb0ffc3d08d39a38bdae035e41f09a1893a8652dce85fa763d">
              <img alt="" src="@/assets/icon/arrow-right.svg" style="width: 28px">
            </a>
          </div>
        </div>
        <div class="ml-sm-5  text-white box-info">
          <div class="d-flex justify-content-between">
            <img alt="" src="@/assets/icon/shape.svg" style="width: 28px" class="mr-4">

            <div class="lh1 text-bold mr-4">Share with
              <br>
              your friends
            </div>
            <div class="ml-auto">
              <a :href="urlFacebook"
                 onclick="return !window.open(this.href, 'Facebook', 'width=640,height=580')">
                <img alt="" src="@/assets/social/social-facebook.svg" style="width: 30px" class="mr-2">
              </a>
              <a :href="urlTwitter"
                 onclick="return !window.open(this.href, 'Twitter', 'width=640,height=580')">
                <img alt="" src="@/assets/social/social-twitter.svg" style="width: 30px" class="mr-2">
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <img alt="" src="@/assets/featured-img.svg" id="featured-img">

  </section>


</template>

<script lang="ts" setup>
import { computed, ref, defineProps } from 'vue'
// import guitarData from "@/data/guitar.json";


const props = defineProps<{
  modelType: string;
  model: string;
  name: string;
}>()

const url = 'https://www.google.com'
const urlFacebook = computed<string>(() => {
  return `https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${url}&display=popup&ref=plugin&src=share_button`
})
const urlTwitter = computed<string>(() => {
  const title = `Passport - ${url} - @guzmle2`;
  return `https://twitter.com/intent/tweet?text=${title}&source=Shareaholic&related=shareaholic`;
})
</script>

<style lang="scss" scoped>
  h1 {
    width: 300px;
    @media screen and (max-width: 500px) {
      width: 180px;
    }
  }
</style>