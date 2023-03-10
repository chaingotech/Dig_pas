<template>
  <div class="container passports-list">
    <div class="row">
      <div class="col-md-12">
        <div class="mt-3">
          <ul class="list list-inline">
            <li
              v-for="item in items"
              :key="item.id"
              class="d-flex justify-content-between"
            >
              <div class="d-flex flex-row align-items-center">
                <div class="ml-2">
                  <h6 class="mb-0">{{ item.attributes.customAttributes.title || '-' }}</h6>
                  <div class="d-flex flex-row mt-1 text-black-50 date-time">
                    <div>
                      <span class="ml-2 text-secondary">
                        {{ item.attributes.updatedAt }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <div class="d-flex align-items-center mr-2">
                  <button type="button" class="btn btn-sm btn-outline-primary mr-2" @click="() => $emit('edit', item.id)">Edit</button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    :disabled="removingItemId.value === item.id"
                    @click="() => removeItem(item.id)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

const removingItemId = ref(false)

const store = useStore()

onMounted(() => {
  store.dispatch('admin/fetchItems')  
})


const items = computed(() => store.state.admin.items)

const removeItem = async (id: string): Promise<void> => {
  const confirmed = confirm('Do you really want to remove this item?')
  if (!confirmed) {
    return
  }
  removingItemId.value = true
  await store.dispatch('admin/removeItem', id)
  removingItemId.value = false
}

</script>

<style lang="scss">
.passports-list {
  font-family: 'Roboto', sans-serif;

  .icons i {
    color: #b5b3b3;
    border: 1px solid #b5b3b3;
    padding: 6px;
    margin-left: 4px;
    border-radius: 5px;
    cursor: pointer;
  }

  .activity-done {
    font-weight: 600;
  }

  .list-group li {
    margin-bottom: 12px;
  }

  .list-group-item {
  }

  .list li {
    list-style: none;
    padding: 10px;
    border: 1px solid #e3dada;
    margin-top: 12px;
    border-radius: 5px;
    background: #fff;
  }

  .checkicon {
    color: green;
    font-size: 19px;
  }

  .date-time {
    font-size: 12px;
  }

  .profile-image img {
    margin-left: 3px;
  }
}
</style>