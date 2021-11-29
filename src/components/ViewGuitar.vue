<template>
  <section class="d-flex">
    <div class="element_front p-5 text-white w-50">
      <img alt="" class=" " src="@/assets/front.svg" data-toggle="modal" data-target="#frontModal"
           data-whatever="@getbootstrap">
      <div class="text-center pt-4 text-capitalize">{{ $t('front') }}</div>
    </div>
    <div class="element_back p-5 text-white w-50" data-toggle="modal" data-target="#backModal"
         data-whatever="@getbootstrap">
      <img alt="" class=" " src="@/assets/back.svg"/>
      <div class="text-center pt-4 text-capitalize">{{ $t('back') }}</div>
    </div>

    <div class="modal fade" id="frontModal" tabindex="-1" role="dialog" aria-labelledby="frontModal"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content p-0 m-0">
          <div class="modal-body p-0 m-0">
            <h4 class="text-center my-4 text-uppercase">{{ $t('front') }}</h4>

            <img alt="" class="img-dialog-guitar" src="@/assets/front.svg">
            <div class="close-dialog py-4 text-uppercase" data-dismiss="modal">{{ $t('close') }}</div>
          </div>
        </div>

      </div>
    </div>

    <div class="modal fade" id="backModal" tabindex="-1" role="dialog" aria-labelledby="backModal"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content p-0 m-0">
          <div class="modal-body p-0 m-0">
            <h4 class="text-center my-4 text-uppercase">{{ $t('back') }}</h4>
            <img alt="" class="img-dialog-guitar" src="@/assets/back.svg">
            <div class="close-dialog py-4" data-dismiss="modal">{{ $t('close') }}</div>
          </div>
        </div>

      </div>
    </div>
  </section>


</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  components: {}
})
export default class ViewGuitar extends Vue {


}
</script>

<style lang="scss">

.element_front {
  background: var(--main-bg-lighter-color);
}

.element_back {
  background: var(--main-bg-color);
}

.img-dialog-guitar {
  height: 70vh;
  margin: 0 auto;
  width: 100%;
}

</style>