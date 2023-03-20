
<template>
<Header>
  Edit Digital Passport
  <template #actions>
    <router-link
      tag="button"
      class="btn btn-primary btn-sm mr-4"
      :to="{ name: 'admin' }"
    >
      Admin
    </router-link>
    <button
      type="button"
      class="btn btn-secondary btn-sm"
      @click="logout"
    >
      Logout
    </button>
  </template>
</Header>
 <div class="container-fluid edit-passport">
    <div class="row flex-xl-nowrap">
      <div class="col-md-12 col-12 d-flex justify-content-center">
        <PassportForm
          v-if="!loading"
          :editable-item-id="passportId"
          :item="passport"
          hide-title
          class="edit-passport__form"
        >
          <template #actions>
            <router-link
              tag="button"
              class="btn btn-text-secondary btn-sm mr-4"
              :disabled="loading"
              :to="passportRoute"
            >
              View
            </router-link>
          </template>
        </PassportForm>
      </div>
    </div>
 </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, computed } from 'vue'
import { useRouter } from "vue-router"
import { useStore } from 'vuex'
import { useRouteParam } from '@/composables'
import Header from "@/components/admin/Header.vue"
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import PassportForm from '@/components/admin/PassportForm.vue'
import AdminService from '@/services/admin.service';
import { getDefaultPassportData } from '@/store/admin.module';

const passportId = useRouteParam('passport')
const loading = ref(false)
const store = useStore()
const router = useRouter()

const fetchData = async () => {
  const internalInstance = getCurrentInstance();
  try {
    loading.value = true
    internalInstance?.appContext?.config?.globalProperties?.$Progress?.start?.();
    const passportId = useRouteParam('passport')

    const { data } = await AdminService.getPassport(passportId.value)
    const passport = data?.attributes?.customAttributes || {}
    store.commit('admin/setPassport', {
      ...getDefaultPassportData(),
      ...passport
    })
    // store.dispatch('admin/getPassport', passportId.value)
    // await new Promise(resolve => setTimeout(resolve))
  } catch (err) {
    internalInstance?.appContext?.config?.globalProperties?.$Progress?.finish?.();
    console.error(err)
    alert(`Passport "${passportId.value}" not found.`)
    router.replace({ name: 'admin' })
  } finally {
    internalInstance?.appContext?.config?.globalProperties?.$Progress?.finish?.();
    setTimeout(() => {
      loading.value = false
    }, 300)
  }
}

const passportRoute = computed(() => ({
  name: 'passport',
  params: {
    passport: passportId.value
  }
}))

fetchData()

const passport = computed(() => store.state.admin.passport)

const logout = () => {
  store.dispatch('auth/logout')?.catch?.(() => false)
  router.push({ name: 'home' })
}
</script>

<style lang="scss">
.edit-passport {
  &__form {
    border: none;
    &.card {
      width: 700px !important;
    }
  }
}
</style>