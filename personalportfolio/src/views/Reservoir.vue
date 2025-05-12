<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';

  // import './style.css';
  // imort from json
  import projects from '../assets/projects.json';


  // import required modules
  import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

  export default {
    props: ['id'],
    mounted() {
      console.log(this.id); // This will log the id passed in the URL (e.g., 0)
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        project: projects[this.id],
      };
    },
    setup() {
      return {
        modules: [Autoplay, Navigation, Pagination, EffectFade],
      };
    },
  };
</script>
<!-- Future reference here lets store all of this information inside of a json? 
      So i then can call reservoir.json and have the images... text description... title all filled out
      and don't need to make multiple files for this information   -->

<template>
      <div class="flex flex-col min-h-screen pageFadeIn"> 
        <div class="container grid grid-cols-16 min-w-screen flex-grow">
          <div class="col-span-2 "></div>
          <div class="col-span-12 my-6">
              <!-- this needs to be the png but it will be reservoirs text as of rn
              until i add more projects this will be fine for now -->
            <div class="mx-24 text-center">
              <p class="flex items-center justify-center"><img class="rounded-l-xl object-fill h-1/2 w-1/2" :src="project.png" alt="Headshot"> </p>


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
              <h2 class="text-2xl font-semibold mt-8 mb-2">A glimps into our website</h2>
              <p class="text-center mb-4">
                While Reservoir isn't public (yet?), you can check out the UI through the images below.
              </p>
            </div>

              <!-- carasouel of images of reservoir -->
              <div class="flex items-center justify-center mt-10">
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
                    <img class="rounded-xl object-fill" src="/images/reservoir/reservoir-home.png" alt="home page">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-xl object-fill" src="/images/reservoir/reservoir-sign-up.png" alt="sign up page">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-xl object-fill" src="/images/reservoir/reservoir-my-reservoir.png" alt="my reservoir">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-xl object-fill" src="/images/reservoir/reservoir-search.png" alt="search">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-xl object-fill" src="/images/reservoir/reservoir-profile.png" alt="profile">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="rounded-xl object-fill" src="/images/reservoir/reservoir-friends.png" alt="friends">
                  </swiper-slide>
                </swiper-container>
              </div>


          </div>
          <div class="col-span-2"></div>

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