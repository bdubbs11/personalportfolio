<template>
  <div class="flex flex-col min-h-screen"> 
    

    <!-- Main Content Section -->
    <div class="container grid grid-cols-16 min-w-screen flex-grow">
      <div class="col-span-2 "></div> <!-- left border with color can be deleted -->

      <div class="col-span-12  gap-4 my-6">
        <!-- grid grid-rows-2 -->
        <!-- Top Section for Title -->
        <div class="py-4 text-center">
          <h1 class="text-6xl font-bold">Projects</h1>
        </div>
        <!-- focus:outline-none bg-gradient-to-r from-resblue to-resaqua text-transparent bg-clip-text font-young-serif -->

        <!-- Bottom Section for Projects Grid -->
        <div class="py-6">
          <div class="container mx-auto grid grid-cols-3 gap-4">
            <!-- 1st Card -->
          <router-link to="/reservoir">
            <div class="rounded-lg p-4 text-center flex flex-col justify-center items-center h-full">
              <div class="hover:bg-gray-900 p-2 rounded cursor-pointer">
                <p class="text-4xl focus:outline-none bg-gradient-to-r from-resblue to-resaqua text-transparent bg-clip-text font-young-serif">
                  Reservoir
                </p>
              </div>
              <p class="text-md mt-6">A mass multi media database & tracker</p>
              <p class="text-sm mt-1">Senior Project - Fall 2024</p>
            </div>
          </router-link>

          <!-- 2nd Card -->
          <router-link to="/some-other-route">
            <div class="rounded-lg p-4 text-center flex flex-col justify-center items-center h-full">
              <p class="text-4xl hover:bg-gray-900 p-2 rounded cursor-pointer">
                To Be Continued
              </p>
              <p class="text-md mt-6">
                I want another notable idea here
              </p>
              <p class="text-sm mt-1">
                new grad – 2025 – random project
              </p>
            </div>
          </router-link>

          <!-- 3rd Card (your original) -->
          <router-link to="/yet-another-route">
            <div class="rounded-lg p-4 text-center flex flex-col justify-center items-center h-full">
              <p class="text-4xl hover:bg-gray-900 p-2 rounded cursor-pointer">
                To Be Continued
              </p>
              <p class="text-md mt-6">
                Another Idea to put here later
              </p>
              <p class="text-sm mt-1">
                new grad – 2025 – random project
              </p>
            </div>
          </router-link>
          </div>
        </div>
      </div>

      <div class="col-span-2"></div> <!-- right border with color can be deleted -->
    </div>
  </div>
</template>