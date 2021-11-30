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
            <div class="text-white text-light">Acoustic Guitar - SCCCE</div>
            <h1 class="text-white text-uppercase bold-900 lh1 ">
              {{ data.data.attributes.customAttributes.model }}
            </h1>
          </div>
        </div>

        <div class="ml-sm-5  text-white box-info">
          <div class="d-flex">
            <img alt="" src="@/assets/icon/hash-icon.svg" style="width: 28px" class="mr-4">

            <div class="lh1 bold-500">034234-234-234234–4234234
              <br>
              <span class="text-light "> Passport Blockchain Hash</span>
            </div>
            <img alt="" src="@/assets/icon/arrow-right.svg" style="width: 28px" class="ml-4 ml-auto">

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
              <a :href="_urlFacebook"
                 onclick="return !window.open(this.href, 'Facebook', 'width=640,height=580')">
                <img alt="" src="@/assets/social/social-facebook.svg" style="width: 30px" class="mr-2">
              </a>
              <a :href="_urlTwitter"
                 onclick="return !window.open(this.href, 'Twitter', 'width=640,height=580')">
                <img alt="" src="@/assets/social/social-twitter.svg" style="width: 30px" class="mr-2">

              </a>
              <img alt="" src="@/assets/social/social-instagram.svg" style="width: 30px" class="mr-2">
            </div>
          </div>
        </div>
      </section>
    </div>
    <img alt="" src="@/assets/featured-img.svg" id="featured-img">

  </section>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import data from "@/data/guitar.json";

export default defineComponent({
  setup() {
    const url = 'https://www.google.com'

    const _urlFacebook = (): string => {
      return `https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${url}&display=popup&ref=plugin&src=share_button`;
    }

    const _urlTwitter = (): string => {
      const title = `Passport - ${url} - @guzmle2`;
      return `https://twitter.com/intent/tweet?text=${title}&source=Shareaholic&related=shareaholic`;
    }
    return {
      _urlFacebook,
      _urlTwitter,
      data,
    }
  }
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