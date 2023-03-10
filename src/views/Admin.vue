<template>
  <Header>
    <template #actions>
      <button
        type="button"
        class="btn btn-primary btn-sm mr-4"
      >
        Create new one
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm"
        @click="logout"
      >
        Logout
      </button>
    </template>
  </Header>
  <PassportsList />
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Header from "@/components/admin/Header.vue";
// @ts-ignore
import PassportsList from "@/components/admin/PassportsList.vue";

const store = useStore()
const router = useRouter()

const logout = () => {
  store.dispatch('auth/logout')?.catch?.(() => false)
  router.push({ name: 'home' })
}

</script>
