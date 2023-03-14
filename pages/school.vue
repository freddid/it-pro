<template>
   <PagesMainSection1 />
   <PagesMainSection2 data-aos="zoom-out-up" />
   <div data-aos="zoom-out-up" data-aos-easing="ease-out-cubic">
      <PagesMainSection3 />
      <PagesMainSection4 />
      <PagesMainSection5 />
   </div>
   <PagesMainSection6 data-aos="zoom-out-up" data-aos-easing="ease-in-sine" />
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