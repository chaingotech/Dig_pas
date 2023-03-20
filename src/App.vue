<template>
  <div>
    <router-view />
    <WidgetContainerModal />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script lang="ts" setup>
import { container as WidgetContainerModal } from "jenesius-vue-modal";
</script>