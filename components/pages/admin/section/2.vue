<template>
   <div class="container">
      <table class="table">
         <thead>
            <tr>
               <th> №</th>
               <th>Имя</th>
               <th>Фамилия</th>
               <th>Электронная почта</th>
               <th>Дата записи</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(userData, i) in usersData" :key="i">
               <td>{{ ++i }}</td>
               <td>{{ userData.name }}</td>
               <td>{{ userData.lastName }}</td>
               <td>{{ userData.email }}</td>
               <td>{{ new Date(userData.createdAt).toLocaleString('ru') }}</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<script setup>
const props = defineProps({
   usersData: Array
})
</script>
<style lang="scss" scoped>
.table {
   width: 100%;
   border: none;
   background: #fff;
   border-radius: 10px;
   color: #000;
   overflow: hidden;
}

.table tr:hover {
   @apply !bg-base-3 cursor-pointer;
}

.table thead th {
   font-weight: bold;
   text-align: left;
   border: none;
   padding: 10px 15px;
   background: #d8d8d8;
   border-left: 1px solid #ddd;
   border-right: 1px solid #ddd;
}

.table tbody td {
   text-align: left;
   border-left: 1px solid #ddd;
   border-right: 1px solid #ddd;
   padding: 10px 15px;
   font-size: 14px;
   vertical-align: top;
}

.table thead tr th:first-child,
.table tbody tr td:first-child {
   border-left: none;
}

.table thead tr th:last-child,
.table tbody tr td:last-child {
   border-right: none;
}

.table tbody tr:nth-child(even) {
   background: #f3f3f3;
}
</style>