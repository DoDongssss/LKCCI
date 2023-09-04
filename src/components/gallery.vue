<template>
   <section class="flex flex-col py-12">
      <div class="relative flex items-center">
         <h1 class="text-3xl font-[900] text-[#020066]">GALLERY</h1>
      </div>
      <div
         class="mt-12 flex items-center justify-center rounded-lg border border-gray-100 bg-white p-6 shadow-md"
      >
         <silent-box
            :gallery="gallery"
            class="flex flex-wrap gap-3 overflow-hidden"
         >
         </silent-box>
      </div>

      <!-- <div class="mt-12">
         <swiper
            :modules="modules"
            :slides-per-view="3"
            navigation
            :space-between="20"
            :loop="true"
            :pagination="{ clickable: true }"
            :autoplay="{
               delay: 7000,
               disableOnInteraction: false,
               pauseOnMouseEnter: true,
            }"
            @swiper="onSwiper"
         >
            <swiper-slide v-for="item in gallery" :key="item.src">
               <img loading="lazy" :src="item.src" alt="" />
               <h1>{{ item.description }}</h1></swiper-slide
            >
            ...<button class="btn" @click="useswiper.slideNext()">next</button>
         </swiper>
      </div> -->
   </section>
</template>

<script>
import { ref } from "vue"
import { EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules"
import { useSwiper } from "swiper/vue"
export default {
   components: {
      Swiper,
      SwiperSlide,
      EffectCards,
   },
   setup() {
      const gallery = [
         {
            src: "/images/about1.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         {
            src: "/images/content_bg.jpg",
            description: "Sunken dreams II. by Arbebuk",
         },
         // {
         //    src: "/images/content_bg.jpg",
         //    description: "Sunken dreams II. by Arbebuk",
         // },
      ]

      const onSwiper = (swiper) => {
         console.log(swiper)
      }

      return {
         gallery,
         onSwiper,
         EffectCards,
         modules: [Autoplay, Pagination, Navigation, A11y],
      }
   },
}
</script>

<style>
.silentbox-item {
   flex: 1 1 0%;
   min-width: 150px !important;
   border-radius: 3px;
   overflow: hidden;
}
.silentbox-item img {
   height: 100% !important;
   width: 100% !important;
}
</style>
