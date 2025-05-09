<script setup>
  // import MyCarousel from './components/MyCarousel.vue';
</script>

<template>
<div class="container grid grid-cols-16 min-w-screen min-h-screen">
  <!-- Left spacing -->
  <div class="col-span-2"></div>

  <!-- Main content -->
  <div class="col-span-12 grid grid-rows-3 gap-4">

    <!-- Hero Section 1 -->
    <div class="grid grid-cols-12">
      <div class="col-span-6 ">
        <swiper-container :pagination="true" :modules="modules" slides-per-view="1" speed="500" loop="true" class="h-full w-full">
          <swiper-slide class ="flex items-center justify-center">

              <img class="h-[800px] w-auto rounded-xl object-fill" src="/images/gradpics.jpg?url" alt="Headshot">

          </swiper-slide>
          <swiper-slide class="flex items-center justify-center">

            <!-- <div class=" overflow-hidden flex items-center justify-center"> -->

              <img class="h-[800px] w-auto rounded-xl object-fill" src="/images/wilsonSSC.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ">

          </swiper-slide>
          <swiper-slide class="flex items-center justify-center">

              <img class="h-[800px] w-auto rounded-xl object-fill" src="/images/grrad.jpg?url" alt="ravensXorioles">

          </swiper-slide>
        </swiper-container>
        <!-- <img class="h-auto p-10 " src="/images/wilsonHEADSHOT.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ"> -->
        <!-- <MyCarousel /> -->

      </div>
      <div class="col-span-6 flex flex-col items-center justify-center text-balance bg-gray-700 rounded-xl">
          <h1 class="text-2xl font-bold m-8">About Me</h1>
          <p class="text-center m-4 normal-case">
            Hi, I’m a Computer Science grad from Florida Southern College, where I finished with Magna Cum Laude 
            honors finishing with a 3.75 GPA. 
            During college, I was also a team captain and 16-time NCAA Division II All-American swimmer. 
            So I’ve learned a lot about discipline, leadership, and pushing myself through challenges.

            On the tech side, I’ve worked on full-stack web projects and have experience with cloud platforms, 
            RESTful APIs, and database management. I really enjoy building things that are both functional and user-friendly, 
            and I’ve had the chance to work on apps from the ground up.

            Right now, I’m looking for a software development role where I can keep learning, grow my skills, and be part of 
            something meaningful.
          </p>
      </div>
    </div>


    <!-- Hero Section 1 -->
    <div class="grid grid-cols-12">
      <div class="col-span-6 flex flex-col items-center justify-center text-balance bg-gray-700 rounded-xl">
        <h1 class="text-2xl font-bold m-8">#Swammer</h1>
        <p class="text-center m-4 normal-case">
          This is some text about my life with swimming 
          and how I got into it. I have been swimming since I was 5 years old and have been swimming competitively since I was 8.
          I have been on multiple teams and have swam in multiple states. I have also been to the Olympic Trials in 2020 and 2024.
          I have also been to the Junior Olympics and have won multiple medals in my events. I have also been to the
          Florida State Championships and have won multiple medals in my events. I have also been to the NCAA Division II Championships
          and have won multiple medals in my events. I have also been to the NCAA Division II National Championships and have won multiple medals in my events.
          I have also been to the NCAA Division II National Championships and have won multiple medals in my events.  

        </p>
      </div>
      <div class="col-span-6">
        <!-- <img class="h-auto p-10 " src="/images/wilsonSSC.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ"> -->
        <swiper-container :pagination="true" :modules="modules" slides-per-view="1" speed="500" loop="true" class="h-full w-full flex flex-col items-center justify-center">
          <!--  border only top and then border only-->
          <swiper-slide>
            <img class="h-1/2 w-full object-cover rounded-t-xl" src="/images/wave.JPG?url" alt="wave">
            <img class="h-1/2 w-full object-cover rounded-b-xl" src="/images/free.JPG?url" alt="freestyletwin">
          </swiper-slide>
          <swiper-slide>
            <img class="h-1/2 w-full object-cover rounded-t-xl" src="/images/walkout.JPG?url" alt="walkout">
            <img class="h-1/2 w-full object-cover rounded-b-xl" src="/images/firstW.JPG?url" alt="mocsys">
          </swiper-slide>
          <swiper-slide>
            <img class="h-1/2 w-full object-cover rounded-t-xl" src="/images/smile.JPG?url" alt="walkout">
            <img class="h-1/2 w-full object-cover rounded-b-xl" src="/images/back.JPG?url" alt="mocsys">
          </swiper-slide>
        </swiper-container>
      </div>
    </div>

    <!-- Hero Section 3 -->
    <div class="grid grid-cols-12">
      <div class="col-span-6">
        <swiper-container :pagination="true" :modules="modules" slides-per-view="1" speed="500" loop="true" class="h-full w-full">
          <swiper-slide class ="flex items-center justify-center">

              <img class="h-[800px] w-auto rounded-xl object-fill" src="/images/skoVENS.JPG?url" alt="Headshot">

          </swiper-slide>
          <swiper-slide class="flex items-center justify-center">

            <!-- <div class=" overflow-hidden flex items-center justify-center"> -->

              <img class="h-[800px] w-auto rounded-xl object-fill" src="/images/luffy.JPG.png?url" alt="pirate king">

          </swiper-slide>
          <swiper-slide class="flex items-center justify-center">

              <img class="h-[800px] w-auto rounded-xl object-fill" src="/images/bron.jpg?url" alt="ravensXorioles">

          </swiper-slide>
        </swiper-container>
      </div>
      <div class="col-span-6 flex flex-col items-center justify-center bg-gray-700 rounded-xl">
        <h1 class="text-2xl font-bold m-8">Who am I really?</h1>
        <p class="text-center m-4 normal-case">
          Avid Ravens fanatic, I am from baltimore so I have to fight the urge to screm "O" during every tune the national anthem is played.
          I love to play video games whether is be Madden, Elden Ring, or Balatro. I can always have a fun time where it is with my firends 
          or by myself. I also enjoy movies, tv shows, and anime. My favorite show all time would have to be One Piece. 
        </p>
      </div>
    </div>

  </div>

  <!-- Right spacing -->
  <div class="col-span-2"></div>
</div>


  
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  // import './style.css';

  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>