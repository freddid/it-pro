<template>
   <div class="sm:grid-cols-2 grid gap-30px">
      <div>
         <label>Укажите дату окончания</label>
         <Datepicker class="mt-5px" locale="ru" text-input v-model="date" select-text="Выбрать" cancel-text="Закрыть" />
      </div>
      <div>
         <label>Укажите период проведения</label>
         <Datepicker :enable-time-picker="false" locale="ru" class="mt-5px" :partial-range="false" range
            v-model="rangeDate" select-text="Выбрать" cancel-text="Закрыть" />
      </div>
      <div class="mr-40px">
         <label class="mb-5px">До конца регистрации</label>
         <div class="mb-10px text-2xl text-base-3 font-bold">{{ new Date(actDate).toLocaleString('ru') }}</div>
      </div>
      <button @click="saveDate"
         class="bg-base-3 py-10px px-20px rounded-10px text-base-2 hover:bg-base-1 transition">Сохранить</button>
   </div>
</template>
<script setup>
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

await useDataStore().getDate()
const actDate = ref(useDataStore().date)
const date = ref(actDate.value)
const rangeDate = ref([useDataStore().date, useDataStore().date])

const saveDate = async () => {
   if (!date.value && rangeDate.value.length) return

   await useDataStore().addDate(date.value)
   actDate.value = useDataStore().date
}
</script>