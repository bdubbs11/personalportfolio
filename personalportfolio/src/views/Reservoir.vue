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
              <p class="text-6xl focus:outline-none bg-gradient-to-r from-resblue to-resaqua text-transparent bg-clip-text font-young-serif mt-4">Reservoir</p>

              <!-- carasouel of images of reservoir -->


          </div>
          <div class="col-span-2 border border-red-500"></div>

        </div>
      </div>
</template>