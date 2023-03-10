<template>
  <div class="card passport-form" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ formTitile }}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  editableItemId: {
    type: [String, Number],
    default: null
  }
})

const itemId = computed(() => props.editableItemId)
const formTitile = computed(() => props.editableItemId ? 'Edit passport' : 'Create passport')

console.log('test', props.editableItemId)

// const emit = defineEmits(['close'])

</script>

<style lang="scss">
.passport-form {
  font-family: 'Roboto', sans-serif;
  &.card {
    width: 500px !important;
  }
}
</style>