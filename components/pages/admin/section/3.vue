<template>
   <div>
      <div class="space-y-20px">
         <div class="flex justify-end">
            <button @click="actNews = 'N', title = '', content = ''"
               class="p-15px bg-base-3 rounded-[5px] text-base-2">Добавить
               новость</button>
         </div>
         <div v-for="item in state.getNewsObj" :key="item._id"
            class="flex w-full justify-between rounded-[5px] p-5px bg-base-1 text-base-2">
            <div class="flex items-center pl-20px text-20px">
               {{ item.title }}
            </div>
            <div class="flex space-x-10px children:(cursor-pointer p-10px bg-base-3 rounded-[3px])">
               <button @click="actNews = item">
                  <img src="@/assets/imgs/icons/edit.png" alt="">
               </button>
               <button class="disabled:opacity-40" :disabled="actBtn" @click="del(item)">
                  <img src="@/assets/imgs/icons/del.png" alt="">
               </button>
            </div>
         </div>
         <transition name="blocks">
            <pages-admin-form-news @close="actNews = ''" v-if="actNews" :act-news="actNews" />
         </transition>
      </div>
   </div>
</template>
<script setup>
await useDataStore().getNews()
const state = useDataStore()
const actNews = ref('')
const actBtn = ref(false)

const del = async item => {
   await state.changeNews({ url: 'deleteNews', data: [{ 'id': item._id }] })
}
</script>