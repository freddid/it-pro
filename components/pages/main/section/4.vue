<template>
   <section v-if="newsArr.length">
      <div class="container sm:mb-250px mb-120px flex lg:flex-row flex-col">
         <div class="lg:(mr-40px w-3/5) mb-30px">
            <UiSubtitle>Последняя_Новость</UiSubtitle>
            <h2 class="h2T mb-20px lg:mb-50px">{{ lastNew.title }}</h2>
            <div class="text-lg">{{ lastNew.content }}</div>
         </div>
         <div class="lg:w-3/5">
            <img class="w-full object-cover" src="@/assets/imgs/block-2-1.jpg" alt="" />
         </div>
      </div>
   </section>
</template>
<script setup>
await useDataStore().getNews()
const newsArr = ref(useDataStore().news)
const lastNew = newsArr.value[newsArr.value.length - 1]
</script>
