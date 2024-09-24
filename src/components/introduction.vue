<template>
   <section
      class="relative h-screen bg-[url('/images/content_bg.jpg')] bg-cover bg-center"
      :class="scrollPos >= 150 ? 'mt-[80px]' : ''"
   >
      <div
         class="z-[9999] flex h-full w-full flex-col items-center justify-center"
      >
         <h1 class="text-lg font-[300] text-white lg:text-[40px]">
            LIBERTAD KIDDIE CARE CENTER INC.
         </h1>
         <div
            class="content_wrapper mt-6 flex flex-row gap-6 text-center text-6xl font-[900] lg:text-8xl"
         >
            <h1>
               TRUTH <span class="hidden md:inline-block">·</span> FAITH
               <span class="hidden lg:inline-block">·</span>
               SERVICE
            </h1>
         </div>
         <div class="z-[2] mt-12 lg:mt-[85px]">
            <button
               class="lg:text-md rounded-sm border-2 border-[#fd0002] bg-[#fd0002] px-4 py-2 text-sm text-white transition-all duration-300 ease-linear hover:bg-transparent lg:px-8 lg:py-3"
            >
               <a href="" class="font-semibold">LEARN MORE</a>
            </button>
            <button
               class="lg:text-md ml-6 rounded-sm border-2 border-[#fd0002] px-4 py-2 text-sm text-white transition-all duration-300 ease-linear hover:bg-[#fd0002] lg:px-8 lg:py-3"
            >
               <a href="" class="font-semibold">CONTACT US</a>
            </button>
         </div>
      </div>
      <div class="mask"></div>
   </section>
</template>

<script>
export default {
   props: {
      scrollPos: Number,
   },
   setup() {
      return {}
   },
}
</script>

<style scoped>
.content_wrapper {
   background-image: url("/images/content_bg.jpg"); /* Replace 'your-image.jpg' with your image path */
   background-clip: text;
   color: transparent;
   background-size: cover; /* Adjust the background size as needed */
   display: inline-block; /* To make the background cover the text */
   -webkit-text-stroke: 1.5px #fff; /* WebKit browsers (Safari) */
   text-stroke: 1.5px #fff;
   z-index: 2;
}

section .mask {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1;
   background: linear-gradient(
      180deg,
      rgba(3, 15, 0, 0) 0%,
      rgba(2, 10, 0, 0) 0%,
      #020a00 100%
   );
}
</style>
