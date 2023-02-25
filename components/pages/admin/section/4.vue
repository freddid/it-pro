<template>
   <div>
      <div class="space-y-10px">
         <div class="bg-base-1 rounded-[5px] p-15px text-base-2 text-center">
            <h3 class="mb-15px text-lg">Выберите картинки и год для добовления нового фотоархив</h3>
            <form action="" class="flex justify-between items-center">
               <div class="input-file before:text-center h-150px w-300px">
                  <img class="h-full w-full object-cover" v-if="prevImg.pr1" :src="prevImg.pr1" alt="">
                  <input class="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer" required multiple
                     title="Нажмите для выбора картинки" ref="imgA" accept="image/png, image/jpeg" type="file"
                     @change="changeImg(imgA, 'pr1')" name="imgA" />
               </div>
               <input v-model="year" type="number" required placeholder="Введите год"
                  class="border-base-3 border-2 h-50px p-10px rounded-[5px] mx-10px">
               <button @click.prevent="addImg(year, imgA)" class="bg-base-3 p-10px rounded-[5px] disabled:opacity-40"
                  :disabled="actBtn">Добавить фотоархив</button>
            </form>
         </div>
         <div v-for="(item, i) in state.gallery" :key="i" class="bg-base-1 rounded-[5px]">
            <div class="flex w-full p-7px justify-between cursor-pointer text-base-2"
               @click="img = null, changeImg(img, 'pr2'), actGallery = actGallery != i ? i : false">
               <div class="flex items-center pl-10px text-20px">
                  {{ i }}
               </div>
               <div class="flex space-x-10px children:(cursor-pointer p-10px bg-base-3 rounded-[3px])">
                  <button class="disabled:opacity-40" :disabled="actBtn" @click="delGallery(i)">
                     <img src="@/assets/imgs/icons/del.png" alt="">
                  </button>
               </div>
            </div>
            <div class="p-10px border-t-4 text-base-2" v-if="actGallery === i">
               <form action="" class="grid grid-cols-[2fr,6fr] gap-30px">
                  <div class="input-file before:text-center h-150px">
                     <img class="h-full w-full object-cover" v-if="prevImg.pr2" :src="prevImg.pr2" alt="">
                     <input class="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer" required multiple
                        title="Нажмите для выбора картинки" ref="img" accept="image/png, image/jpeg" type="file"
                        @change="changeImg(img[0], 'pr2')" name="img" />
                  </div>
                  <div class="flex justify-between items-center">
                     выберите картинки что бы добаить в этот фотоархив
                     <button @click.prevent="addImg(i, img[0])" class="bg-base-3 p-10px rounded-[5px] disabled:opacity-40"
                        :disabled="actBtn">Добавить</button>
                  </div>
               </form>
               <div class="grid grid-cols-8 gap-5px mt-15px">
                  <div v-for="img in state.gallery[actGallery]" :key="img" class="min-img-gallery mnBg"
                     @click="delImg(img)" :style="{ backgroundImage: `url(${state.baseUrl}/${img})` }">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
const state = useDataStore()
await state.getGalleries()

const actGallery = ref(false)
const actBtn = ref(false)
const year = ref((new Date()).getFullYear())
const img = ref(null)
const imgA = ref(null)
const prevImg = ref({})
const changeImg = (el, pr) => prevImg.value[pr] = el ? URL.createObjectURL(el.files[0]) : null

const addImg = async (item, imgs) => {
   if (!imgs.files[0]) return alert('Выберите картинки')
   if (!item) return alert('Введите год')
   actBtn.value = true
   await state.addGallery({ 'year': item, files: imgs.files })
   actBtn.value = false
}

const delImg = async (url) => {
   if (confirm('Вы действительно хотите удалить эту картинку?')) await state.delImg(url)
}

const delGallery = async (i) => {
   if (confirm('Вы действительно хотите удалить этот фотоархив?')) await state.delGallery(i)
}
</script>

<style>
.min-img-gallery {
   @apply h-110px cursor-pointer relative before: (content-['Удалить'] transition-all opacity-0 flex justify-center items-center text-base-1 text-lg top-0 left-0 w-full h-full absolute bg-base-2/60) hover:(before:opacity-100);
}
</style>