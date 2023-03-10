<template>
  <Header>
    <template #actions>
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
import Header from "@/components/admin/Header.vue";
import PassportsList from "@/components/admin/PassportsList.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore()
const router = useRouter()

const logout = () => {
  store.dispatch('auth/logout')?.catch?.(() => false)
  router.push({ name: 'home' })
}

</script>

<style lang="scss">
.admin-page {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
