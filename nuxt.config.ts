export default defineNuxtConfig({
  css: [
    "@/assets/styles/_fonts.scss",
    "@/assets/styles/_variables.scss",
    "@/assets/styles/main.scss",
  ],
  modules: [["vue3-notion/nuxt", { css: true }]],
  // https://stackoverflow.com/questions/75219384/nuxt3-hmr-not-working-page-reload-needed-for-hmr-to-fire
  vite: {
    server: {
      hmr: {
        port: 3008,
      },
    },
  },
});
