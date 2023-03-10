<template>
   <section class=" sm:mb-250px mb-120px">
      <div class="container">
         <div class="mb-40px lg:mb-0">
            <UiSubtitle>Этапы</UiSubtitle>
            <h2 class="h2T">Даты проведения</h2>
         </div>
         <div class="grid grid-cols-1 sm:(flex-row grid-cols-3 mt-60px) mt-40px flex-col">
            <div v-for="date in dates" :key="date[0]"
               class="text-center sm:(border-t-0 border-l) border-t first:border-none p-20px">
               <span class="text-2xl text-base-3 font-bold"> {{ date[0] }}:</span>
               <div class="ml-20px text-xl mt-10px">
                  <div v-for="el in date[1]" :key="el">{{ el }}</div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const dates = [
   ['Регистрация', ['10 Марта - 17 Марта']],
   ['I тур', ['18 марта 14:00 онлайн тестирование (для школьников которые не из чечни) и офлайн формате']],
   ['II тур', ['15 апреля в 11.00, очно для всех полуфиналистов']]
]
</script>