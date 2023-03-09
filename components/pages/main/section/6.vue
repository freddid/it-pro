<template>
   <section class=" sm:mb-250px mb-120px">
      <div class="container">
         <div class="mb-40px lg:mb-0">
            <UiSubtitle>Контакты</UiSubtitle>
            <h2 class="h2T">Контактная информация</h2>
         </div>
         <div class="flex justify-between sm:(flex-row mt-60px) mt-40px flex-col gap-25px">
            <div v-for="contact in contacts" :key="contact[0]" class="">
               <span class="text-2xl text-base-3 font-bold"> {{ contact[0] }}:</span>
               <div class="text-xl mt-10px" v-html="contact[1]"></div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const contacts = ref([
   ['Телефон', "<a href='tel:+7(938)023-05-05'>+7(938)023-05-05</a>"],
   ['Почта', "<a href='mailto:it-pro_inf@mail.ru'>it-pro_inf@mail.ru</a>"],
   ['Адрес', "пр. Х. Исаева, 100, Грозный"]
])
</script>