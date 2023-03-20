<template>
  <div class="card passport-form" :class="!props.hideTitle && 'passport-form--modal'" style="width: 18rem;">
    <div class="card-body">
      <h5
        v-if="!props.hideTitle"
        class="card-title mb-3"
      >
        {{ formTitile }}
      </h5>
      <form @submit.prevent.stop="() => false">
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
        <div class="d-flex align-items-center">
          <hr style="width: 24px;" class="mr-2"><span class="passport-form__label mr-2">Guitar parts</span><hr style="flex-grow: 1;">
        </div>
        <div class="passport-form__parts">
          <div v-for="(part, n) in guitarParts" :key="`guitar_part__${n}`">
            <div class="passport-form__label mt-2 mb-2">{{ part.partName }}</div>

            <div class="mb-3 passport-form__part">
              <label
                :for="`${part.partName}__country-n`"
                class="passport-form__label"
              >
                Country
              </label>
              <input
                v-model="part.countryName"
                :id="`${part.partName}__country-n`"
                type="text"
                class="form-control"
                placeholder="Country name"
              >
            </div>
            <div class="mb-3 passport-form__part">
              <label
                :for="`${part.partName}__specie-n`"
                class="passport-form__label"
              >
                Specie name
              </label>
              <input
                v-model="part.specieName"
                :id="`${part.partName}__specie-n`"
                type="text"
                class="form-control"
                placeholder="Specie name"
              >
            </div>
            <div class="mb-3 passport-form__part">
              <label
                :for="`${part.partName}__specieScientificName-n`"
                class="passport-form__label"
              >
                Specie scientific name
              </label>
              <input
                v-model="part.specieScientificName"
                :id="`${part.partName}__specieScientificName-n`"
                type="text"
                class="form-control"
                placeholder="Specie scientific name"
              >
            </div>
          </div>
        </div>
      </form>
      <div class="d-flex justify-content-end mt-4 form-actions">
        <slot name="actions" />
        <button
          class="btn btn-primary btn-sm"
          :disabled="loading"
          @click="save"
        >
          {{ itemId ? 'Save' : 'Create' }}
        </button>
      </div>
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

const guitarParts = ref(props.item?.items || [
  {
    partName: 'headplate',
    countryName: '',
    specieName: '',
    specieScientificName: ''
  },
  {
    partName: 'fingerboard',
    countryName: '',
    specieName: '',
    specieScientificName: ''
  },
  {
    partName: 'heel',
    countryName: '',
    specieName: '',
    specieScientificName: ''
  },
  {
    partName: 'bridge',
    countryName: '',
    specieName: '',
    specieScientificName: ''
  },
  {
    partName: 'top',
    countryName: '',
    specieName: '',
    specieScientificName: ''
  },
  {
    partName: 'neck',
    countryName: '',
    specieName: '',
    specieScientificName: ''
  },
  {
    partName: 'back',
    countryName: '',
    specieName: '',
    specieScientificName: ''
  },
  {
    partName: 'side',
    countryName: '',
    specieName: '',
    specieScientificName: ''
  }
])

const save = async () => {
  loading.value = true
  if (itemId.value) {
    await store.dispatch('admin/updateItem', {
      id: itemId.value,
      data: {
        name: name.value,
        model: model.value,
        modelType: modelType.value,
        items: guitarParts.value
      }
    })
  } else {
    await store.dispatch('admin/createItem', {
      name: name.value,
      model: model.value,
      modelType: modelType.value,
      items: guitarParts.value
    })
  }
  loading.value = false
  props?.closeModal?.()
}

</script>

<style lang="scss">
.passport-form {
  font-family: 'Roboto', sans-serif;
  &__part {
    padding-left: 16px;
  }
  &--modal {
    .card-body {
      padding-right: 0;
    }
    form {
      overflow-y: auto;
      max-height: 70vh;
      padding-right: 1.25rem;
    }
    .form-actions {
      padding-right: 1.25rem;
    }
  }
  &__label {
    text-transform: capitalize;
    font-size: 12px;
    color: grey;
  }
  input::placeholder {
    opacity: 0.5
  }
  &.card {
    width: 900px !important;
  }
}
</style>