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

const finishDate = "2020-03-12T00:56:20+03:00"

const timer = setInterval(() => {
   const dif = new Date((Date.parse(finishDate) - new Date()))
   if (dif != 'Invalid Date') {
      date.value[0][0] = dif.getMonth() < 10 ? '0' + dif.getMonth() : dif.getMonth()
      date.value[1][0] = dif.getDate() < 10 ? '0' + dif.getDate() : dif.getDate()
      date.value[2][0] = dif.getHours() < 10 ? '0' + dif.getHours() : dif.getHours()
      date.value[3][0] = dif.getMinutes() < 10 ? '0' + dif.getMinutes() : dif.getMinutes()
      date.value[4][0] = dif.getSeconds() < 10 ? '0' + dif.getSeconds() : dif.getSeconds()
   } else {
      clearInterval(timer)
   }
}, 1000);

</script>