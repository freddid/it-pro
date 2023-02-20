<template>
   <section class="lg:pt-72px pt-62px md:pb-100px pb-60px overflow-hidden">
      <div class="container flex flex-col items-center md:pt-100px pt-40px">
         <UiSubtitle>Галлерея</UiSubtitle>
         <h2 class="h2T md:mb-120px mb-80px">Фото архив</h2>
         <div class="grid w-full text-center md:(grid-cols-4 p-0 gap-80px) pl-20px gap-50px">
            <div @click="$router.push(`/gallery/${i}`)" v-for="(image, i) in state.gallery" :key="i"
               class="text-2xl cursor-pointer">
               <div class="relative mb-20px z-0 hover:z-10">
                  <kinesis-container class=" h-200px md:w-auto w-4/5 m-auto">
                     <kinesis-element tag="img" class="w-full rounded-[20px] object-cover h-full"
                        :src="`${state.baseUrl}/${image[0]}`" :strength="strength" type="depth" />
                     <kinesis-element tag="img" :src="`${state.baseUrl}/${image[1]}`" :strength="-strength" type="rotate"
                        :transformOrigin="trSize" axis="x"
                        class="-z-2 top-0 left-0 object-cover rounded-[20px] w-full h-full absolute" />
                     <kinesis-element tag="img" :src="`${state.baseUrl}/${image[2]}`" :strength="strength" type="rotate"
                        :transformOrigin="trSize" axis="x"
                        class="-z-1 top-0 left-0 object-cover rounded-[20px] w-full h-full absolute" />
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
const state = useDataStore()
await state.getGalleries()

const trSize = ref("50% 400%")
const strength = ref(10)

if (process.client) {
   if (window.innerWidth < 500) {
      trSize.value = "50% 100%"
      strength.value = 5
   }
}
</script>