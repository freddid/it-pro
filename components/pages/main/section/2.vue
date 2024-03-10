<template>
   <section class="relative -top-15vh  sm:mb-50px mb-20px">
      <div class="container flex flex-col items-center items-start lg:flex-row">
         <div class="lg:(w-1/2 m-0) mb-40px">
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
                  <p class="sm:indent-lg indent-sm">Республиканский фестиваль цифровых технологий 2023</p>
                  <p class="sm:indent-lg indent-sm">Тема фестиваля «Национальная культура Чеченской республики и
                     современные технологии»</p>
                  <p class="sm:indent-lg indent-sm">Одному и тому же участнику разрешается участвовать одновременно во
                     всех
                     направлениях!</p>
                  <p class="sm:indent-lg indent-sm">Номинации конкурса:</p>
                  <ul class="pl-32px space-y-[10px]">
                     <li> 1. Категория: Видеоролик:
                        <div class="sm:text-base text-[13px] text-base-1/90 mt-5px">Отобразить чеченский язык/культуру с
                           помощью
                           графических программ.
                           Видео должно иметь сюжетную линию и элементы Motion-дизайна</div>
                     </li>
                     <li>2. Категория: Создание маскота ВУЗа:<div
                           class="sm:text-base text-[13px] text-base-1/90 mt-5px">
                           Создать на основе ассоциаций с брендом ГГНТУ талисман
                           университета, отражающий характер ВУЗа, основную идею, стремления, с использованием фирменных
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
               <div class="sm:(text-lg space-y-10px) space-y-7px text-[13px] leading-[unset]">
                  <p class="sm:indent-lg indent-sm">Основными целями и задачами всероссийской предметной олимпиады
                     «IT-PRO» по информатике и математике для студентов и школьников являются:</p>
                  <ul class="pl-32px">
                     <li>— выявление и развитие у обучающихся интеллектуальных способностей и интереса к проектной и
                        научно-исследовательской деятельности;</li>
                     <li>— содействие профессиональной ориентации школьников;</li>
                     <li>— совершенствование системы непрерывной профессиональной подготовки обучающихся по принципу:
                        Школа–СПО-.</li>
                  </ul>
                  <p class="sm:indent-lg indent-sm">
                     В олимпиаде принимают участие школьники 10-11 классов с разных регионов.
                  </p>
                  <p class="sm:indent-lg indent-sm">
                     Победители олимпиады получают +10 балла к поступлению с возможностью сохранения их на 1 год.
                  </p>
                  <p class="sm:indent-lg indent-sm">
                     Конкурс включает в себя 3 этапа - организационный, отборочный и заключительный, первые два из
                     которых
                     проводятся в заочной форме, а заключительный -в очной форме.
                  </p>
               </div>
            </div>
         </div>
         <kinesis-container
            class="relative ml-0 mr-60px lg:(ml-30px mr-60px justify-end w-1/2) children:rounded-[20px]">
            <kinesis-element tag="img" src="/block-2-1.jpg" :strength="10" type="depth" />
            <kinesis-element tag="img" src="/block-2-2.jpg" :strength="-10" type="depth_inv"
               class="absolute w-full h-full object-cover lg:(top-130px left-50px) top-40px left-40px" />
         </kinesis-container>
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