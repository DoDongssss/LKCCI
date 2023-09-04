<template>
   <div
      @click="backtoTop"
      class="group fixed bottom-[125px] right-5 z-50 flex cursor-pointer flex-col items-center justify-center text-[#11d186] transition-all duration-300 ease-linear hover:bottom-[145px]"
   >
      <svg
         xmlns="http://www.w3.org/2000/svg"
         class="h-4 fill-[#020066] group-hover:animate-bounce"
         viewBox="0 0 448 512"
      >
         <path
            d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
         />
      </svg>
      <span class="mt-[40px] rotate-[-90deg] text-[12px] font-semibold"
         >BACK TO TOP</span
      >
   </div>
</template>

<script>
export default {
   setup() {
      return {}
   },
   methods: {
      backtoTop() {
         window.scrollTo({
            top: 0,
            behavior: "smooth", // Add smooth scrolling behavior
         })
      },
   },
}
</script>

<style lang="scss" scoped></style>
