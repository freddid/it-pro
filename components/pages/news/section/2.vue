<template>
   <section class="pt-72px sm:mb-250px mb-120px">
      <div class="container">
         <div v-if="newsArr.length" class=" space-y-40px">
            <PagesNewsBlock class="lg:(min-h-400px) min-h-600px" v-for="newsObj in newsArr" :key="newsObj._id"
               :news-obj="newsObj" />
         </div>
      </div>
   </section>
</template>
<script setup>
await useDataStore().getNews()
const newsArr = ref(useDataStore().news)
</script>