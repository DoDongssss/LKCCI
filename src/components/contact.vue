<template>
   <section class="flex h-fit items-center justify-center">
      <div
         class="hidden h-[725px] w-[550px] items-center justify-center rounded-l-md border-2 border-[#020066] bg-[#020066] lg:flex"
      >
         <img src="/gif/contact.gif" alt="" class="h-[400px] w-[400px]" />
      </div>
      <div
         class="h-[725px] w-[550px] rounded-md border-2 border-[#11d186] p-6 lg:rounded-r-md lg:border-l-0 lg:p-12"
      >
         <div>
            <h1 class="text-2xl font-semibold">Welcome to LKCCI</h1>
            <p class="mt-2 text-justify">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
               rerum dolores, porro illum perferendis asperiores corrupti culpa
            </p>
         </div>
         <form class="mt-6" @submit.prevent="handleCaptcha">
            <h1 class="text-center text-2xl font-bold">CONTACT</h1>
            <div class="mt-6">
               <input
                  v-model="senderData.name"
                  type="text"
                  name=""
                  class="w-full rounded-sm border border-gray-300 p-3"
                  placeholder="E.g Juan Dela Cruz"
               />
            </div>
            <div class="mt-5">
               <input
                  v-model="senderData.email"
                  type="email"
                  name=""
                  class="w-full rounded-sm border border-gray-300 p-3"
                  placeholder="E.g juandela@gmail.com"
               />
            </div>
            <div class="mt-5">
               <input
                  v-model="senderData.address"
                  type="text"
                  name=""
                  class="w-full rounded-sm border border-gray-300 p-3"
                  placeholder="E.g Poblacion Tampakan South Cot."
               />
            </div>

            <div class="mt-5">
               <textarea
                  v-model="senderData.message"
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  class="w-full rounded-sm border border-gray-300 p-3"
                  placeholder="How can I help you?"
                  required
               ></textarea>
            </div>
            <div class="mt-6 flex items-center justify-between">
               <div
                  class="rounded-md border border-green-500 bg-green-500/40 px-6 py-3 text-[#020066] transition-all duration-200 ease-linear"
                  :class="status == true ? 'opacity-1' : 'opacity-0'"
               >
                  Message sent!
               </div>
               <button
                  ref="submitBtn"
                  type="submit"
                  class="flex rounded-md bg-[#020066] px-8 py-3 font-semibold text-white transition-all duration-200 ease-linear hover:bg-[#11d186]"
               >
                  <div class="flex items-center" v-if="process == true">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="... mr-3 h-5 w-5 animate-spin fill-yellow-500"
                        viewBox="0 0 512 512"
                     >
                        <path
                           d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
                        />
                     </svg>
                     <span> Processing . . .</span>
                  </div>
                  <span v-if="process == false">Submit</span>
               </button>
            </div>
         </form>
         <div class="mt-10 flex items-center justify-center gap-3">
            <div
               class="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 shadow-sm"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon h-5 w-5 fill-[#11d186] group-hover:animate-bounce"
                  viewBox="0 0 512 512"
               >
                  <path
                     d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                  />
                  <path
                     d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                  />
               </svg>
            </div>
            <div
               class="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100"
            >
               <a href="https://www.facebook.com/LKCCI.2017" target="_blank">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5 fill-[#11d186] group-hover:animate-bounce"
                     viewBox="0 0 448 512"
                  >
                     <path
                        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                     />
                  </svg>
               </a>
            </div>
            <div
               class="group group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 fill-[#11d186] group-hover:animate-bounce"
                  viewBox="0 0 448 512"
               >
                  <path
                     d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"
                  />
               </svg>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { ref } from "vue"
import axios from "axios"

export default {
   setup() {
      const status = ref(false)
      const process = ref(false)
      const submitBtn = ref()
      const senderData = ref({
         name: "",
         email: "",
         address: "",
         message: "",
      })
      const emailJSdata = ref({
         service_id: "service_9b5eh41",
         template_id: "template_pewmpk8",
         user_id: "jiEPMBbIF-ES28y1l",
         template_params: {
            username: "",
            from_name: "",
            message: "",
            address: "",
            email: "",
            "g-recaptcha-response": "",
         },
      })
      return {
         emailJSdata,
         senderData,
         status,
         submitBtn,
         process,
      }
   },
   methods: {
      handleCaptcha() {
         this.submitBtn.disabled = true
         this.process = true
         grecaptcha.enterprise.ready(async () => {
            const token = await grecaptcha.enterprise
               .execute("6Le6IvcnAAAAAMDbWTM4VcqmMFYx4YPggDbdFS-B", {
                  action: "submit",
               })
               .then((token) => {
                  this.emailJSdata.template_params["g-recaptcha-response"] =
                     token
                  this.handleSubmit()
               })
         })
      },
      async handleSubmit() {
         this.emailJSdata.template_params["from_name"] = this.senderData.name
         this.emailJSdata.template_params["message"] = this.senderData.message
         this.emailJSdata.template_params["address"] = this.senderData.address
         this.emailJSdata.template_params["email"] = this.senderData.email
         await axios
            .post(
               "https://api.emailjs.com/api/v1.0/email/send",
               this.emailJSdata
            )
            .then((res) => {
               this.process = false
               this.status = true

               /* prettier-ignore */
               ;(this.senderData.name = null),
                  (this.senderData.email = null),
                  (this.senderData.address = null),
                  (this.senderData.message = null),
                  (this.submitBtn.disabled = false)
               /* prettier-ignore */

               setTimeout( ()=>{ 
                  this.status = false
               }, 8000)
            })
            .catch((err) => {
               this.submitBtn.disabled = false
            })

         console.log("success")
      },
   },
   mounted() {
      // console.log((this.submitBtn.disabled = true))
   },
}
</script>

<style lang="scss" scoped></style>
