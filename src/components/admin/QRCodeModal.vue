<template>
  <div class="card qr-code-card bg-white" style="width: 600px; height: 600px">
    <QRCodeVue3
      :value="qrCodeValue"
      :width="250"
      :height="250"
      :qrOptions="{ typeNumber: '0', mode: 'Byte', errorCorrectionLevel: 'Q' }"
      :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
      :dotsOptions="{ type: 'square', color: '#05004d' }"
      :cornersSquareOptions="{ type: 'square', color: '#0e013c' }"
    />
    <div class="qr-code-card__actions">
      <button
        type="button"
        class="btn btn-primary btn-sm"
        @click="print"
      >
        Print
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import QRCodeVue3 from "qrcode-vue3"


const props = defineProps<{ id: string }>()
const qrCodeValue = computed(() => {
  return window.location.origin + `/${props.id}`
})

const print = () => {
  window.print()
}
</script>

<style scoped lang="scss">
.qr-code-card {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &__actions {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    padding: 14px;
    align-items: center;
    justify-content: flex-end;
  }
}
@media print {
  .container .passports-list {
    display: none;
  }

  .qr-code-card {
    border: none;
    transform: scale(1.4);
    &__actions {
      display: none;
    }
  }
}
</style>