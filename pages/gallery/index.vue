<template>
   <section class="lg:pt-72px pt-62px md:pb-100px pb-60px">
      <div class="container flex flex-col items-center md:pt-100px pt-40px">
         <UiSubtitle>Галлерея</UiSubtitle>
         <h2 class="h2T md:mb-120px mb-80px">Фото архив</h2>
         <div class="grid w-full text-center md:(grid-cols-3 p-0 gap-80px) pl-20px gap-50px">
            <div @click="$router.push(`/gallery/${i}`)" v-for="(image, i) in images" :key="i"
               class="text-2xl cursor-pointer transition-all hover:opacity-70">
               <div class="relative mb-20px z-0">
                  <img class="w-full object-cover lg:h-300px md:h-200px h-[50vw]" :src="image[0]" alt="">
                  <img class="w-full object-cover -z-1 -top-10px -left-10px absolute h-full" :src="image[1]" alt="">
                  <img class="w-full object-cover -z-2 -top-20px -left-20px absolute h-full" :src="image[2]" alt="">
               </div>
               {{ i }}
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const images = {
   2020: ["https://picsum.photos/200/200",
      "https://picsum.photos/300/300",
      "https://picsum.photos/400/200",
      "https://picsum.photos/400/300",
      "https://picsum.photos/300/200",
      "https://picsum.photos/400/200",],
   2021: ["https://picsum.photos/200/200",
      "https://picsum.photos/300/300",
      "https://picsum.photos/400/200",
      "https://picsum.photos/400/300",
      "https://picsum.photos/300/200",
      "https://picsum.photos/400/200",],
   2022: ["https://picsum.photos/200/200",
      "https://picsum.photos/300/300",
      "https://picsum.photos/400/200",
      "https://picsum.photos/400/300",
      "https://picsum.photos/300/200",
      "https://picsum.photos/400/200",],
}
</script>