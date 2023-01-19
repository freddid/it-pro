<template>
   <div class="card-block">
      <div class="py-10px px-15px min-h-300px h-full lg:(w-3/5 px-20px min-h-none)">
         <UiSubtitle class="sm:text-11px">{{ new Date(newsObj.createdAt).toLocaleString('ru') }}</UiSubtitle>
         <h2 class="h2T mb-20px lg:(mb-30px text-32px) text-20px">{{ newsObj.title }}</h2>
         <div class="lg:text-lg">
            {{ newsObj.content }}
         </div>
      </div>
      <div class="lg:(w-2/5 h-auto) h-300px">
         <img class="object-cover h-full w-full" src="@/assets/imgs/block-2-1.jpg" alt="">
         <!-- :src="`${useDataStore().baseUrl}${newsObj.img}`" -->
      </div>
   </div>
</template>
<script setup>
const props = defineProps({
   newsObj: Object
})
</script>

<style scoped lang="scss">
.card-block {
   @apply relative overflow-hidden z-1 rounded-[10px] flex lg: flex-row flex-col-reverse justify-between;

   &:before {
      @apply content-[''] absolute top-0 left-0 w-full h-full -z-10;
      box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
      border-radius: 5px;
      background-color: rgba(255, 255, 255, .15);
      backdrop-filter: blur(5px);
   }
}
</style>