<template>
   <section v-if="lastNew.length">
      <div class="container sm:mb-250px mb-80px">
         <UiNewsBlock :news-obj="lastNew[0]" />
      </div>
   </section>
</template>
<script setup>
await useDataStore().getNews()
const lastNew = useDataStore().news.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
</script>
