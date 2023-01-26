<template lang="">
  <ui-modal @close="$emit('close')">
      <h3 class="text-center text-2xl mb-30px">
        {{ actNews == 'N' ? 'Добавление' : 'Изменение' }} новости
      </h3>
      <div class="flex lg:flex-row flex-col">
        <div class="lg:w-1/2">
          <label for="text">Содержание</label>
          <textarea
            required
            v-model="content"
            name="content"
            class="bg-base-3 border-2 rounded-[6px] w-full p-20px h-[30vh]"
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
          <div class="">
            <input
              required
              ref="img"
              accept="image/png, image/jpeg"
              placeholder="Изображение"
              type="file"
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
const img = ref(props.actNews.img ? props.actNews.img : null)

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
