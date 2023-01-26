<template>
   <div v-if="load" class="min-h-screen pt-72px">
      <h2 class="h2T text-center mt-80px mb-50px">{{ setMenu[showBlock] }}</h2>
      <div class="container flex flex-col lg:flex-row">
         <div class="lg:(w-350px block mr-40px mb-0) mb-30px flex">
            <div v-for="(menu, i) in setMenu" :key="menu" @click="showBlock = i" class="menu-items"
               :class="[showBlock == i ? 'text-base-2 bg-base-1' : '']">{{ menu }}
            </div>
         </div>
         <div class="w-full relative">
            <transition-group name="blocks">
               <PagesAdminSection1 key="1" v-if="showBlock == 0" class="absolute w-full" />
               <PagesAdminSection2 key="2" v-if="showBlock == 1" class="absolute w-full" />
               <PagesAdminSection3 key="3" v-if="showBlock == 2" class="absolute w-full" />
            </transition-group>
         </div>
      </div>
   </div>
</template>
<script setup>
definePageMeta({
   layout: "admin"
})

const setMenu = ['Установка даты', 'Список участников', 'Новости']
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

.blocks-enter-active,
.blocks-leave-active {
   transition: all 0.4s ease;
}

.blocks-enter,
.blocks-leave-active {
   opacity: 0;
}
</style>