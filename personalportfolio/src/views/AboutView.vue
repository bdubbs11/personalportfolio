<script setup>
  // import MyCarousel from './components/MyCarousel.vue';
</script>

<template>
<div class="container grid grid-cols-16 min-w-screen min-h-screen">
  <!-- Left spacing -->
  <div class="border-4 border-red-300 col-span-2"></div>

  <!-- Main content -->
  <div class="col-span-12 grid grid-rows-3 gap-4">

    <!-- Hero Section 1 -->
    <div class="grid grid-cols-12">
      <div class="border-4 border-red-300 col-span-6">

        <img class="h-auto p-10 " src="/images/wilsonHEADSHOT.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ">
        <!-- <MyCarousel /> -->

      </div>
      <div class="border-4 border-red-300 col-span-6 flex flex-col items-center justify-center text-balance">
          <h1 class="text-2xl font-bold m-8">About Me</h1>
          <p class="text-center">
            I have experience with full-stack web development, cloud platforms, RESTful API integration, and database management. 
            My projects have given me hands-on exposure to building responsive, user-focused applications from the ground up. 
            I graduated Magna Cum Laude from Florida Southern College with a degree in Computer Science and a 3.75 GPA. 
            As a former collegiate team captain and 16-time NCAA Division II All-American swimmer, I bring discipline, leadership, 
            and a strong work ethic to everything I do. I'm currently seeking a software development role where I can continue to 
            grow and make an impact.
          </p>
      </div>
    </div>


    <!-- Hero Section 1 -->
    <div class="grid grid-cols-12">
      <div class="border-4 border-red-300 col-span-6 flex items-center justify-center">
        <p class="">This is some text about my life with swimming</p>
      </div>
      <div class="border-4 border-red-300 col-span-6">
        <img class="h-auto p-10 " src="/images/wilsonSSC.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ">
      </div>
    </div>

    <!-- Hero Section 3 -->
    <div class="grid grid-cols-12">
      <div class="border-4 border-red-300 col-span-6">
        <img class="h-auto p-10 " src="/images/skoVENS.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ">
      </div>
      <div class="border-4 border-red-300 col-span-6 flex items-center justify-center">
        <p class="">These are my socails and stuff</p>
      </div>
    </div>

  </div>

  <!-- Right spacing -->
  <div class="border-4 border-red-300 col-span-2"></div>
</div>


  
</template>

