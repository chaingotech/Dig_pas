<template>
  <Headline>
    <template #create>
      <button
        type="button"
        class="btn btn-primary"
        @click="createItem"
      >
        Create
      </button>
    </template>
    <template #logout>
      <button
        type="button"
        class="btn btn-secondary btn-sm"
        @click="logout"
      >
        Logout
      </button>
    </template>
  </Headline>
  <div class="passports-container">
    <PassportsList
      @edit="editItem"
      @generate-qrcode="generateQrCode"
    />
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { openModal, closeModal } from "jenesius-vue-modal"
import Headline from "@/components/admin/Headline.vue";
// @ts-ignore
import PassportsList from "@/components/admin/PassportsList.vue";
// @ts-ignore
import PassportForm from "@/components/admin/PassportForm.vue";
// @ts-ignore
import QRCodeModal from "@/components/admin/QRCodeModal.vue";

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
const generateQrCode = (id: string) => {
  openModal(QRCodeModal, {
    id,
    closeModal
  });
}

const logout = () => {
  store.dispatch('auth/logout')?.catch?.(() => false)
  router.push({ name: 'home' })
}

</script>

<style lang="scss">
.passports-container {
  min-height: calc(100vh - 300px);
  background: #fafafa;
  padding-top: 12px;
}
</style>