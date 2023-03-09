<template>
   <section class="bg-1 bg-right sm:h-screen h-600px mnBg">
      <div class="container h-full flex overflow-hidden items-center justify-center">
         <div>
            <UiTitle class="text-50px sm:(text-[8vw] mb-40px) mb-20px" title="IT_PRO" />
            <div class="sm:text-3xl text-xl">Проектный конкурс в области цифровых технологий
               для студентов и школьников
            </div>
            <div class="flex justify-between max-w-[800px] mx-auto sm:mt-70px mt-40px">
               <nuxt-link to="/school"><button class="button-49 school" role="button">ШКОЛЬНИК</button></nuxt-link>
               <nuxt-link to="/student"><button class="button-49 student" role="button">СТУДЕНТ</button></nuxt-link>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
.button-49,
.button-49:after {
   width: 245px;
   font-size: 30px;
   text-align: center;
   background: #282828;
   padding: 30px 0;
   border: 1px solid;
   color: #fff;
   letter-spacing: 3px;
   box-shadow: 8px 7px 0px #53f6c6;
   outline: transparent;
   position: relative;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
}

.button-49.school {
   box-shadow: -8px 7px 0px #ffffff;
   background: #53f6c6;
   color: #282828;
}

.button-49.school:after {
   content: 'ШКОЛЬНИК';
   box-shadow: -6px 0px 0px #ffffff;
   color: #282828;
   background: linear-gradient(315deg, transparent 3%, #53f6c6 3%, #53f6c6 5%, #fff 5%);
   text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #53f6c6;
}

.button-49.student:after {
   content: 'СТУДЕНТ';
}

.button-49:after {
   --slice-0: inset(50% 50% 50% 50%);
   --slice-1: inset(80% -6px 0 0);
   --slice-2: inset(50% -6px 30% 0);
   --slice-3: inset(10% -6px 85% 0);
   --slice-4: inset(40% -6px 43% 0);
   --slice-5: inset(80% -6px 5% 0);

   display: block;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(45deg, transparent 3%, #282828 3%, #282828 5%, #53f6c6 5%);
   text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #282828;
   clip-path: var(--slice-0);
}

.button-49:hover:after {
   animation: 2s glitch;
   animation-timing-function: steps(2, end);
}

@keyframes glitch {
   0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
   }

   10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
   }

   20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
   }

   30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
   }

   40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
   }

   50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
   }

   60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
   }

   70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
   }

   80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
   }

   90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
   }

   100% {
      clip-path: var(--slice-1);
      transform: translate(0);
   }
}

@media(max-width:576px) {

   .button-49,
   .button-49:after {
      width: 160px;
      font-size: 18px;
      padding: 10px 0;
      box-shadow: -4px 5px 0px #53f6c6;
   }

   .button-49.school {
      box-shadow: -4px 5px 0px #ffffff;
   }
}
</style>