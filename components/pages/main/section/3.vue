<template>
  <section class="sm:mb-150px mb-40px">
    <div class="container">
      <div class="mb-40px lg:mb-0">
        <UiSubtitle>Этапы</UiSubtitle>
        <h2 class="h2T">Даты проведения</h2>
      </div>
      <div
        class="grid grid-cols-1 sm:(flex-row grid-cols-3 mt-60px) mt-40px flex-col"
      >
        <div
          v-for="date in dates"
          :key="date[0]"
          class="text-center sm:(border-t-0 border-l) border-t first:border-none p-20px"
        >
          <span class="text-2xl text-base-3 font-bold" v-if="date[0]">
            {{ date[0] }}</span
          >
          <div class="ml-20px mt-10px">
            <div class="sm:text-xl">{{ date[1][0] }}</div>
            <div class="mt-10px sm:text-base text-[13px] text-base-1/90">
              {{ date[1][1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  student: Boolean,
  festival: Boolean
})
const dates = props.student
  ? [
      [
        '11 май',
        [
          'Встреча с профессионалами',
          'Для участников проведут лекцию специалисты в различных областях. '
        ]
      ],
      [
        '12 май',
        ['Мастер-класс', 'Участники смогут получить ценные рекомендации.']
      ],
      [
        '13 май',
        [
          'Работа над проектами и их защита',
          'Участникам будут предоставлены кейсы проектов, с которыми им предстоит работать, а затем защитить свою работу перед экспертами.'
        ]
      ]
    ]
  : props.festival
  ? [
      ['', []],
      ['С 18 по 20 мая  2024', ['пр. Исаева, 100, ГУК']],
      ['', []]
    ]
  : [
      ['Регистрация', ['15 Марта - 19 Апреля']],
      ['I тур', ['20 марта - 19 Апреля, онлайн тестирование']],
      ['II тур', ['20 апреля в 11.00, очно для всех полуфиналистов']]
    ]
</script>
