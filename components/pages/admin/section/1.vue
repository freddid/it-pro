<template>
   <div class="container flex justify-between items-center mb-40px">
      <div>
         <label class="mb-5px">До конца регистрации</label>
         <div class="mb-10px text-2xl text-base-3 font-bold">{{ actDate }}</div>
         <label class="mb-5px">Укажите дату окончания</label>
         <Datepicker locale="ru" text-input v-model="date" select-text="Выбрать" cancel-text="Закрыть"></Datepicker>
      </div>
      <button class="bg-base-3 py-10px px-20px rounded-10px text-base-2">Сохранить</button>
   </div>
</template>
<script setup>
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
const actDate = ref('10.01.2023, 02:31:04')
const date = ref(actDate.value)
</script>