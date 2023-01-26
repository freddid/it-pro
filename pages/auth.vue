<template>
   <div v-if="load" class="h-screen w-screen flex justify-center items-center">
      <div class="flex flex-col items-center space-y-15px max-w-300px w-full">
         <h1 class="h2T mb-20px">
            Авторизация
         </h1>
         <input required v-model="login" class="w-full inputF" type="text" name="login" id="" placeholder="Логин">
         <input required v-model="password" class="w-full inputF" type="password" name="password" id=""
            placeholder="Пароль">
         <button @click="send" class="w-full py-10px text-base-2 bg-base-1 transition hover:bg-base-3">Войти</button>
      </div>
   </div>
</template>
<script setup>
definePageMeta({
   layout: "admin"
})

const load = ref(false)
const login = ref('')
const password = ref('')

const send = async () => {
   if (!(login.value && password.value)) return
   await useDataStore().authSystem({ login: login.value, password: password.value })
}

if (process.client) {
   if (sessionStorage.getItem('token')) {
      navigateTo('/admin')
   } else {
      load.value = true
   }
}
</script>
<style>

</style>