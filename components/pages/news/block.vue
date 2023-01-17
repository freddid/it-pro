<template>
   <div class="relative overflow-hidden rounded-[10px]">
      <div class="absolute top-0 left-0 w-full h-full bg-base-1/20"></div>
      <div class="relative z-10 flex lg:(flex-row min-h-400px) min-h-600px flex-col-reverse justify-between">
         <div class="content-block">
            <UiSubtitle class="sm:text-11px">{{ new Date(newsObj.createdAt).toLocaleString('ru') }}</UiSubtitle>
            <h2 class="h2T mb-20px lg:(mb-50px text-32px) text-20px">{{ newsObj.title }}</h2>
            <div class="lg:text-lg">
               {{ newsObj.content }}
            </div>
         </div>
         <div class="lg:w-2/5 min-h-1/2s">
            <img class="object-cover h-full w-full" :src="`https://it-pro-back.onrender.com/${newsObj.img}`" alt="">
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   newsObj: Object
})
</script>

<style scoped>
.content-block {
   @apply py-10px px-20px rounded-bl-[10px] min-h-1/2 rounded-br-[10px] border-2 border-t-transparent lg: (w-3/5 border-base-3 border-r-transparent rounded-tl-[10px] rounded-br-[0]);
}
</style>