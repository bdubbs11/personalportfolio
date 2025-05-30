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
        <div class="container grid grid-cols-1 md:grid-cols-16 min-w-screen flex-grow">
          <div class="col-span-2 "></div>
          <div class="col-span-12 my-6">
              <!-- this needs to be the png but it will be reservoirs text as of rn
              until i add more projects this will be fine for now -->
            <div class="mx-24 text-center">
              <p class="flex items-center justify-center mb-12"><img class="h-full w-full md:h-1/2 md:w-1/2" :src="project.png" alt="project png"> </p>
              
              <p class="text-sm md:text-lg text-center font-inter">
                {{ project.description}}
              </p>

              <!-- Development Context -->
              <h2 class="text-xl md:text-2xl font-bold mt-8 mb-2 text-resblue">Project Background</h2>
              <p class=" text-sm md:text-lg text-center font-inter">
                  {{ project.background }}
              </p>

              <!-- UI Preview -->
              <h2 class="text-xl md:text-2xl font-bold mt-8 mb-2 text-resblue">A glimpse into our website</h2>
              <p class="text-sm md:text-lg text-center mb-4 font-inter">
                {{ project.preview }}
              </p>
            </div>

              <!-- carasouel of images of reservoir -->
              <div class="flex items-center justify-center mt-10">
                <swiper-container
                  :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }" 
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
                    <img loading="lazy" @load="$event.target.classList.add('opacity-100')" class="rounded-xl object-fill transition-opacity duration-300 opacity-0" :src="project.image1" alt="home page">
                  </swiper-slide>
                  <swiper-slide>
                    <img loading="lazy" @load="$event.target.classList.add('opacity-100')" class="rounded-xl object-fill transition-opacity duration-300 opacity-0" :src="project.image2" alt="sign up page">
                  </swiper-slide>
                  <swiper-slide>
                    <img loading="lazy" @load="$event.target.classList.add('opacity-100')" class="rounded-xl object-fill transition-opacity duration-300 opacity-0" :src="project.image3" alt="my reservoir">
                  </swiper-slide>
                  <swiper-slide>
                    <img loading="lazy" @load="$event.target.classList.add('opacity-100')" class="rounded-xl object-fill transition-opacity duration-300 opacity-0" :src="project.image4" alt="search">
                  </swiper-slide>
                  <swiper-slide>
                    <img loading="lazy" @load="$event.target.classList.add('opacity-100')"  class="rounded-xl object-fill transition-opacity duration-300 opacity-0" :src="project.image5" alt="profile">
                  </swiper-slide>
                  <swiper-slide>
                    <img loading="lazy" @load="$event.target.classList.add('opacity-100')" class="rounded-xl object-fill transition-opacity duration-300 opacity-0" :src="project.image6" alt="friends">
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