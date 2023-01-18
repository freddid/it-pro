export default defineNuxtRouteMiddleware((to, from) => {
   if (!useDataStore().token) {
      return navigateTo('/')
   }
})