<template>
   <section class=" sm:mb-250px mb-80px">
      <div class="container">
         <div class="mb-40px lg:mb-0">
            <UiSubtitle>Регистрация</UiSubtitle>
            <h2 class="h2T">Заполните форму регистрации</h2>
         </div>
         <a :href="student ? 'https://forms.gle/zFyk3xK5CUdZLU4b9' : festival ? 'https://forms.gle/e1WtmFDpxoU7nMjw7' : 'https://forms.gle/r6hbbjU4xRniCNid7'"
            target="_blank" class="flex justify-center sm:mt-80px mt-50px">
            <button class="button-57" role="button"><span class="text">
                  Форма регистрации!
               </span><span>Перейти!</span>
            </button>
         </a>
      </div>
   </section>
   <section class="sm:mb-250px mb-80px">
      <div class="container">
         <div class="mb-40px lg:mb-0">
            <UiSubtitle>Пройдите тестирование, 20 марта - 10 апреля</UiSubtitle>
            <h2 class="h2T">Тестирование</h2>
         </div>
         <div class="flex justify-center sm:mt-80px mt-50px gap-40px md:flex-row flex-col items-center">
            <a v-for="url in urls" :key="url" :href="url.url" target="_blank">
               <button class="button-57" role="button"><span class="text">
                     {{ url.txt }}
                  </span><span>Перейти!</span>
               </button>
            </a>
         </div>
      </div>
   </section>
</template>
<script setup>
const props = defineProps({
   student: Boolean,
   festival: Boolean
})

const urls = [
   { txt: 'Информатика', url: 'https://forms.gle/ASTFh9Q6Q278K7sp6' },
   { txt: 'Математика', url: 'https://forms.gle/5WcoheyXaRvcPvQw6' },
]
</script>

<style>
.button-57 {
   position: relative;
   overflow: hidden;
   box-shadow: 0 0 20px 0px #fff;
   color: #18181a;
   display: inline-block;
   font-size: 24px;
   line-height: 15px;
   text-transform: uppercase;
   padding: 30px;
   text-decoration: none;
   cursor: pointer;
   background: #fff;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
}

.button-57 span:first-child {
   position: relative;
   transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
   z-index: 10;
}

.button-57 span:last-child {
   color: #fff;
   display: block;
   position: absolute;
   bottom: 0;
   transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
   z-index: 100;
   opacity: 0;
   top: 50%;
   left: 50%;
   transform: translateY(225%) translateX(-50%);
   height: 14px;
   line-height: 13px;
}

.button-57:after {
   content: "";
   position: absolute;
   bottom: -40%;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: #53f6c6;
   transform-origin: bottom center;
   transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
   transform: skewY(9.3deg) scaleY(0);
   z-index: 50;
}

.button-57:hover {

   box-shadow: 0 0 20px 0px #53f6c6;
}

.button-57:hover:after {
   transform-origin: bottom center;
   transform: skewY(9.3deg) scaleY(2);
}

.button-57:hover span:last-child {
   transform: translateX(-50%) translateY(-100%);
   opacity: 1;
   transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
}

@media(max-width:576px) {

   .button-57 {
      font-size: 20px;
      padding: 20px 25px;
   }
}
</style>