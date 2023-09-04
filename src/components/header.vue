<template>
   <header class="z-[999999999] flex flex-col">
      <div class="flex h-[150px] items-center justify-between px-[150px] py-12">
         <div>
            <img
               src="/images/logo.png"
               alt=""
               class="head_logo h-[100px] w-[100px]"
            />
         </div>
         <div class="flex gap-6">
            <div class="flex flex-col px-3">
               <h1 class="text-md font-semibold">Call Us</h1>
               <ul class="mt-2 list-none">
                  <li class="text-sm">+63909098314181</li>
                  <li class="text-sm">+63909098314181</li>
               </ul>
            </div>
            <span class="w-[1px] bg-gray-100"></span>
            <div class="flex max-w-[380px] flex-col px-3">
               <h1 class="text-md font-semibold">Location</h1>
               <p class="font-regular mt-2 text-sm">
                  Libertad Kiddie Care Center Inc., Poblacion, Sto. Nino, South
                  Cotabato.
               </p>
            </div>
            <span class="w-[1px] bg-gray-100"></span>
            <div class="flex flex-col px-3">
               <h1 class="text-md font-semibold">Time</h1>
               <ul class="mt-2 list-none">
                  <li class="text-sm">Monday to Friday - 7:30 AM to 4:00 PM</li>
                  <li class="text-sm">Saturday - 8:00 AM to 11:30 AM</li>
               </ul>
            </div>
         </div>
      </div>
      <nav
         class="z-10 flex h-[80px] w-full items-center justify-center overflow-visible bg-[#020066] text-white shadow-md transition-all duration-500 ease-in-out"
         :class="scrollPos >= 150 ? 'fixed top-0 ' : ''"
      >
         <ul class="flex list-none gap-8 overflow-visible">
            <div class="flex w-[250px] justify-end gap-8">
               <li
                  class="text-md cursor-pointer font-bold transition-all duration-200 ease-linear hover:text-[#fffe03]"
                  :class="activeSection == 'home' ? 'text-[#fffe03]' : ''"
               >
                  <a href="#home"> HOME </a>
               </li>
               <li
                  class="text-md cursor-pointer font-bold transition-all duration-200 ease-linear hover:text-[#fffe03]"
                  :class="activeSection == 'about' ? 'text-[#fffe03]' : ''"
               >
                  <a href="#about">ABOUT</a>
               </li>
               <li
                  class="text-md cursor-pointer font-bold transition-all duration-200 ease-linear hover:text-[#fffe03]"
                  :class="
                     activeSection == 'fundamentals' ? 'text-[#fffe03]' : ''
                  "
               >
                  <a href="#fundamentals">FUNDAMENTALS</a>
               </li>
            </div>
            <div
               class="hover: relative h-full w-[100px] transition-all duration-300 ease-in"
               :class="
                  scrollPos >= 150
                     ? 'opacity-1 max-w-[250px]'
                     : 'max-w-0 opacity-0'
               "
            >
               <img
                  src="/images/logo.png "
                  alt=""
                  class="nav_logo absolute bottom-[-100px] z-50 h-[100px] w-full"
               />
            </div>
            <div class="flex w-[250px] gap-8">
               <li
                  class="text-md cursor-pointer font-bold transition-all duration-200 ease-linear hover:text-[#fffe03]"
                  :class="
                     activeSection == 'competencies' ? 'text-[#fffe03]' : ''
                  "
               >
                  <a href="#competencies">COMPETENCIES</a>
               </li>
               <li
                  class="text-md cursor-pointer font-bold transition-all duration-200 ease-linear hover:text-[#fffe03]"
                  :class="
                     activeSection == 'affiliations' ? 'text-[#fffe03]' : ''
                  "
               >
                  <a href="#gallery">AFFILIATIONS</a>
               </li>
               <li
                  class="text-md cursor-pointer font-bold transition-all duration-200 ease-linear hover:text-[#fffe03]"
                  :class="activeSection == 'contact' ? 'text-[#fffe03]' : ''"
               >
                  <a href="#contact"> CONTACT </a>
               </li>
            </div>
         </ul>
      </nav>
   </header>
</template>

<script>
import { ref } from "vue"

export default {
   props: {
      scrollPos: Number,
      activeSection: String,
   },
   setup() {
      return {}
   },
   methods: {},
   mounted() {},
}
</script>

<style scoped>
.nav_logo,
.head_logo {
   filter: drop-shadow(0 0 10px #fffe03);
   animation: logoFilter 2s linear infinite alternate;
}

@keyframes logoFilter {
   0% {
      filter: drop-shadow(0 0 1px #fffe03);
   }
   50% {
      filter: drop-shadow(0 0 5px #fffe03);
   }
   100% {
      filter: drop-shadow(0 0 10px #fffe03);
   }
}
</style>
