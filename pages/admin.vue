<template>
   <div class="min-h-screen pt-72px">
      <PagesAdminSection1 class="mt-40px" />
      <PagesAdminSection2 :users-data="usersData" />
   </div>
</template>
<script setup>
const usersData = await(await fetch('http://185.211.170.2:5500/api/getUsers')).json()
definePageMeta({
   layout: "admin",
});
</script>
<style lang="">
   
</style>