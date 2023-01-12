<template>
   <div class="flex lg:flex-row flex-col justify-between">
      <div class="lg:(mr-40px mb-0) mb-30px">
         <h2 class="h2T mb-20px lg:mb-50px">{{ newsObj.title }}</h2>
         <div class="text-lg">
            {{ newsObj.content }}
         </div>
      </div>
      <div class="">
         <img class="lg:(max-w-550px max-h-350px min-w-550px min-h-350px) object-cover"
            :src="`http://185.211.170.2:5100/${newsObj.img}`" alt="">
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   newsObj: Object
})
</script>