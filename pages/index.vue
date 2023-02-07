<template>
   <PagesMainSection1 />
   <PagesMainSection2 data-aos="zoom-out-up" />
   <PagesMainSection3 data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" />
   <PagesMainSection4 data-aos="zoom-out-up" data-aos-easing="linear" />
   <PagesMainSection5 data-aos="zoom-out-up" data-aos-easing="ease-in-sine" />
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