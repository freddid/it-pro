<template>
   <div>
      <div class="title-container">
         <div class="glitch" data-text="IT_PRO">IT_PRO</div>
         <div class="glow">IT-PRO</div>
      </div>
      <div class="scanlines"></div>
   </div>
</template>
<script>
</script>
<style lang="scss">
.title-container {
   position: relative;
}

.glitch {
   @apply text-base-1 text-40px sm: text-[8vw] relative font-pres font-bold;
   animation: glitch 5s 5s infinite;
}

.glitch::before {
   content: attr(data-text);
   position: absolute;
   left: -2px;
   text-shadow: -5px 0 rgb(104 104 104);
   background: transparent;
   overflow: hidden;
   top: 0;
   animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
}

.glitch::after {
   content: attr(data-text);
   position: absolute;
   left: 2px;
   text-shadow: -5px 0 #53f6c6;
   background: transparent;
   overflow: hidden;
   top: 0;
   animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
}

@keyframes glitch {
   1% {
      transform: rotateX(10deg) skewX(90deg);
   }

   2% {
      transform: rotateX(0deg) skewX(0deg);
   }
}

@keyframes noise-1 {
   $steps: 30;

   @for $i from 1 through $steps {
      #{percentage($i*(1/$steps))} {
         $top: random(100);
         $bottom: random(101 - $top);
         clip-path: inset(#{$top}px 0 #{$bottom}px 0);
      }
   }
}

@keyframes noise-2 {
   $steps: 30;

   @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
         $top: random(100);
         $bottom: random(101 - $top);
         clip-path: inset(#{$top}px 0 #{$bottom}px 0);
      }
   }
}

.scanlines {
   overflow: hidden;
   mix-blend-mode: difference;
}



@keyframes fudge {
   from {
      transform: translate(0px, 0px);
   }

   to {
      transform: translate(0px, 2%);
   }
}

.glow {
   @extend .glitch;
   text-shadow: 0 0 1000px #ffffff;
   color: transparent;
   position: absolute;
   top: 0;
}

.subtitle {
   font-family: Arial, Helvetica, sans-serif;
   font-weight: 100;
   font-size: .8vw;
   color: rgba(165, 141, 141, .4);
   text-transform: uppercase;
   letter-spacing: 1em;
   text-align: center;
   position: absolute;
   left: 17%;
   animation: glitch-2 5s 5.02s infinite;
}

@keyframes glitch-2 {
   1% {
      transform: rotateX(10deg) skewX(70deg);
   }

   2% {
      transform: rotateX(0deg) skewX(0deg);
   }
}
</style>
