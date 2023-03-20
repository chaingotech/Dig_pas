<template>
  <div class="card d-flex align-items-center justify-content-center bg-white" style="width: 400px; height: 400px">
    <QRCodeVue3
      :value="qrCodeValue"
      :width="200"
      :height="200"
      :qrOptions="{ typeNumber: '0', mode: 'Byte', errorCorrectionLevel: 'Q' }"
      :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
      :dotsOptions="{ type: 'square', color: '#05004d' }"
      :cornersSquareOptions="{ type: 'square', color: '#0e013c' }"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import QRCodeVue3 from "qrcode-vue3"


const props = defineProps<{ id: string }>()
const qrCodeValue = computed(() => {
  return window.location.origin + `${props.id}`
})
</script>
