<template>
   <section class="pt-72px sm:mb-250px mb-120px">
      <div class="container">
         <div v-if="newsArr.length" class=" space-y-40px">
            <PagesNewsBlock v-for="newsObj in newsArr" :key="newsObj._id" :news-obj="newsObj" />
         </div>
      </div>
   </section>
</template>
<script setup>
const newsArr = await(await fetch('http://185.211.170.2:5100/api/getNews')).json()
</script>