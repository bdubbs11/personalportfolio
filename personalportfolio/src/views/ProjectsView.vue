<script>
import { defineComponent } from 'vue';
import projects from '../assets/projects.json';

export default defineComponent({
  data() {
    return {
      project: projects,
    };
  },
});
</script>


<template>
  <div class="flex flex-col min-h-screen pageFadeIn"> 
    

    <!-- Main Content Section -->
    <div class="container grid grid-cols-16 min-w-screen flex-grow">
      <div class="col-span-2 "></div> <!-- left border with color can be deleted -->

      <div class="col-span-12 gap-4 my-6">
        <!-- grid grid-rows-2 -->
        <!-- Top Section for Title -->
        <div class="py-4 text-center">
          <h1 class="text-6xl font-bold">Projects</h1>
        </div>
        <!-- focus:outline-none bg-gradient-to-r from-resblue to-resaqua text-transparent bg-clip-text font-young-serif -->

        <!-- Bottom Section for Projects Grid -->
        <div class="py-6">
          <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 1st Card -->
          <router-link :to="{ name: 'project-display', params: { id: 0 } }">
            <div class="rounded-lg p-4 text-center flex flex-col justify-center items-center h-full">
              <div class="hover:bg-gray-900 p-2 rounded cursor-pointer ease-in-out duration-300">
                <p class="flex items-center justify-center"><img class="rounded-xl object-fill h-3/5 w-3/5" :src="project[0].png" alt="reservoir png logo"> </p>
                <!-- <p class="text-4xl focus:outline-none bg-gradient-to-r from-resblue to-resaqua text-transparent bg-clip-text font-young-serif">Reservoir</p> -->
              </div>
              <div class="font-inter">
                  <p class="text-md mt-6">A mass multi media database & tracker</p>
                  <p class="text-sm mt-1">Senior Project - Fall 2024</p>
              </div>
            </div>
          </router-link>

          <!-- 2nd Card -->
            <div class="flex justify-center">
                <div class="rounded-lg p-4 text-center flex flex-col justify-center items-center h-3/5 w-3/5">
                    <p class="flex items-center justify-center"><img class="rounded-xl object-fill" :src="project[1].png" alt="to be continued logo"> </p>
                </div>
            </div>

          <!-- 3rd Card (your original) -->
            <div class="flex justify-center">
                <div class="rounded-lg p-4 text-center flex flex-col justify-center items-center h-3/5 w-3/5">
                    <p class="flex items-center justify-center"><img class="rounded-xl object-fill" :src="project[1].png" alt="to be continued logo"> </p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-2"></div> <!-- right border with color can be deleted -->
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInBody {
  0% { 
    opacity: 0;
    transform: translateY(30px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0px);
  }
}

.pageFadeIn {
  animation: fadeInBody 1.5s ease-out;
}
</style>