<template>
   <section class="relative -top-15vh  sm:mb-50px mb-50px">
      <div class="container flex flex-col items-start lg:flex-row">
         <div class="lg:(w-1/2 m-0) mb-40px">
            <UiSubtitle>О Конкурсе</UiSubtitle>
            <h2 class="h2T mb-30px">«IT-Pro»</h2>
            <div class="sm:text-lg">
               <p class="indent-lg">Основными целями и задачами конкурса совместных проектных работ школьников
                  и студентов «IT-Pro» в области цифровых технологий являются:</p>

               <ul class="my-10px pl-32px">
                  <li>— выявление и развитие у обучающихся интеллектуальных способностей и интереса к проектной и
                     научно-исследовательской деятельности;</li>
                  <li>— содействие профессиональной ориентации школьников;</li>
                  <li>— совершенствование системы непрерывной профессиональной подготовки обучающихся по принципу: Школа–
                     СПО-Вуз.</li>
               </ul>
               <p class="indent-lg">
                  В конкурсе на добровольной основе принимают участие студенты и школьники, прошедшие регистрацию.
                  Участники
                  представляет на Конкурс групповой проект (в команде не более 4 человек).
               </p>
            </div>
         </div>
         <kinesis-container class="relative ml-0 mr-60px lg:(ml-30px mr-60px justify-end w-1/2) children:rounded-[20px]">
            <kinesis-element tag="img" src="/block-2-1.jpg" :strength="10" type="depth" />
            <kinesis-element tag="img" src="/block-2-2.jpg" :strength="-10" type="depth_inv"
               class="absolute w-full h-full object-cover lg:(top-130px left-50px) top-40px left-40px" />
         </kinesis-container>
      </div>
   </section>
</template>
<script setup>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
</script>