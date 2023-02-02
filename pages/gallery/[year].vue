<template>
   <section class="lg:pt-72px pt-62px">
      <div class="container flex flex-col items-center md:pt-100px pt-40px">
         <UiSubtitle>Галлерея</UiSubtitle>
         <h2 class="h2T md:mb-120px mb-50px">{{ useRoute().params.year }}</h2>
         <viewer :options="options" :images="images[useRoute().params.year]" class="viewer md:mb-100px mb-50px"
            ref="viewer">
            <template #default="scope">
               <div class="grid md:(grid-cols-4 gap-20px) grid-cols-2 gap-10px">
                  <img v-for="src in scope.images" class="w-full md:h-300px h-100px object-cover" :src="src" :key="src">
               </div>
            </template>
         </viewer>
      </div>
   </section>
</template>
<script setup>
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from "v-viewer"
const images = {
   2022: ["https://picsum.photos/200/200",
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
   2020: ["https://picsum.photos/200/200",
      "https://picsum.photos/300/300",
      "https://picsum.photos/400/200",
      "https://picsum.photos/400/300",
      "https://picsum.photos/300/200",
      "https://picsum.photos/400/200",],
}

const options = { "movable": false, 'title': false, "rotatable": false, "scalable": false, "fullscreen": true, "keyboard": false, }
</script>