<template>
   <section class=" sm:mb-250px mb-120px">
      <div class="container">
         <div class="mb-40px lg:mb-0">
            <UiSubtitle>Этапы</UiSubtitle>
            <h2 class="h2T">Даты проведения</h2>
         </div>
         <div class="flex justify-between sm:(flex-row mt-60px) mt-40px flex-col gap-25px">
            <div v-for="date in dates" :key="date[0]" class="">
               <span class="text-2xl text-base-3 font-bold"> {{ date[0] }}:</span>
               <div class="ml-20px text-xl mt-10px">
                  <div v-for="el in date[1]" class=" list-item" :key="el">{{ el }}</div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const dates = [
   ['Регистрация', ['10 Марта - 17 Марта']],
   ['I тур', ['18 марта 14:00 онлайн тестирование']],
   ['II тур (финал)', ['Тренинги: 03.04 - 30.04', 'Конкурс: 15.05 - 20.05', 'Очно: 15 Апреля']]
]
</script>