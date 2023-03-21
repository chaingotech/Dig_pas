<template>
  <header class="admin-page-headline">
    <div class="container d-flex align-items-center justify-content-start">
      <div class="admin-page-headline__main">
        <div class="spacer"></div>
        <h1>
          <slot>
            Digital Passport
          </slot>
        </h1>
        <div class="mt-4">
          <slot name="create" />
        </div>
      </div>
      <img alt="" src="@/assets/featured-img.svg" class="admin-page-headline__image">
    </div>
    <div class="admin-page-headline__logout">
      <slot name="logout"></slot>
    </div>
  </header>
</template>

<style lang="scss">
.admin-page-headline {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  max-height: 300px;
  padding: 0 16px;
  background: #eaeaea;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  // box-shadow: 0 0 0 1px inset rgba(0,0,0,.11);
  &__logout {
    right: 16px;
    top: 16px;
    position: absolute;
    z-index: 2;
  }
  &__image {
    position: absolute;
    right: -130px;
    top: -268px;
    // max-height: 368px;
    // margin-left: 200px;
    // transform: translateY(-14px);
  }
  .container {
    max-height: 100%;
  }
  &__main {
    z-index: 1;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 60px;
    }
    .spacer {
      height: 72px;
    }
  }
}
@media print {
  .admin-page-header {
    display: none !important;
  }
  .admin-page-headline {
    display: none !important;
  }
}
</style>
