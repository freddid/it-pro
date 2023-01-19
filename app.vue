<template>
  <div class="bg-base-2 h-screen">
    <div class="bg-0 bg-base-2 text-base-1 bg-fixed">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Конкурс IT-Pro',
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ]
})
</script>