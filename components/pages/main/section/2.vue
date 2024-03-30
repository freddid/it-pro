<template>
   <section class="relative -top-15vh  sm:mb-50px mb-20px">
      <div class="container">
         <div class="flex flex-col items-center items-start lg:flex-row">
            <div class="lg:(w-[70%] m-0) mb-40px">
               <UiSubtitle>О Конкурсе</UiSubtitle>
               <div v-if="student">
                  <h2 class="h2T mb-30px">«IT-Pro» <br> Студенты</h2>
                  <div class="sm:(text-lg space-y-10px) space-y-7px text-[13px] leading-[unset]">
                     <p class="sm:indent-lg indent-sm">Рады объявить начало 1 этапа IT-pro для первокурсников и учащихся
                        10-11
                        классов!</p>
                     <p class="sm:indent-lg indent-sm">Первый этап называется «Обучение проектной деятельности» и будет
                        проходить в 3 дня</p>
                     <p class="sm:indent-lg indent-sm">27, 28, 29 апреля участники будут активно вовлечены в процесс
                        обучения,
                        где им предстоит усвоить много интересной информации, а также применить ее на практике</p>
                     <p class="sm:indent-lg indent-sm">Ребят поэтапно научат:</p>
                     <ul class="pl-32px">
                        <li>— Развивать идею;</li>
                        <li>— Определять проблему;</li>
                        <li>— Находить решение этой проблемы;</li>
                        <li>— Представлять решение в виде доклада;</li>
                        <li>— Эффектно защищать доклад в форме презентации.</li>
                     </ul>
                  </div>
               </div>
               <div v-else-if="festival">
                  <h2 class="h2T mb-30px">«IT-Pro» <br> Фестиваль</h2>
                  <div class="sm:(text-lg space-y-10px) space-y-7px text-[13px] leading-[unset]">
                     <p class="sm:indent-lg indent-sm">Республиканский фестиваль цифровых технологий 2024</p>
                     <p class="sm:indent-lg indent-sm">Тема фестиваля «Национальная культура Чеченской республики и
                        современные технологии»</p>
                     <p class="sm:indent-lg indent-sm">Одному и тому же участнику разрешается участвовать одновременно
                        во
                        всех
                        направлениях!</p>
                     <p class="sm:indent-lg indent-sm">Номинации конкурса:</p>
                     <ul class="pl-32px space-y-[10px]">
                        <li> 1. Категория: Видеоролик:
                           <div class="sm:text-base text-[13px] text-base-1/90 mt-5px">Отобразить чеченский
                              язык/культуру с
                              помощью
                              графических программ.
                              Видео должно иметь сюжетную линию и элементы Motion-дизайна</div>
                        </li>
                        <li>2. Категория: Создание маскота ВУЗа:<div
                              class="sm:text-base text-[13px] text-base-1/90 mt-5px">
                              Создать на основе ассоциаций с брендом ГГНТУ талисман
                              университета, отражающий характер ВУЗа, основную идею, стремления, с использованием
                              фирменных
                              цветов (можно ознакомиться на сайте ГГНТУ)</div>
                        </li>
                        <li>3. Категория: Создание превью:<div class="sm:text-base text-[13px] text-base-1/90 mt-5px">
                              Анимировать логотип университета или факультета в качестве
                              превью/интро, которое также может быть использовано в видеоматериалах в качестве плашки.
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div v-else>
                  <h2 class="h2T mb-30px">«IT-Pro»</h2>
                  <div class="sm:(text-[19px] leading-7 space-y-16px) space-y-7px text-[13px] leading-[unset]">
                     <p class="sm:indent-lg indent-sm">Всероссийская предметная олипиада «IT-PRO» по информатике и
                        математике для
                        студентов ВУЗов и колледжей, а также шклольников <span class="text-base-3 text-2xl">10 - 11
                           классов</span></p>
                     <p class="sm:indent-lg indent-sm">
                        Призеры олимпиады получают допольнительные <br> <span class="text-base-3 text-2xl">10 баллов к
                           сумме конкурсных баллов ЕГЭ</span>.
                     </p>
                     <p class="sm:indent-lg indent-sm">
                        Конкурс проходит в два этапа:
                     <ul>
                        <li class="text-base-3 text-2xl">- Отборочный</li>
                        <li class="text-base-3 text-2xl">- Заключительный</li>
                     </ul>
                     </p>
                  </div>
               </div>
            </div>
            <kinesis-container
               class="relative ml-0 mr-60px lg:(ml-30px mr-60px justify-end w-1/2) children:rounded-[20px]">
               <kinesis-element tag="img" src="/block-2-1.jpg" :strength="10" type="depth" />
               <kinesis-element tag="img" src="/block-2-2.jpg" :strength="-10" type="depth_inv"
                  class="absolute w-full h-full object-cover lg:(top-60px left-50px) top-40px left-40px" />
            </kinesis-container>
         </div>
         <div class="mt-100px grid grid-cols-3 text-center">
            <div class="">
               <h4 class="text-2xl text-base-3 mb-15px">Школьники</h4>
               <ul class="flex children:px-10px justify-center text-xl">
                  <li class="border-r">10 кл</li>
                  <li>11 кл</li>
               </ul>
            </div>
            <div class="">
               <h4 class="text-2xl text-base-3 mb-15px">Студенты ВУЗов</h4>
               <ul class="flex justify-center text-xl children:px-10px">
                  <li class="border-r">1 курс</li>
                  <li>2 курс</li>
               </ul>
            </div>
            <div class="">
               <h4 class="text-2xl text-base-3 mb-15px">Студенты колледжей</h4>
               <ul class="flex children:px-10px justify-center text-xl">
                  <li>Выпускной курс</li>
               </ul>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
const props = defineProps({
   student: Boolean,
   festival: Boolean
})
</script>