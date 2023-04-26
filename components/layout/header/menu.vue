<template>
   <nav class="header-menu">
      <ul>
         <li v-for="menu in menuList" :key="menu.to">
            <nuxt-link @click="$emit('close')" class="w-full py-10px flex" :to="menu.to">
               <span>{{ menu.txt }}</span>
            </nuxt-link>
         </li>
      </ul>
   </nav>
</template>

<script setup>
const menuList = [
   { to: '/', txt: 'Главная' },
   { to: '/school', txt: 'Школьник' },
   { to: '/festival', txt: 'Фестиваль' },
   { to: '/student', txt: 'Студент' },
   { to: '/news', txt: 'Новости' },
   { to: '/gallery', txt: 'Фото архив' },
   { to: '/documents', txt: 'Документы' },
]
</script>

<styles lang="scss">
.header-menu ul {
   @apply lg: (space-x-50px) md: (space-x-20px flex-row p-0) pt-30px flex-col justify-between flex uppercase font-bold;

   & span {
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
   }

   .router-link-active span::after {
      transform: translate3d(0, 0, 0);
   }
}
</styles>