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
      <div class="flex flex-col min-h-screen"> 
        <div class="container grid grid-cols-16 min-w-screen flex-grow">
          <div class="col-span-2 border border-red-500"></div>
          <div class="col-span-12 my-6 border border-red-500">
              <!-- this needs to be the png but it will be reservoirs text as of rn
              until i add more projects this will be fine for now -->
            <div class=" mx-24 ">
              <p class="text-6xl focus:outline-none bg-gradient-to-r from-resblue to-resaqua text-transparent bg-clip-text font-young-serif mt-4">Reservoir</p>
              <!-- Introduction -->
              <h2 class="text-2xl font-semibold mt-8 mb-2 mx-10">What is Reservoir?</h2>
              <p class="text-center">
                Reservoir is a web application designed to help users organize and track their media, connect with friends, share recommendations, 
                and receive personalized AI-driven suggestions. Unlike existing platforms such as MyAnimeList, IMDb, and Letterboxd, Reservoir 
                provides a more comprehensive, user-friendly experience tailored to individual preferences.
              </p>

              <!-- Development Context -->
              <h2 class="text-2xl font-semibold mt-8 mb-2">Project Background</h2>
              <p class="text-center">
                Developed as part of my Senior Project (CSC4999) at Florida Southern College, Reservoir was built over several hundred hours 
                alongside teammates Brandon Wilson and Axel Beaver. I served as the team leader, guiding the project from concept to completion 
                and ensuring a seamless user experience and strong implementation of features.
              </p>

              <!-- UI Preview -->
              <h2 class="text-2xl font-semibold mt-8 mb-2">Preview the UI</h2>
              <p class="text-center mb-4">
                While Reservoir isn't public (yet?), you can check out the UI through the images below.
              </p>
            </div>

              <!-- carasouel of images of reservoir -->
              <div class="flex items-center justify-center">
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
                  class="h-1/2 w-3/4">
                  <swiper-slide>
                    <img class="rounded-l-xl object-fill" src="/images/mocsys.JPG?url" alt="Headshot">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-l-xl object-fill" src="/images/soloW.jpg?url" alt="Headshot">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-l-xl object-fill" src="/images/teamW.jpg?url" alt="Headshot">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-l-xl object-fill" src="/images/mocsys.JPG?url" alt="Headshot">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-l-xl object-fill" src="/images/soloW.jpg?url" alt="Headshot">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-l-xl object-fill" src="/images/teamW.jpg?url" alt="Headshot">
                  </swiper-slide>
                </swiper-container>
              </div>


          </div>
          <div class="col-span-2 border border-red-500"></div>

        </div>
      </div>
</template>