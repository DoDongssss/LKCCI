<template>
   <section class="flex flex-col py-12">
      <div class="relative flex items-center">
         <h1 class="text-3xl font-[900] text-[#020066]">
            ACCREDITATION & AFFILIATIONS
         </h1>
      </div>
      <div class="mt-6 flex flex-col">
         <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam
            dicta ut recusandae voluptatibus est veniam incidunt, natus ipsa
            exercitationem at dignissimos porro ea reprehenderit omnis deleniti,
            sit sint quas? Similique illo doloremque ipsum voluptates. Vitae
            exercitationem aliquam aperiam ab, mollitia quia voluptatum, error
            assumenda quae sit et soluta distinctio.
         </p>
         <div class="mt-6 flex w-full flex-wrap gap-6">
            <div
               class="relative flex w-[calc(100%/3-16px)] min-w-[270px] max-w-[calc(100%/3-16px)] flex-1 flex-col"
            >
               <div
                  class="image-container relative h-[250px] cursor-pointer overflow-hidden rounded-[5px]"
               >
                  <img
                     src="/images/content_bg.jpg"
                     alt=""
                     class="rounded-lg transition-all duration-[400ms]"
                  />
                  <span
                     class="absolute bottom-0 left-0 right-0 z-10 flex h-full w-full translate-y-[100%] items-center justify-center text-4xl font-[900] text-white transition-all duration-[300ms] ease-linear"
                  >
                     Oct. 07, 2023</span
                  >
               </div>
               <h5 class="mt-6 text-lg font-bold">AWARD 1</h5>
               <p class="mt-2 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, ratione. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quos, assumenda?
               </p>
            </div>
            <div
               class="relative flex w-[calc(100%/3-16px)] min-w-[270px] max-w-[calc(100%/3-16px)] flex-1 flex-col"
            >
               <div
                  class="image-container relative h-[250px] cursor-pointer overflow-hidden rounded-[5px]"
               >
                  <img
                     src="/images/content_bg.jpg"
                     alt=""
                     class="rounded-lg transition-all duration-[400ms]"
                  />
                  <span
                     class="absolute bottom-0 left-0 right-0 z-10 flex h-full w-full translate-y-[100%] items-center justify-center text-4xl font-[900] text-white transition-all duration-[300ms] ease-linear"
                  >
                     Oct. 07, 2023</span
                  >
               </div>
               <h5 class="mt-6 text-lg font-bold">AWARD 2</h5>
               <p class="mt-2 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, ratione. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quos, assumenda?
               </p>
            </div>
            <div
               class="relative flex w-[calc(100%/3-16px)] min-w-[270px] max-w-[calc(100%/3-16px)] flex-1 flex-col"
            >
               <div
                  class="image-container relative h-[250px] cursor-pointer overflow-hidden rounded-[5px]"
               >
                  <img
                     src="/images/content_bg.jpg"
                     alt=""
                     class="rounded-lg transition-all duration-[400ms]"
                  />
                  <span
                     class="absolute bottom-0 left-0 right-0 z-10 flex h-full w-full translate-y-[100%] items-center justify-center text-4xl font-[900] text-white transition-all duration-[300ms] ease-linear"
                  >
                     Oct. 07, 2023</span
                  >
               </div>
               <h5 class="mt-6 text-lg font-bold">AWARD 3</h5>
               <p class="mt-2 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, ratione. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quos, assumenda?
               </p>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   setup() {
      return {}
   },
}
</script>

<style scoped>
.image-container:hover img {
   transform: scale(1.2);
}
.image-container:hover span {
   background: rgb(2, 0, 102);
   background: linear-gradient(
      365deg,
      rgba(2, 0, 102, 0.75) 0%,
      rgba(175, 198, 233, 0) 100%
   );
   transform: translateY(0);
}
</style>
