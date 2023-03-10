<template>
  <div class="card passport-form" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title mb-3">{{ formTitile }}</h5>
      <form @submit.prevent="save">
        <div class="mb-3">
          <input v-model="title" type="text" class="form-control" placeholder="Title">
        </div>
        <div class="d-flex justify-content-end">
          <button
            type="submit"
            class="btn btn-primary btn-sm"
            :disabled="loading"
          >
            {{ itemId ? 'Save' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
  editableItemId: {
    type: [String, Number],
    default: null
  },
  closeModal: {
    type: Function,
    default: () => () => true
  }
})

const itemId = computed(() => props.editableItemId)
const formTitile = computed(() => props.editableItemId ? 'Edit passport' : 'Create passport')
const item = computed(() => props.editableItemId && store.state.admin.items.find((i: any) => i.id === props.editableItemId))

const loading = ref(false)
const title = ref(item?.value?.attributes?.customAttributes?.title || '')

const save = async () => {
  loading.value = true
  if (item?.value?.id) {
    await store.dispatch('admin/updateItem', {
      id: item.value.id,
      data: {
        title: title.value
      }
    })
  } else {
    await store.dispatch('admin/createItem', {
      title: title.value
    })
  }
  loading.value = false
  props.closeModal?.()
}

</script>

<style lang="scss">
.passport-form {
  font-family: 'Roboto', sans-serif;
  &.card {
    width: 500px !important;
  }
}
</style>