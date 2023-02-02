<template>
   <section class="lg:pt-72px pt-62px">
      <div class="container flex flex-col items-center md:pt-100px pt-40px">
         <nuxt-link to="/gallery" class="text-base-3 text-11px mb-20px italic font-pres">
            &lt; Вернуться
         </nuxt-link>
         <h2 class="h2T md:mb-120px mb-50px">{{ useRoute().params.year }}</h2>
         <viewer :options="options" :images="useDataStore().gallery[useRoute().params.year]"
            class="viewer md:mb-100px mb-50px" ref="viewer">
            <template #default="scope">
               <div class="grid md:grid-cols-4 grid-cols-2 gap-10px">
                  <div v-for="src in scope.images" :key="src" class="overflow-hidden">
                     <img
                        class="w-full md:h-300px h-100px object-cover transform hover:scale-110 transition-all cursor-pointer"
                        :src="src">
                  </div>
               </div>
            </template>
         </viewer>
      </div>
   </section>
</template>
<script setup>
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from "v-viewer"

const options = {
   "movable": false, "toolbar": {
      prev: 2,
      zoomOut: 2,
      zoomIn: 2,
      next: 2,
   }, 'title': false, "rotatable": false, "scalable": false, "fullscreen": true, "keyboard": false,
}
</script>

<style>
.viewer-toolbar>ul>li {
   width: 60px;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 10px;
}

.viewer-toolbar>ul>li::before {
   transform: scale(1.5);
}

.viewer-backdrop {
   background: #000;
}
</style>