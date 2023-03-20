<template>
  <section class="d-flex">
    <div class="element-sides element_front p-5 text-white w-50">
      <img alt="" class="" :src="images.front" width="116" data-toggle="modal" data-target="#frontModal"
           data-whatever="@getbootstrap">
      <div class="text-center pt-4 text-capitalize">{{ $t('front') }}</div>
    </div>
    <div class="element-sides element_back p-5 text-white w-50" data-toggle="modal" data-target="#backModal"
         data-whatever="@getbootstrap">
      <img alt="" class=" " :src="images.back" width="116" />
      <div class="text-center pt-4 text-capitalize">{{ $t('back') }}</div>
    </div>

    <div class="modal fade" id="frontModal" tabindex="-1" role="dialog" aria-labelledby="frontModal"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content p-0 m-0">
          <div class="modal-body p-0 m-0">
            <h4 class="text-center my-4 text-uppercase">{{ $t('front') }}</h4>

            <img alt="" class="img-dialog-guitar" :src="images.front">
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
            <img alt="" class="img-dialog-guitar" :src="images.back">
            <div class="close-dialog py-4" data-dismiss="modal">{{ $t('close') }}</div>
          </div>
        </div>

      </div>
    </div>
  </section>


</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const passport = computed(() => store.state.admin.passport)

const images = computed(() => ({
  front: passport.value?.view?.front || '/images/sides/front.jpeg',
  back: passport.value?.view?.back || '/images/sides/back.jpeg'
}))
</script>

<style lang="scss">

.element-sides {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.element_front {
  background: var(--main-bg-lighter-color);
}

.element_back {
  background: var(--main-bg-color);
}

.modal-body {
  text-align: center;
  .img-dialog-guitar {
    margin: 0 auto;
    max-height: 70vh;
    max-width: 100%;
  }
}

</style>