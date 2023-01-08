<template>
   <section>
      <div class="container flex sm:mt-200px mt-120px justify-between flex-col lg:(flex-row) lg:space-y-0 space-y-60px">
         <div class="">
            <UiSubtitle>Свяжитесь_С_Нами</UiSubtitle>
            <h2 class="h2T">Запись на <br> мероприятие</h2>
         </div>
         <form class="flex flex-col lg:max-w-400px space-y-30px w-full" action="">
            <input class="inputF" placeholder="Имя" type="text" name="firstName">
            <input class="inputF" placeholder="Фамилия" type="text" name="lastName">
            <input class="inputF" placeholder="Электронная почта" type="text" name="email">
            <textarea class="inputF" placeholder="Сообщение" name="comment" id="" cols="5" rows="3"></textarea>
            <div><button class="bg-base-3 p-20px text-base-2 rounded-[40px]">Отправить</button></div>
         </form>
         <div class="flex flex-col space-y-30px">
            <div v-for="contact in contacts" :key="contact[0]">
               <div class="font-bold font-mons">{{ contact[0] }}</div>
               <div class="font-mons">{{ contact[1] }}</div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const contacts = ref([
   ['Телефон', "+7(871)222-36-07"],
   ['Почта', "info@gstou.ru"],
   ['Адрес', "пр. Х. Исаева, 100, Грозный"]
])

</script>
<style>

</style>