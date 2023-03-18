export default defineNuxtConfig({
  css: [
    "@/assets/styles/_fonts.scss",
    "@/assets/styles/_variables.scss",
    "@/assets/styles/main.scss",
  ],
  modules: [
    ["vue3-notion/nuxt", { css: true }],
  ],
});
