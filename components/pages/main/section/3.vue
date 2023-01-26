<template>
   <section v-if="difD" class=" sm:mb-250px mb-120px">
      <div class="container flex flex-col lg:(items-center flex-row) ">
         <div class="mb-40px lg:mb-0">
            <UiSubtitle>Дата_Мероприятия</UiSubtitle>
            <h2 class="h2T">До окончания</h2>
         </div>
         <div class="grid grid-cols-5 lg:(ml-50px flex-auto w-auto) w-full">
            <div v-for="t in date" :key="t[1]" class="text-center">
               <div class="sm:text-7xl text-30px">{{ t[0] }}</div>
               <div class="text-base-3 sm:text-lg text-sm">{{ t[1] }}</div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
await useDataStore().getDate()
const zero = date => date < 10 ? '0' + date : date
const difD = () => new Date((Date.parse(useDataStore().date) - new Date()))
const dif = ref(difD());

const timer = setInterval(() => difD() == 'Invalid Date' ? clearInterval(timer) : dif.value = difD(), 1000);

const date = computed(() => [
   [zero(dif.value.getMonth()), 'Месяца'],
   [zero(dif.value.getDate() - 1), 'Дни'],
   [zero(dif.value.getHours()), 'Часы'],
   [zero(dif.value.getMinutes()), 'Минуты'],
   [zero(dif.value.getSeconds()), 'Секунды'],
])
</script>