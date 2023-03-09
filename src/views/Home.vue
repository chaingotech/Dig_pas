<template>
  <main class="main-content  ">
    <Header/>
    <section class="d-flex justify-content-end align-item-end flex-column-sm">
      <div class="text-center align-self-md-end my-5 mr-sm-5">
        <h1 class="bold-900">VIEW</h1>
        <span>Click on any image to
              <br class="hidden-xs ">
              enlarge it
                        <span class="icon-arrow-right t-primary ml-2" style="font-size: 10px"></span>

            </span>


      </div>
      <ViewGuitar/>
    </section>

    <section class="d-flex  justify-content-center align-items-center justify-content-between  flex-column-sm ">
      <div class="b-primary-before">
        <!--        <img alt="" class="lines" src="@/assets/curves-lines.svg">-->
        <img alt="" class="" src="@/assets/medusa.svg" style="position: absolute; top:0; right: 0">
      </div>
      <aside class="mr-5 mt-5">
        <img id="origin-img" class="w-sm-100 " alt="" src="@/assets/imgs/origin.jpeg">

      </aside>
      <aside class=" text-white mr-5 mb-5 ml-1">
        <h1 class="bold-900 lh1 text-uppercase text-white mr-5 mt-5">Origin</h1>

        <div class="box-info-text mr-5">
          Learn about the positive impact stories surrounding the places where the wood for this guitar was harvested,
          from the forest to your hands.
        </div>
      </aside>


    </section>

    <section class="d-flex  justify-content-center align-items-center justify-content-between ">
      <div class="b-primary-before">
        <img alt="" class="lines" src="@/assets/curves-lines.svg">
      </div>
      <GuitarSide />
    </section>
    <Map/>
    <!--        <br>-->
    <section id="section-source" class="d-flex flex-column justify-content-center ">
      <div class="d-flex  justify-content-around flex-column-sm">
        <aside class="justify-content-center align-items-center d-flex flex-column border-dotted w-sm-100">
          <br>
          <img alt="" src="@/assets/betdell-logo.png"> <br>
          <h4 class="text-white text-center">THE SEED-TO-SONG <br>JOURNEY</h4><br>

          <a href="https://bedellguitars.com/seed-to-song/the-seed-to-song-journey" target="_blank">
            <button class="d-block">More Info</button>
          </a>
          <br>
        </aside>
        <aside class=" justify-content-center align-items-center d-flex flex-column border-dotted w-sm-100">
          <br>
          <img alt="" src="@/assets/betdell-logo.png"><br>
          <h4 class="text-white text-center">THE TONEWOOD <br> CERTIFICATION PROJECT</h4><br>

          <a href="https://bedellguitars.com/seed-to-song/the-tonewood-certification-project" target="_blank">
            <button class="d-block">More Info</button>
          </a>
          <br>
        </aside>
      </div>
      <br>
      <section class="text-white text-center">
        <h1 class="text-uppercase bold-900">
          Certifications
        </h1>
        <div class="bold-500">Contributing to preserve the world's forests and biodiversity</div>
      </section>
    </section>

    <section id="local" class="d-flex    position-relative flex-column-sm">
      <aside class="aside-from">
        <div class="img-from">
          <img alt="" src="@/assets/imgs/from.png">

        </div>
        <div class="img-local">
          <img alt="" src="@/assets/imgs/to-local.png">

        </div>
        <div class="img-crasftman">
          <img alt="" src="@/assets/imgs/crasftman.png">

        </div>
      </aside>
      <aside class="m-3">
        <h1 class="bold-900 lh1 "> Why is the <br class="hidden-xs">Digital <br class="hidden-xs"> Passport <br
            class="hidden-xs">important?</h1>

        <div class="box-info-text">
          Contributing to preserve the world's forests and biodiversity
        </div>
        <br>
        <a class="t-primary link-primary" href="https://forest-chain.com/en/digital-passport/"
           target="_blank">{{ $t('read_more') }}
          <span class="icon-arrow-right t-primary " style="font-size: 10px"></span>
        </a>
        <small class="d-block">Will open in a new window, external link</small>

      </aside>
    </section>

    <br class="hidden-xs"><br class="hidden-xs"><br class="hidden-xs">

    <section id="close-area" class="d-flex align-items-center justify-content-end text-center flex-column p-5">
      <span class="icon-plant text-center" style="font-size: 60px"></span>
      <br>
      <h4 class="text-white lh1">
        “The conservation of our natural resources and their proper use,<br>constitute the fundamental problem which underlies almost every other problem.”
      </h4>
    </section>
    <section id="footer" class="d-flex justify-content-between px-5 py-3 flex-column-sm">
      <div class="d-flex flex-column-sm align-items-sm-center">
        <img alt="" class="bg-white logo mb-2 only-xs" src="@/assets/logo-bedell.png">

        <div class="footer_copy"><small>© 2021 Bedell Guitars Digital Passport. Blockchain technology powered
          by</small></div>
        <div class="footer_logo">
          <img alt="" class="mx-2" style="max-width: 120px" src="@/assets/logo-forestchain.png">
        </div>

      </div>
      <div class="footer_logo">
        <a href="https://www.facebook.com/forestChainCo" target="_blank"> <img alt="" class="m-2" src="@/assets/icon/facebook.svg"></a>
        <a href="https://twitter.com/ForestChainco" target="_blank"><img alt="" class="m-2" src="@/assets/icon/twitter.svg"></a>

      </div>

    </section>
  </main>

</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Map from "@/components/Map.vue";
import ViewGuitar from "@/components/ViewGuitar.vue";
import Header from "@/components/Header.vue";
import GuitarSide from '@/components/GuitarSide.vue';

@Options({
  components: {Header, ViewGuitar, Map, GuitarSide},
})
export default class Home extends Vue {
}
</script>

<style lang="scss">
body {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: var(--main-font), sans-serif;
  overflow-x: hidden;
}

.main-content {
  max-width: 1024px;
  margin: 0 auto;
}

section {
  position: relative;
}

.b-primary {
  background: var(--main-bg-color);

}

.t-primary {
  color: var(--main-bg-color) !important;

  &::before {
    color: var(--main-bg-color) !important;

  }
}

img.svg-primary {
  .desktop g {

    fill: var(--main-bg-color) !important;
  }

}

#origin-img {
  max-width: 496px;
}

.logo {
  width: 181px;
}

.lines-curves {
  position: absolute;
  top: -30%;
  left: -50px;
  width: 100%;
  height: 350px;
}

.box-content {
  background: var(--main-bg-color);
  //max-width: 779px;
  position: relative;
  width: 100%;
}

.bold-900 {
  font-weight: 900;
}

.bold-500 {
  font-weight: 500;
}

.box-info {
  background: rgba(255, 255, 255, .1);
  padding: 20px;
  max-width: 350px;
  margin-bottom: 5px;

}

.lh1 {
  line-height: 1
}

.text-light {
  opacity: .5;
}


.box-info-text {
  max-width: 283px;
  font-size: 18px
}

.b-primary-before {
  &::after {
    content: "";
    width: 85%;
    right: 0;
    top: 0;
    height: 100%;
    position: absolute;
    background: var(--main-bg-color);
    z-index: -2;
    display: inline-block;
  }

  .lines {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: -1;
    //bottom: 0;
    //margin: auto;
    //height: 20px;
  }
}

.side-indo {
  position: relative;
  width: 430px;
  height: 217px;

  img.side-indo_logo {
    object-fit: cover;
    width: 430px;
    height: 217px;
    z-index: 0;
  }

  .side-indo_title {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
  }

  span.icon {

    text-align: center;

    &::before {

      font-size: 60px;
      color: white;
      text-align: center;

    }
  }

  .side-indo_center {
    position: absolute;
    margin: auto;
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center;
    color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
}

#section-source {
  width: 100%;
  height: 498px;
  background: url(../assets/imgs/forest.png) no-repeat;
  //-webkit-background-size: cover;
  //-moz-background-size: cover;
  //-o-background-size: cover;
  //background-size: cover;
}

button {
  background: var(--main-bg-color);
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
}

h1 {
  font-size: 54px;
  line-height: 1;
}

.aside-from {
  position: relative !important;
  //height: 100%;
  height: 680px;
  width: 50%;
  margin-right: 150px;

  .img-from {
    position: absolute;
    left: 20%;
    width: 498px;

  }

  .img-local {
    position: absolute;
    top: 30%;
    width: 400px;
    //left: 0;
    img {
      max-width: 100%;
    }
  }

  .img-crasftman {
    position: absolute;
    top: 60%;
    width: 338px;
    //
    right: 0;
  }
}

#close-area {
  background: url(../assets/forest-close.png) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  //object-fit: cover;
  //width: 430px;
  //height: 217px;
  //position: absolute;
  //z-index: 0;
  min-height: 600px;
  width: 100%;
}

#featured-img {
  top: 60px;
  left: 0;
  width: 50%;
  position: absolute;
  display: block;
}

.border-dotted {
  border-color: rgba(255, 255, 255, .5);
  border-style: dotted;
  border-width: 1px;
  border-top: 0;
  width: 50%;
}

.first_info {
  .first_info_title {
    font-size: 90px;
  }
}

#featured-img-sm {
  display: none;
}

.only-xs {
  display: none;
}

.actions-groups {
  background: #F7F7F7;
  margin: 0 auto;
  border-radius: 5px;
  padding: 8px;

  span {
    margin-left: 10px;
    //margin-right: 10px;
    &.active {
      background: white !important;
      //margin: 5px;
      padding: 1px 8px;
      margin-left: 0;
      margin-right: 0;
      border-color: #F7F7F7;
      border-width: 5px;
      border-style: solid;
    }
  }
}

.link-primary {
  text-decoration: underline;
}

@media screen and (max-width: 800px) {
  /* Mobile
 */

  /*
  body {
    overflow-x: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  */
  .flex-column-sm {
    flex-direction: column !important; /* Column layout */
  }
  #left, #right {
    flex-basis: auto; /* Unset previous 200px */
  }
  #middle {
    order: 1; /* Move to the end */
  }
  .box-content {
    width: 100%;
  }
  #featured-img {
    top: 120px;
    left: -70px;
  }
  .first_info_title {
    font-size: 60px;
  }
  #featured-img-sm {
    display: block;
    width: 50%;
    position: relative;
  }
  #featured-img {
    display: none;
  }
  .first_info {
    padding-top: 50px;
    padding-bottom: 3vw;
    margin: 0 auto;


  }
  h1 {
    font-size: 40px;
  }
  .box-info {
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .hidden-xs {
    display: none !important;
  }
  .only-xs {
    display: block;
  }

  .mw-350 {
    max-width: 350px;
  }
  .w-sm-100 {
    width: 100%;
  }

  .flex-column-reverse-sm {
    flex-direction: column-reverse;

  }
  .b-primary-before::after {
    width: 100%;
  }

  #section-source {
    background: url(../assets/imgs/forest.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .aside-from {
    width: 100% !important;
    height: auto;

    div {
      position: relative !important;

      margin: 0;
      width: 100% !important;
      top: 0 !important;
      left: 0 !important;

      &:first-child {
        padding-top: 30px;
      }

      &:nth-child(odd) {
        padding-right: 20px;
      }

      &:nth-child(even) {
        padding: 10px;

      }

      img {
        position: relative !important;
        margin: 0;
        width: 100% !important;
        top: 0;

      }
    }

    .align-items-sm-center {
      justify-content: center;
      align-items: center;
      text-align: center;
    }


  }
  .guitar-img {
    max-width: 50vw;
  }

  #close-area {
    min-height: 500px;
  }
  .logo {
    margin: 0 auto !important;
    align-self: center;

  }

  .footer_copy, .footer_logo {
    align-self: center;
    text-align: center;

  }
}
</style>