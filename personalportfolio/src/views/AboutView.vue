// h-full 2xl:h-full w-full rounded-l-xl object-fill

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';

  // import './style.css';

  // import required modules
  import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Navigation, Pagination, EffectFade],
      };
    },
  };
</script>

<template>
<div class="container grid grid-cols-16 min-w-screen min-h-screen pageFadeIn">
  <!-- Left spacing -->
  <div class="col-span-2"></div>

  <!-- Main content -->
  <div class="col-span-12 grid grid-rows-3 gap-1 md:gap-4 mt-12">

    <!-- Hero Section 1 -->
    <div class="grid grid-cols-12 md:grid-rows-1 grid-rows-2 h-7/8 md:h-[85vh] md:mb-8">
      <div class="col-span-12 md:col-span-6 order-2 md:order-1 h-full md:h-[85vh]">
      <swiper-container 
        :effect="fade"
        :modules="modules"
        :loop="true"
        :speed="1000" 
        :autoplay="{
        delay: 4000,
        disableOnInteraction: false
        }"
        :pagination="true"
        :navigation="true" 
        class="h-full w-full">
      <swiper-slide class ="flex items-center justify-center">

          <img class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover" src="/images/gradpics.jpg?url" alt="Headshot">

        </swiper-slide>
        <swiper-slide class="flex items-center justify-center">

          <img class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover" src="/images/wilsonSSC.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ">

        </swiper-slide>
        <swiper-slide class="flex items-center justify-center">

          <img class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover" src="/images/grrad.jpg?url" alt="brandonXaiden">

        </swiper-slide>

        <swiper-slide class="flex items-center justify-center">

          <img class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover object-bottom" src="/images/pole.JPG?url" alt="brandonXaiden">

        </swiper-slide>

      </swiper-container>
      </div>
      <div class="col-span-12 md:col-span-6 order-1 md:order-2 flex flex-col items-center justify-center bg-gray-700 rounded-t-xl md:rounded-r-xl md:rounded-tl-none h-full md:h-[85vh]">
        <h1 class="text-xl md:text-2xl font-bold m-8">About Me</h1>
        <p class="text-sm md:text-lg text-center mx-4 normal-case">
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


    <!-- Hero Section 2 -->
    <div class="grid grid-cols-12 md:grid-rows-1 grid-rows-2 h-7/8 md:h-[85vh] md:mb-8">
      <div class="col-span-12 md:col-span-6 h-full pb-4 md:h-[85vh] flex flex-col items-center justify-center text-balance bg-gray-700 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
        <h1 class="text-xl md:text-2xl font-bold m-8">#Swammer</h1>
        <p class="text-sm md:text-md text-center m-4 normal-case">

          I have been competitively swimming since I was 8 years old. I have been on many teams during my joureny. 
          Starting with the Y of Randalstown, then moving to the Y of Catonsville, and then ending with Eagle swim team before I went to collegiate level swimming.
            <a href="https://swimswam.com/florida-southern-scores-commitment-from-2-sport-athlete-brandon-wilson/#:~:text=High%20school%20senior%20Brandon%20Wilson,I%20have%20had%20with%20Eagles." target="_blank" class="text-blue-500 underline">I decided to commit for swimming to Florida Southern College.</a>
          My freshman year started slow and I didn't improve much as a swimmer that year but I have great memories of being apart 
          of the confrence championship team and continuing a *5 peat championship run dating back to my freshman year of high school with McDonogh.
          For the next 3 years of swimming encampuslated some of my best memorires and some of the fastest swimming I have ever done. To end sophomore year
          I qualified for nationals in the 200 backstroke and was not invited back but I was able to be brought to be apart of the relay teams and 
          at our awards banquet I ended up winning most improved swimmer for that year. For junior year I had the priveledge to be picked to be a 
          captain of the team. With that came more responsibility and more expected results from me from the coaches and my teammates. I ended up qualifying
          for nationals in a few events and qualified individually to swim in the meet this time. Individually I finished 9th in the 100 backsroke and 9th in the 50 freestyle. 
          At that years banquest I won most improved swimmer again. My senior year I was elected captain again and was a leader for the team. At nationanals this year I finished 3rd in 
          the 100 backstroke and 8th in the 50 freestyle and won most valuable swimmer for the team. I am so thankful for the time I spent swimming and all the memories and
          friendhips I have made becaue of my sport. 

          <span class="text-xs md:text-sm">* denotes covid year and didn't have a championship meet.</span>
 
        </p>
      </div>
      <div class="col-span-12 md:col-span-6 order-1 md:order-2 h-full md:h-[85vh]">
        <!-- <img class="h-auto p-10 " src="/images/wilsonSSC.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ"> -->
        <swiper-container 
          :effect="fade"
          :modules="modules"
          :loop="true"
          :speed="1000" 
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false
          }"
          :pagination="true"
          :navigation="true"
          class="h-full w-full flex flex-col items-center justify-center
        ">
          <!--  border only top and then border only-->
          <swiper-slide>
            <img class="h-1/2 w-full object-cover md:rounded-tr-xl" src="/images/wave.JPG?url" alt="wave">
            <!-- xs:rounded-b-xl md:rounded-l-xl -->
            <img class="h-1/2 w-full object-cover rounded-b-xl md:rounded-br-xl" src="/images/free.JPG?url" alt="freestyletwin">
          </swiper-slide>
          <swiper-slide>
            <img class="h-1/2 w-full object-cover md:rounded-tr-xl" src="/images/walkout.JPG?url" alt="walkout">
            <img class="h-1/2 w-full object-cover rounded-b-xl md:rounded-br-xl" src="/images/firstW.JPG?url" alt="mocsys">
          </swiper-slide>
          <swiper-slide>
            <img class="h-1/2 w-full object-cover md:rounded-tr-xl" src="/images/smile.JPG?url" alt="walkout">
            <img class="h-1/2 w-full object-cover rounded-b-xl md:rounded-br-xl" src="/images/back.JPG?url" alt="mocsys">
          </swiper-slide>
          <swiper-slide>
            <img class="h-1/2 w-full object-cover md:rounded-tr-xl" src="/images/soloW.jpg?url" alt="walkout">
            <img class="h-1/2 w-full object-cover rounded-b-xl md:rounded-br-xl" src="/images/teamW.jpg?url" alt="mocsys">
          </swiper-slide>
        </swiper-container>
      </div>
    </div>

    <!-- Hero Section 3 -->
    <div class="grid grid-cols-12 md:grid-rows-1 grid-rows-2 h-7/8 md:h-[85vh] md:mb-8">
      <div class="col-span-12 md:col-span-6 order-2 md:order-1 h-full md:h-[85vh]">
        <!--           :spaceBetween="30"
          :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
          }"
          :pagination="true"
          :navigation="true"
          :modules="modules"
          class="h-full w-full" -->
        <swiper-container 
          :effect="fade"
          :modules="modules"
          :loop="true"
          :speed="1000" 
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false
          }"
          :pagination="true"
          :navigation="true"
          class="h-full w-full"
        >
          <swiper-slide class ="flex items-center justify-center">

              <img class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover object-top" src="/images/skoVENS.JPG?url" alt="Headshot">

          </swiper-slide>
          <swiper-slide class="flex items-center justify-center">

            <!-- <div class=" overflow-hidden flex items-center justify-center"> -->

              <img class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover" src="/images/luffy.JPG.png?url" alt="pirate king">

          </swiper-slide>
          <swiper-slide class="flex items-center justify-center">

              <img class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover" src="/images/bron.jpg?url" alt="ravensXorioles">


          </swiper-slide>

          <swiper-slide>
            <img class="h-1/2 w-full object-cover md:rounded-tl-xl" src="/images/ravens.jpg?url" alt="walkout">
            <img class="h-1/2 w-full object-cover rounded-b-xl md:rounded-bl-xl" src="/images/fscseniors.JPG?url" alt="mocsys">
          </swiper-slide>

        </swiper-container>
      </div>
      <div class="col-span-12 md:col-span-6 h-full md:h-[85vh] order-1 md:order-2 flex flex-col items-center justify-center bg-gray-700 rounded-t-xl md:rounded-r-xl md:rounded-tl-none">
        <h1 class="text-xl md:text-2xl font-bold m-8">Who am I really?</h1>
        <p class="text-sm md:text-lg text-center m-4 normal-case">
          I'm an avid Ravens fanatic, I'm from Baltimore so fighting the urge to scream "O" during the national anthem at non Baltimore home games is very hard.
          If you are confused to what I mean by that, please take the time to attend a home Ravens or Orioles game to fully grasp the complimacations that might concur.
          I love to play video games whether its Madden, Elden Ring, or Balatro. I can always have a fun time no matter if I am with with my friends 
          or by myself. I also enjoy movies, tv shows, and anime. My favorite show of all time would have to be One Piece. 
        </p>
      </div>
    </div>

  </div>

  <!-- Right spacing -->
  <div class="col-span-2"></div>
</div>


  
</template>

<style scoped>
/* how tf do i change the colors of the arrows and the dots */
/* .swiper-slide-active, .swiper-slide-next, .swiper-slide-prev {
  background-color: #9333ea; 
} */

.swiper-button-prev {
  color: #9333ea; /* Tailwind purple-600 */
}

.swiper-button-next {
  color: #9333ea; /* Tailwind purple-600 */
}

.swiper-pagination-bullets {
  background-color: #9333ea; /* Tailwind purple-600 */
}

.swiper-pagination-bullet {
  background-color: yellow; /* Tailwind purple-600 */
}

.swiper-pagination-bullet-active {
  background-color: orange; /* Tailwind purple-600 */
}


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