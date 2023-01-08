<template>
   <header class="header">
      <div class="container" :class="{ 'show-m': showM }">
         <div class="flex justify-between items-center">
            <nuxt-link to="/" class="text-2xl font-bold uppercase">IT_<span class="text-base-3">Pro</span></nuxt-link>
            <nav class="">
               <div class="burger-menu sm:hidden block" @click="showM = !showM">
                  <span></span>
               </div>
               <ul class="">
                  <li><nuxt-link to="/">Главная</nuxt-link></li>
                  <li><nuxt-link to="./news">Новости</nuxt-link></li>
                  <li><nuxt-link to="./gallery">Фото архив</nuxt-link></li>
               </ul>
            </nav>
         </div>
      </div>
   </header>
</template>

<script setup>
const showM = ref(false)
</script>

<style lang="scss">
.header {
   @apply py-20px absolute w-full sm: (bg-transparent text-base-1) bg-base-1 text-base-2;

   & li {
      @apply overflow-hidden;

      & a {
         @apply relative;

         &::after {
            @apply content-[""] absolute left-0 w-full h-4px bg-base-3 transition duration-300;
            bottom: calc(50% - 0px);
            transform: translate3d(-100%, 0, 0);
         }

         &:hover::after,
         &:focus::after {
            transform: translate3d(0, 0, 0);
         }

         &.router-link-active::after {
            transform: translate3d(0, 0, 0);
         }
      }
   }

   & ul {
      @apply sm: (space-x-50px space-y-0 justify-between flex-row static w-auto bg-transparent p-0) space-y-20px flex uppercase font-bold absolute left-0 flex-col w-full bg-base-1 py-40px px-15px bottom-72px transition-all duration-300;
   }

   & .burger-menu span {
      @apply bg-base-3 block relative w-25px h-3px transition-all duration-300;

      .show-m & {
         @apply top-0 transform rotate-45;
      }

      &:after,
      &:before {
         @apply content-[""] absolute w-full h-full bg-base-3 left-0 -top-7px transition-all duration-300;
      }

      &:before {
         @apply top-[unset] -bottom-7px;
      }
   }

   & .show-m {
      & .burger-menu span {
         @apply top-0 transform rotate-45;

         &:after {
            @apply top-0 transform rotate-90;
         }

         &:before {
            @apply bottom-0;
         }
      }

      & ul {
         @apply -bottom-185px;
      }
   }
}
</style>