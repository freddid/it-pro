<template>
   <header id="header" :class="{ 'show-m': showM }">
      <div class="container">
         <div class="flex justify-between items-center">
            <nuxt-link to="/" class="text-2xl font-bold uppercase">IT_<span class="text-base-3">Pro</span></nuxt-link>
            <div class="burger sm:hidden block" @click="showM = !showM">
               <span></span>
            </div>
            <layoutHeaderMenu class="sm:block hidden" />
         </div>
         <transition name="home">
            <layoutHeaderMenu v-if="showM" class="sm:hidden block" />
         </transition>
      </div>
   </header>
</template>

<script setup>
const showM = ref(false)
</script>

<style lang="scss">
.home-enter-active,
.home-leave-active {
   transition: all .3s;
}

.home-enter,
.home-leave-active {
   opacity: 0;
}

#header {
   @apply py-15px fixed z-20 w-full sm: (absolute py-20px bg-transparent text-base-1) bg-base-1 text-base-2 transition-all max-h-72px;

   &.show-m {
      @apply max-h-300px;

      .burger span {
         @apply top-0 transform rotate-45 after: (top-0 transform rotate-90) before:bottom-0;
      }
   }

   & .burger span {
      @apply bg-base-3 block relative w-25px h-3px transition-all duration-300;

      &:after,
      &:before {
         @apply content-[""] absolute w-full h-full bg-base-3 left-0 -top-7px transition-all duration-300;
      }

      &:before {
         @apply top-[unset] -bottom-7px;
      }
   }
}
</style>