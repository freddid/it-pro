// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/style/global.scss'
  ],
  modules: [
    'nuxt-windicss',
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
})
