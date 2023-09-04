<template>
   <div
      class="fixed inset-0 z-[999999999999999] flex items-center justify-center bg-white"
      v-if="isLoading"
   >
      <div class="flex h-12 w-12 text-[#020066]">
         <span class="loading loading-ring loading-xs"></span>
         <span class="loading loading-ring loading-sm"></span>
         <span class="loading loading-ring loading-md"></span>
         <span class="loading loading-ring loading-lg"></span>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      isLoading: Boolean,
   },
}
</script>

<style scoped>
.loader {
   animation: spin 1s linear infinite;
}

@keyframes spin {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
}
</style>
