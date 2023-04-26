<template>
   <PagesMainSection1 title="Фестиваль цифровых технологий" />
   <PagesMainSection2 :festival="true" data-aos="zoom-out-up" />
   <PagesMainSection2-5 :festival="true" data-aos="zoom-out-up" />
   <PagesMainSection3 :festival="true" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" />
   <PagesMainSection4 :festival="true" data-aos="zoom-out-up" data-aos-easing="linear" />
   <PagesMainSection5 :festival="true" data-aos="zoom-out-up" data-aos-easing="ease-in-sine" />
   <PagesMainSection6 :festival="true" data-aos="zoom-out-up" data-aos-easing="ease-in-sine" />
</template>

<script setup>
import 'aos/dist/aos.css'
import AOS from "aos";

onMounted(() => {
   AOS.init({
      offset: 220,
      delay: 0,
      duration: 400,
      easing: 'linear',
      once: false,
      anchorPlacement: 'center-center',
   })
})
</script>