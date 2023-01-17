<template>
   <div @click.self="$emit('close')"
      class="bg-base-2/60 z-20 top-0 left-0 fixed w-screen h-screen flex justify-center items-center p-20px">
      <div class="p-30px bg-base-1 relative rounded-[5px] text-base-2">
         <div @click="$emit('close')" class="absolute top-15px right-15px text-3xl cursor-pointer">✖</div>
         <slot />
      </div>
   </div>
</template>