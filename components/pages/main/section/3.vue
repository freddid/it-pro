<template>
   <section class="sm:mt-200px mt-100px">
      <div class="container flex flex-col lg:(items-center flex-row) ">
         <div class="mb-40px lg:mb-0">
            <UiSubtitle>Дата_Мероприятия</UiSubtitle>
            <h2 class="h2T">Подсчет</h2>
         </div>
         <div class="flex justify-between lg:(ml-50px flex-auto w-auto) w-full">
            <div v-for="t in date" :key="t[1]" class="text-center">
               <div class="sm:text-7xl text-30px">{{ t[0] }}</div>
               <div class="text-base-3 sm:text-lg text-sm">{{ t[1] }}</div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const date = ref([
   ['00', 'Месяца'],
   ['00', 'Дни'],
   ['00', 'Часы'],
   ['00', 'Минуты'],
   ['00', 'Секунды'],
])
</script>