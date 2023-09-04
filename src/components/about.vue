<template>
   <section class="0 flex flex-col">
      <div class="relative flex items-center">
         <h1 class="text-3xl font-[900] text-[#020066]">ABOUT</h1>
      </div>
      <div class="flex">
         <div class="w-1/2 min-w-[400px] flex-1">
            <h2 class="mt-8 text-2xl font-bold text-[#fd0002]">
               Lorem ipsum dolor sit amet consectetur
            </h2>
            <p class="mt-5 text-justify text-[16px]">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Consequatur blanditiis aliquid hic temporibus ullam dolores
               cumque suscipit ratione dignissimos commodi repellendus doloribus
               sint at veritatis a, praesentium id non ducimus sed voluptate
               distinctio ea. Deleniti ratione dolorem quia obcaecati earum,
               necessitatibus modi numquam repellendus architecto eos iure
               quisquam neque quis provident consequatur minima ipsam incidunt.
               Quaerat maiores nihil, iusto necessitatibus laboriosam illo
               dolores exercitationem ad, voluptatum facilis repudiandae placeat
               distinctio porro, soluta totam delectus cum!
            </p>
            <a href="#" class="link_wrapper group mt-[50px] flex items-center">
               <span
                  class="text-sm font-semibold transition-colors duration-300 group-hover:text-[#FFB300]"
                  >DISCOVER MORE</span
               >
               <svg
                  width="60"
                  height="28"
                  viewBox="0 0 52 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-3 transition-transform duration-300 ease-in-out group-hover:translate-x-4"
               >
                  <path
                     d="M40.4243 15.4243C40.6586 15.1899 40.6586 14.8101 40.4243 14.5757L36.6059 10.7574C36.3716 10.523 35.9917 10.523 35.7574 10.7574C35.523 10.9917 35.523 11.3716 35.7574 11.6059L39.1515 15L35.7574 18.3941C35.523 18.6284 35.523 19.0083 35.7574 19.2426C35.9917 19.477 36.3716 19.477 36.6059 19.2426L40.4243 15.4243ZM0 15.6H40V14.4H0V15.6Z"
                     fill="#FFB300"
                  ></path>
                  <!-- <circle cx="37" cy="15" r="15" fill="#FFB300"/> -->
                  <circle
                     cx="37"
                     cy="15"
                     r="14.4"
                     stroke="#FFB300"
                     stroke-width="1.2"
                  ></circle>
                  <path
                     d="M40.4243 15.4243C40.6586 15.19 40.6586 14.8101 40.4243 14.5757L36.6059 10.7574C36.3716 10.523 35.9917 10.523 35.7574 10.7574C35.523 10.9917 35.523 11.3716 35.7574 11.6059L39.1515 15L35.7574 18.3941C35.523 18.6284 35.523 19.0083 35.7574 19.2426C35.9917 19.477 36.3716 19.477 36.6059 19.2426L40.4243 15.4243ZM22 15.6L40 15.6L40 14.4L22 14.4L22 15.6Z"
                     fill="#FFB300"
                  ></path>
               </svg>
            </a>
         </div>
         <div
            class="flex w-1/2 min-w-[400px] flex-1 items-center justify-center rounded-md p-6"
         >
            <!-- <img
               :src="selectedImg"
               alt=""
               class="h-[calc(100%-200px)] w-full rounded-md border border-[#020066] shadow-md"
            />
            <div class="mt-6 flex h-[100px] w-full gap-6 overflow-hidden">
               <div
                  v-for="(items, index) in images"
                  class="h-full w-[calc((100%/3)-8px)]"
               >
                  <img
                     @click="changeSelected(index)"
                     :src="items.src"
                     alt=""
                     class="h-full w-full cursor-pointer rounded-sm border-[#fd0002] transition-all duration-200 ease-linear"
                     :class="
                        items.src === selectedImg
                           ? ' border-2 shadow-lg'
                           : 'scale-[.9]'
                     "
                  />
               </div>
            </div> -->
            <swiper
               :modules="[EffectCards]"
               :perSlideOffset="3"
               :perSlideRotate="3"
               :slideShadows="false"
               :rotate="false"
               effect="cards"
            >
               <swiper-slide v-for="item in images" :key="images.src">
                  <img
                     :src="item.src"
                     alt=""
                     class="border-1 w-[90%] rounded-md border-gray-100 shadow-md"
                     loading="lazy"
                  />
               </swiper-slide>
            </swiper>
         </div>
      </div>
   </section>
</template>

<script>
import { ref } from "vue"
import { EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
   components: {
      Swiper,
      SwiperSlide,
      EffectCards,
   },
   setup() {
      const selectedImg = ref("/images/about3.jpg")
      const images = [
         {
            src: "/images/about1.jpg",
            alt: "",
         },
         {
            src: "/images/about2.jpg",
            alt: "",
         },
         {
            src: "/images/about3.jpg",
            alt: "",
         },
      ]
      return {
         images,
         selectedImg,
         EffectCards,
      }
   },
   methods: {
      changeSelected(index) {
         this.selectedImg = this.images[index].src
         console.log(index)
      },
   },
}
</script>

<style scoped></style>
