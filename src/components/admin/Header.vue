<template>
  <header class="admin-page-header">
    <h4>
      <slot>
        Digital Passport
      </slot>
    </h4>
    <div>
      <slot name="actions" />
    </div>
  </header>
</template>

<style lang="scss">
.admin-page-header {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  position: sticky;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 16px;
  background: #fafafa;
  z-index: 2;
}
</style>
