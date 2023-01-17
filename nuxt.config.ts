// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['stores'],
  },
  css: [
    '~/assets/style/global.scss'
  ],
  modules: [
    'nuxt-windicss',
    ['@pinia/nuxt',{autoImports: ['defineStore', 'acceptHMRUpdate']}],
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
})
