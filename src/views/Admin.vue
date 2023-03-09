<template>
  <div class="container admin-page">
   <div class="d-flex align-items-center justify-content-between">
     <h3>
        Admin Page
      </h3>
      <button
        class="btn btn-color px-2"
        @click="logout"
      >
        logout
      </button>
   </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')?.catch?.(() => false)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
.admin-page {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
