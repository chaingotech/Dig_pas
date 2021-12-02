<template>
  <Guitar @itemSelected="itemSelected" />
  <Sides class="hidden-xs" :item="item" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Guitar from "@/components/Guitar.vue";
import Sides from "@/components/Sides.vue";
import SideData from '@/domain/model/SideData'

export default defineComponent({
  components: { Guitar, Sides },
  setup() {
    const item = ref<SideData | null>(null)

    const itemSelected = (newItem: any) => {
      item.value = newItem;
    }

    return {
      item,
      itemSelected
    }
  },
})
</script>
