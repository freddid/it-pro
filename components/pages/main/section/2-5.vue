<template>
   <section class=" sm:mb-150px mb-40px">
      <div class="container">
         <div class="mb-40px lg:mb-0">
            <UiSubtitle>Этапы</UiSubtitle>
            <h2 class="h2T">Требования:</h2>
         </div>
         <div class="grid grid-cols-1 sm:(flex-row grid-cols-3 mt-60px) mt-40px flex-col">
            <div v-for="date in dates" :key="date[0]"
               class="text-center sm:(border-t-0 border-l) border-t first:border-none p-20px">
               <span class="text-2xl text-base-3 font-bold"> {{ date[0] }}:</span>
               <div class="ml-20px mt-10px">
                  <div class="sm:text-xl">{{ date[1][0] }}</div>
                  <div class="mt-10px sm:text-base text-[13px] text-base-1/90">{{ date[1][1] }}</div>
               </div>
            </div>
         </div>
         <div class="text-center text-xl mt-40px">ВО ВСЕХ КАТЕГОРИЯХ ЖЕЛАТЕЛЬНО ПРИДЕРЖИВАТЬСЯ ФИРМЕННОГО СТИЛЯ ВУЗА!</div>
      </div>
   </section>
</template>
<script setup>
const dates = [
   ['Видеоролик', ['Видеоролик. 🔹Продолжительность видеоролика от 1 до 3 минут, формат MP4/MOV', 'В видеоролике обязательны графические элементы (2D, 3D, пресеты, футажи и т.д.)']],
   ['Маскот', ['Маскот должен быть в полный рост, на макете представлены использованные цвета и логическое обоснование самого талисмана, формат PDF.']],
   ['Превью', ['Анимация с помощью шаблонов из интернета не будет учитываться!', 'Продолжительность превью не должна быть более 4 секунд, формат MP4/MOV.']]
]
</script>