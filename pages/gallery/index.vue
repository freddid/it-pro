<template>
   <section class="lg:pt-72px pt-62px md:pb-100px pb-60px">
      <div class="container flex flex-col items-center md:pt-100px pt-40px">
         <UiSubtitle>Галлерея</UiSubtitle>
         <h2 class="h2T md:mb-120px mb-80px">Фото архив</h2>
         <div class="grid w-full text-center md:(grid-cols-4 p-0 gap-80px) pl-20px gap-50px">
            <div @click="$router.push(`/gallery/${i}`)" v-for="(image, i) in useDataStore().gallery" :key="i"
               class="text-2xl cursor-pointer">
               <div class="relative mb-20px z-0">
                  <kinesis-container class=" h-200px">
                     <kinesis-element tag="img" class="w-full rounded-[20px] object-cover h-full " :src="image[0]"
                        :strength="10" type="depth" />
                     <kinesis-element tag="img" :src="image[1]" :strength="-10" type="rotate" transformOrigin="50% 400%"
                        axis="x" class="-z-2 top-0 left-0 object-cover rounded-[20px] w-full h-full absolute" />
                     <kinesis-element tag="img" :src="image[2]" :strength="10" type="rotate" transformOrigin="50% 400%"
                        axis="x" class="-z-1 top-0 left-0 object-cover rounded-[20px] w-full h-full absolute" />
                  </kinesis-container>
                  <!-- <img class="w-full object-cover lg:h-300px md:h-200px h-[50vw]" :src="image[0]" alt="">
                  <img class="w-full object-cover -z-1 -top-10px -left-10px absolute h-full" :src="image[1]" alt="">
                  <img class="w-full object-cover -z-2 -top-20px -left-20px absolute h-full" :src="image[2]" alt=""> -->
               </div>
               {{ i }}
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
</script>