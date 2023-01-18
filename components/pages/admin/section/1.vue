<template>
   <div class="flex justify-between items-center">
      <div class="flex">
         <div class="mr-40px">
            <label class="mb-5px">До конца регистрации</label>
            <div class="mb-10px text-2xl text-base-3 font-bold">{{ new Date(actDate).toLocaleString('ru') }}</div>
         </div>
         <div>
            <label class="mb-5px">Укажите дату окончания</label>
            <Datepicker locale="ru" text-input v-model="date" select-text="Выбрать" cancel-text="Закрыть"></Datepicker>
         </div>
      </div>
      <button @click="saveDate" :disabled="actBtn" :class="[actBtn ? 'bg-base-1' : '']"
         class="bg-base-3 py-10px px-20px rounded-10px text-base-2">Сохранить</button>
   </div>
</template>
<script setup>
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

await useDataStore().getDate()
const actDate = ref(useDataStore().date)
const date = ref(actDate.value)

const saveDate = async () => {
   await useDataStore().addDate(date.value)
   actDate.value = useDataStore().date
}
</script>