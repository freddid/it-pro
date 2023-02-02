<template lang="">
  <ui-modal @close="$emit('close')">
      <h3 class="text-center text-2xl mb-30px">
        {{ actNews == 'N' ? 'Добавление' : 'Изменение' }} новости
      </h3>
      <div class="flex lg:flex-row flex-col">
        <div class="lg:w-1/2 flex flex-col">
          <label for="text">Содержание</label>
          <textarea
            required
            v-model="content"
            name="content"
            class="bg-base-3 border-2 rounded-[6px] w-full p-20px flex-grow"
            placeholder="Содержание"
          ></textarea>
        </div>
        <div class="lg:(ml-20px w-1/2) flex flex-col justify-between">
          <div class="">
            <label for="title">Заголово</label>
            <input
              required
              v-model="title"
              class="w-full bg-base-3 border-2 rounded-[6px] p-10px"
              placeholder="Заголовок"
              type="text"
              name="title"
            />
          </div>
          <div class="input-file">
            <img class="h-full w-full object-cover" v-if="prevImg || !img" :src="prevImg" alt="">
            <input
              class="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
              required
              title="Нажмите для выбора картинки"
              ref="img"
              accept="image/png, image/jpeg"
              type="file"
              @change="changeImg"
              name="img"
            />
          </div>
          <button
            @click="changeNews"
            class="bg-base-2 text-base-1 rounded-[5px] p-10px lg:mt-0 mt-30px"
          >
            {{ actNews == 'N' ? 'Добавить' : 'Изменить' }}
          </button>
        </div>
      </div>
  </ui-modal>
</template>
<script setup>
const emit = defineEmits(['close'])
const props = defineProps({
  actNews: [String, Object]
})

const state = useDataStore()
const content = ref(props.actNews.content ? props.actNews.content : '')
const title = ref(props.actNews.title ? props.actNews.title : '')
const img = ref(null)
const prevImg = ref(props.actNews.img ? `${useDataStore().baseUrl}/${props.actNews.img}` : null)
const changeImg = () => prevImg.value = URL.createObjectURL(img.value.files[0])

const changeNews = async () => {
  if (!(content.value && title.value)) return
  const data = [{ content: content.value, title: title.value }]

  if (props.actNews == 'N') {
    if (!img.value.files[0]) return
    data.push(img.value.files[0])
    await state.changeNews({ url: 'addNews', data })
  } else {
    data[0].id = props.actNews._id
    img.value.files[0]
      ? data.push(img.value.files[0])
      : (data[0].img = props.actNews.img)
    await state.changeNews({ url: 'updateNews', data })
  }
  emit('close')
}
</script>

<style scoped lang="scss">
.input-file {
  @apply h-300px my-10px relative hover: before:bg-opacity-70;

  &:before {
    content: 'Выберите картинку';
    @apply flex justify-center transition-all items-center text-base-1 text-4xl absolute top-0 left-0 bg-base-2/40 w-full h-full;
  }
}
</style>