<template>
   <loader :isLoading="loading" />
   <headerSection :scrollPos="scrollPosition" :activeSection="activeSection" />
   <main class="flex flex-col gap-[75px]">
      <introductionSection :scrollPos="scrollPosition" id="home" />
      <div class="flex flex-col gap-[75px] px-[150px]">
         <aboutSection id="about" />
         <chooseSection id="fundamentals" />
      </div>
      <taglineSection id="competencies" />
      <div class="flex flex-col gap-[75px] px-[150px]">
         <gallerySection id="gallery" />
         <accreditationSection id="affiliations" />
         <contactSection id="contact" />
      </div>
   </main>
   <footerSection class="mt-12" />
   <backtotop
      class="transition-all duration-300 ease-in-out"
      :class="
         scrollPosition >= 350
            ? 'opacity-1 translate-y-0'
            : 'translate-y-[100%] opacity-0'
      "
   />
</template>

<script>
import { ref } from "vue"
import headerSection from "../components/header.vue"

import introductionSection from "../components/introduction.vue"
import aboutSection from "../components/about.vue"
import chooseSection from "../components/choose.vue"
import taglineSection from "../components/tagline.vue"
import accreditationSection from "../components/accreditation.vue"
import gallerySection from "../components/gallery.vue"

import contactSection from "../components/contact.vue"
import footerSection from "../components/footer.vue"

import loader from "../components/loader.vue"
import backtotop from "../components/backtotop.vue"

export default {
   components: {
      headerSection,
      introductionSection,
      aboutSection,
      chooseSection,
      taglineSection,
      accreditationSection,
      gallerySection,
      contactSection,
      footerSection,
      loader,
      backtotop,
   },
   setup() {
      const loading = ref(true)
      const scrollPosition = ref(0)
      const activeSection = ref("home")

      return {
         loading,
         scrollPosition,
         activeSection,
      }
   },

   methods: {
      handleLoading() {
         this.loading = false
      },
      handleScroll() {
         this.scrollPosition = window.scrollY
      },
      checkVisibleSection() {
         const sections = [
            "home",
            "about",
            "fundamentals",
            "competencies",
            "affiliations",
            "contact",
         ]

         for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
               const rect = element.getBoundingClientRect()
               if (
                  rect.top <= window.innerHeight / 2 &&
                  rect.bottom >= window.innerHeight / 2
               ) {
                  this.activeSection = section
                  break
               }
            }
         }
      },
   },
   beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll, true)
   },
   mounted() {
      window.addEventListener("load", this.handleLoading)
      window.addEventListener("scroll", this.handleScroll, true)
      window.addEventListener("scroll", this.checkVisibleSection)
   },
}
</script>

<style lang="scss" scoped></style>
