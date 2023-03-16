<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <div class="logo-icon"></div>
        Nuxt 3 Blog
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: var(--header-color);
  border-bottom: 1px solid var(--border-color);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1202px;
  min-height: 72px;
  padding: 0 16px;
  margin: 0 auto;
  line-height: 56px;

  @media (max-width: 768px) {
    min-height: 56px;
    line-height: 56px;
  }
}

.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Lora;
  font-weight: 500;
  font-size: 24px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  margin-right: 8px;
  background-image: url("../assets/svg/icon-green.svg");
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
}
</style>