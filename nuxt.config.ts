// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   css: [
      '~/assets/style/global.scss'
    ],
   modules: [
      'nuxt-windicss',
    ],
    vite: {
      css: {
          preprocessorOptions: {
              scss: {
              },
          },
      },
  }
})
