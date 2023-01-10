<template>
   <nav class="header-menu">
      <ul>
         <li><nuxt-link to="/">Главная</nuxt-link></li>
         <li><nuxt-link to="./news">Новости</nuxt-link></li>
         <li><nuxt-link to="./gallery">Фото архив</nuxt-link></li>
      </ul>
   </nav>
</template>
<styles lang="scss">
.header-menu ul {
   @apply sm: (space-x-50px space-y-0 flex-row p-0) pt-30px space-y-20px flex-col justify-between flex uppercase font-bold;

   & a {
      @apply relative overflow-hidden inline-block;

      &::after {
         @apply content-[""] absolute left-0 w-full h-4px bg-base-3 transition duration-300;
         bottom: calc(50% - 1px);
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
</styles>