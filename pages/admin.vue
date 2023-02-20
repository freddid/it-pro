<template>
   <div v-if="load" class="min-h-screen pt-72px">
      <h2 class="h2T text-center mt-80px mb-40px">{{ setMenu[showBlock] }}</h2>
      <div class="container flex flex-col lg:flex-row">
         <div class="lg:(w-350px block mr-40px mb-0) mb-30px flex">
            <div v-for="(menu, i) in setMenu" :key="menu" @click="showBlock = i" class="menu-items"
               :class="[showBlock == i ? 'text-base-2 bg-base-1' : '']">{{ menu }}
            </div>
         </div>
         <div class="w-full relative h-[74vh] overflow-auto">
            <PagesAdminSection1 key="0" v-if="showBlock == 0" class="absolute w-full p-10px pl-0" />
            <PagesAdminSection2 key="1" v-if="showBlock == 1" class="absolute w-full p-10px pl-0" />
            <PagesAdminSection3 key="2" v-if="showBlock == 2" class="absolute w-full p-10px pl-0" />
            <PagesAdminSection4 key="3" v-if="showBlock == 3" class="absolute w-full p-10px pl-0" />
         </div>
      </div>
   </div>
</template>
<script setup>
definePageMeta({
   layout: "admin"
})

const setMenu = ['Установка даты', 'Список участников', 'Новости', 'Галлерея']
const showBlock = ref(0)
const load = ref(false)

if (process.client) {
   if (!sessionStorage.getItem('token')) {
      navigateTo('/auth')
   } else {
      load.value = true
   }
}
</script>
<style>
.menu-items {
   @apply lg: (text-lg justify-start border-b border-r-0) border-r justify-center h-60px w-full flex items-center px-10px border-base-1 last: border-none cursor-pointer hover:text-base-3;
}
</style>