<template>
  <Guitar @itemSelected="itemSelected" :items="props.items" />
  <Sides class="hidden-xs" :item="item" />
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import Guitar from "@/components/Guitar.vue";
import Sides from "@/components/Sides.vue";
import SideData from '@/domain/model/SideData'


const props = defineProps<{
  items: {
    partName: string;
    countryName: string;
    specieName: string;
    specieScientificName: string;
  }[]
}>()

const item = ref<SideData | null>(null)


const itemSelected = (newItem: any) => {
  item.value = newItem;
}
</script>
