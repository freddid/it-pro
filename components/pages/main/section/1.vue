<template>
   <section class="bg-1 bg-right sm:h-screen h-600px mnBg">
      <div class="container h-full flex overflow-hidden items-center justify-center">
         <div>
            <UiSubtitle> <span class="sm:inline hidden">ГГНТУ,</span> 9 Марта - 9 Апрель 2023
            </UiSubtitle>
            <!-- <div class="text-5xl uppercase">Школьная олимпиада</div> -->
            <UiTitle class="text-base uppercase my-10px sm:(text-[2vw] my-30px leading-13) w-[97%]"
               :title="student ? 'Студенческий проектный конкурс' : 'Школьная олимпиада'" />
            <UiTitle class="text-50px sm:text-[8vw]" title="IT_PRO" />
         </div>
      </div>
   </section>
</template>

<script setup>
const props = defineProps({
   student: Boolean
})
</script>