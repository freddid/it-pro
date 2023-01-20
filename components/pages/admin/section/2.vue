<template>
   <div>
      <div class="flex mb-20px lg:(items-center flex-row) flex-col">
         <div class="mr-10px">Поле поиска:</div>
         <select v-model="searchField" class="text-base-2 px-10px py-5px">
            <option value="name">Имя</option>
            <option value="lastName">Фамилия</option>
            <option value="email"> Почта</option>
            <option value="date">Дата</option>
         </select>

         <div class="mr-10px lg:ml-30px">Поиск: </div>
         <input type="text" class="text-base-2 px-10px py-5px" v-model="searchValue">
      </div>
      <Vue3EasyDataTable show-index :headers="headers" :items="items" alternating border-cell :rows-per-page="15"
         :search-field="searchField" :search-value="searchValue" :rows-items="[15, 50, 100]" />
   </div>
</template>
<script setup>
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
await useDataStore().getUsers()

const usersData = ref(useDataStore().users)
const searchField = ref("name");
const searchValue = ref("");

const headers = computed(() => [
   { text: "Имя", value: "name", sortable: true, fixed: true },
   { text: "Фамилия", value: "lastName", sortable: true },
   { text: "Электронная почта", value: "email", sortable: true },
   { text: "Дата", value: "date", sortable: true },
]);

const items = computed(() => usersData.value.map(el => {
   el.date = new Date(el.createdAt).toLocaleString('ru')
   return el
}));
</script>