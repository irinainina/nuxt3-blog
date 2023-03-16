<template>
  <footer class="footer">
      <div class="footer-container">
        <NuxtLink to="/" aria-label="finden">
          <div class="logo-icon"></div>
        </NuxtLink>
        <p class="footer-info">2023 @Nuxt3 Blog</p>
        <p class="github">GitHub</p>
      </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid var(--border-color);
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1202px;
  min-height: 56px;
  line-height: 56px;
  margin: 0 auto;

  @media (max-width: 768px) {
    min-height: 32px;
    line-height: 32px;
  }
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-image: url("../assets/svg/icon-green.svg");
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 376px) {
    width: 24px;
    height: 24px;
  }
}

.footer-info {
  font-size: 16px;
}

.github {
  font-size: 16px;
}
</style>