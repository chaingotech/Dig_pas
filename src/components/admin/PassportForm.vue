<template>
  <div class="card passport-form" style="width: 18rem;">
    <div class="card-body">
      <h5
        v-if="!props.hideTitle"
        class="card-title mb-3"
      >
        {{ formTitile }}
      </h5>
      <form @submit.prevent="save">
        <div class="mb-3">
          <label for="passport-name" class="passport-form__label">Name</label>
          <input v-model="name" id="passport-name" type="text" class="form-control" placeholder="Name">
        </div>
        <div class="mb-3">
          <label for="passport-model" class="passport-form__label">Model</label>
          <input v-model="model" id="passport-model" type="text" class="form-control" placeholder="Model">
        </div>
        <div class="mb-3">
          <label for="passport-modelType" class="passport-form__label">Guitar type</label>
          <input v-model="modelType" id="passport-modelType" type="text" class="form-control" placeholder="Model type">
        </div>
        <div class="d-flex justify-content-end">
          <slot name="actions" />
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
  item: {
    type: Object,
    default: () => ({})
  },
  hideTitle: {
    type: Boolean,
    default: false
  },
  closeModal: {
    type: Function,
    default: () => () => true
  }
})
const itemId = computed(() => props.editableItemId)
const formTitile = computed(() => props.editableItemId ? 'Edit passport' : 'Create passport')

const loading = ref(false)
const name = ref(props.item?.name || '')
const model = ref(props.item?.model || '')
const modelType = ref(props.item?.modelType || 'Acoustic Guitar - SCCCE')

const save = async () => {
  loading.value = true
  if (itemId.value) {
    await store.dispatch('admin/updateItem', {
      id: itemId.value,
      data: {
        name: name.value,
        model: model.value,
        modelType: modelType.value
      }
    })
  } else {
    await store.dispatch('admin/createItem', {
      name: name.value,
      model: model.value,
      modelType: modelType.value
    })
  }
  loading.value = false
  props?.closeModal?.()
}

</script>

<style lang="scss">
.passport-form {
  font-family: 'Roboto', sans-serif;
  &__label {
    font-size: 12px;
    color: grey;
  }
  &.card {
    width: 500px !important;
  }
}
</style>