<template>
   <section
      class="flex h-screen flex-col items-center justify-center bg-[url('/images/tagline_bg.jpg')] bg-cover"
   >
      <span class="h-[3px] w-[800px] rounded-full bg-[#FFB300]"></span>
      <div class="mt-7 max-w-[850px] text-center text-[40px] leading-normal">
         “At <span class="font-bold text-[#020066]">LKCCI</span> we care about
         building a vibrant learning community where
         <span class="font-bold text-[#fd0002]"
            >all students are challenged and engaged.”</span
         >
      </div>
      <div
         onclick="coreCompetencies.showModal()"
         class="group mt-[65px] flex items-center"
      >
         <span
            class="cursor-pointer text-lg font-semibold transition-colors duration-200 ease-linear hover:text-[#FFB300]"
            >CORE COMPETENCIES</span
         >
         <svg
            width="60"
            height="30"
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
      </div>
      <dialog id="coreCompetencies" class="modal">
         <form method="dialog" class="modal-box w-11/12 max-w-4xl p-0">
            <button class="absolute right-5 top-5">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 fill-white"
                  viewBox="0 0 384 512"
               >
                  <path
                     d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  />
               </svg>
            </button>
            <div
               class="flex h-[200px] flex-col items-center justify-center bg-[#020066]"
            >
               <span class="h-[2.5px] w-[150px] rounded-md bg-[#0162cd]"></span>
               <h1 class="mt-4 text-4xl font-bold text-white">
                  CORE COMPETENCIES
               </h1>
            </div>
            <div class="flex flex-col gap-12 p-12 px-[80px]">
               <div class="flex flex-col">
                  <h1 class="text-[30px] font-bold text-[#020066]">Mission</h1>
                  <span class="mt-3 text-justify text-[17px]"
                     >The
                     <span class="font-bold text-[#020066]"
                        >LIBERTAD KIDDIE CARE CENTER, INC. ,</span
                     >
                     develops God fearing children, competent pupils both in
                     academics and co- curricular, equipped with the basic
                     learning skills and values to cope with the demand of the
                     fast changing times, while preparing them for their future
                     as responsible citizens of the country..</span
                  >
               </div>
               <div class="flex flex-col">
                  <h1 class="text-[30px] font-bold text-[#020066]">Vision</h1>
                  <span class="mt-3 text-[16px]"
                     >The
                     <span class="font-bold text-[#020066]"
                        >LIBERTAD KIDDIE CARE CENTER, INC.,</span
                     >
                     commits to train up children according to God’s design
                     being taught by the scripture and anchored with the three
                     Cores: Truth, Faith and Service.</span
                  >
               </div>
               <div class="flex flex-col">
                  <h1 class="text-[30px] font-bold text-[#020066]">
                     Core Values
                  </h1>
                  <span class="mt-3 text-lg font-semibold"
                     >3 Core Values :
                     <span class="text-xl font-bold text-[#020066]">Truth</span
                     >,
                     <span class="text-xl font-bold text-[#020066]">Faith</span>
                     and
                     <span class="text-xl font-bold text-[#020066]"
                        >Service</span
                     >.</span
                  >
               </div>
            </div>
         </form>
      </dialog>
   </section>
</template>

<script>
export default {
   setup() {
      return {}
   },
}
</script>

<style scoped></style>
