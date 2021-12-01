<template>
  {{ typeof(item) }}
  <Guitar @itemSelected="itemSelected" />
  <Sides class="hidden-xs" :item="item" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SideDataFactory from "@/domain/service/SideDataFactory";
import Guitar from "@/components/Guitar.vue";
import Sides from "@/components/Sides.vue";
import SideData from '@/domain/model/SideData'

export default defineComponent({
  components: { Guitar, Sides },
  setup() {
    const item = ref<SideData | null>(null)

    const itemSelected = (newItem: any) => {
      item.value = SideDataFactory.fromJson(newItem);
    }

    return {
      item,
      itemSelected
    }
  },
})
</script>
