<template>
  <Header>
    <template #actions>
      <button
        type="button"
        class="btn btn-primary btn-sm mr-4"
        @click="createItem"
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
  <PassportsList @edit="editItem" />
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { openModal, closeModal } from "jenesius-vue-modal"
import Header from "@/components/admin/Header.vue";
// @ts-ignore
import PassportsList from "@/components/admin/PassportsList.vue";
// @ts-ignore
import PassportForm from "@/components/admin/PassportForm.vue";

const store = useStore()
const router = useRouter()

const createItem = () => {
  openModal(PassportForm, {
    editableItemId: null,
    closeModal
  });
}

const editItem = (id: string) => {
  openModal(PassportForm, {
    editableItemId: id,
    item: store.state.admin.items.find((i: any) => i.id === id)?.attributes?.customAttributes || {},
    closeModal
  });
}

const logout = () => {
  store.dispatch('auth/logout')?.catch?.(() => false)
  router.push({ name: 'home' })
}

</script>
