<template>
   <section>
      <div class="container flex sm:mb-250px mb-120px justify-between flex-col lg:(flex-row) lg:space-y-0 space-y-60px">
         <div class="">
            <UiSubtitle>Свяжитесь_С_Нами</UiSubtitle>
            <h2 class="h2T">Запись на <br> мероприятие</h2>
         </div>
         <form class="flex flex-col lg:max-w-400px space-y-30px w-full" @submit.prevent="submit">
            <input required v-model="name" class="inputF" placeholder="Имя *" type="text" name="firstName">
            <input required v-model="lastName" class="inputF" placeholder="Фамилия *" type="text" name="lastName">
            <input required v-model="email" class="inputF" placeholder="Электронная почта *" type="email" name="email">
            <div>
               <button :class="[rightReg ? 'bg-base-1' : 'bg-base-3']" :disabled="rightReg"
                  class="p-20px text-base-2 rounded-[40px] hover:bg-base-1 transition-all">
                  {{ rightReg?'Теперь вы участник!': 'Отправить' }}</button>
               <div class="children:text-base-3 text-xs mt-10px font-mons">
                  Нажимая на кнопку "Отправить" вы подтверждаете ознакомление с <a href="#">Общими правилами проведения
                     мероприятия</a> и с <a href="#">Условиями обработки персональных данных</a>
               </div>
            </div>
         </form>
         <div class="flex flex-col space-y-30px">
            <div v-for="contact in contacts" :key="contact[0]">
               <div class="font-bold font-mons">{{ contact[0] }}</div>
               <div v-html="contact[1]" class="children:font-mons font-mons"></div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const name = ref('')
const lastName = ref('')
const email = ref('')
const rightReg = ref(false)
const contacts = ref([
   ['Телефон', "<a href='tel:+7(871)222-36-07'>+7(871)222-36-07</a>"],
   ['Почта', "<a href='mailto:info@gstou.ru'>info@gstou.ru</a>"],
   ['Адрес', "пр. Х. Исаева, 100, Грозный"]
])

const submit = async () => {
   if (!(name.value && lastName.value && email.value)) return
   const response = await useDataStore().addUser({ name: name.value, lastName: lastName.value, email: email.value })
   if (response.status == 200) rightReg.value = true
}

</script>