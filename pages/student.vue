<template>
   <PagesMainSection1 :student="true" />
   <PagesMainSection2 :student="true" data-aos="zoom-out-up" />
   <PagesMainSection3 :student="true" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" />
   <PagesMainSection4 :student="true" data-aos="zoom-out-up" data-aos-easing="linear" />
   <PagesMainSection5 :student="true" data-aos="zoom-out-up" data-aos-easing="ease-in-sine" />
   <PagesMainSection6 :student="true" data-aos="zoom-out-up" data-aos-easing="ease-in-sine" />
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