<template>
   <section v-if="lastNew.length">
      <div class="container sm:mb-250px mb-80px">
         <div class="mb-40px lg:mb-60px">
            <UiSubtitle>Последнее объявление</UiSubtitle>
            <h2 class="h2T">Новости</h2>
         </div>
         <UiNewsBlock :news-obj="lastNew[0]" />
      </div>
   </section>
</template>
<script setup>
await useDataStore().getNews()
const lastNew = useDataStore().news.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
</script>
