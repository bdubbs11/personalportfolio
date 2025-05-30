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
<div class="container grid grid-cols-16 min-w-screen min-h-screen pageFadeIn mb-10 md:mb-0">
  <!-- Left spacing --> 
  <div class="col-span-2"></div>

  <!-- Main content -->
  <div class="col-span-12 grid grid-rows-3 gap-1 md:gap-4 mt-12">

    <!-- Hero Section 1 -->
    <div class="grid grid-cols-12 md:grid-rows-1 grid-rows-2 h-7/8 my-auto md:h-[85vh] md:mb-8 w-full ">
    
      <div class="col-span-12 md:col-span-6 order-2 md:order-1 h-full md:h-[85vh] ">

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
        class="h-full w-full">
      <swiper-slide class ="flex items-center justify-center">

           <!-- preload the first image -->
          <img  rel="preload" class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover transition-opacity duration-300" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587104/gradpics_ctcnwg.jpg" alt="Headshot">

        </swiper-slide>
        <swiper-slide class="flex items-center justify-center">

          <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587106/wilsonSSC_vtjtdp.jpg" alt="Brandon Wilson Wins 100 Back SSC Champ">

        </swiper-slide>
        <swiper-slide class="flex items-center justify-center">

          <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587102/grrad_v62y4g.jpg" alt="brandonXaiden">

        </swiper-slide>

        <swiper-slide class="flex items-center justify-center">

          <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover object-bottom transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587103/pole_dre8md.jpg" alt="brandonXaiden">

        </swiper-slide>

      </swiper-container>
      </div>
      <div class="col-span-12 md:col-span-6 order-1 md:order-2 flex flex-col items-center justify-center bg-gray-700 rounded-t-xl md:rounded-r-xl md:rounded-tl-none h-full md:h-[85vh]">
        <h1 class="text-xl md:text-2xl font-bold m-8 ml-12">About Me</h1>
        <div class="text-sm md:text-base text-left mx-12 normal-case font-inter">
          <p class="mb-2">- Graduated from Florida Southern College <br /> <span class="italic text-white/50">(Magna Cum Laude Honors - 3.75 GPA)</span></p>
          <p class="mb-2">- 16-time NCAA DII All-American Swimmer & Team Captain</p>

          <hr class="text-white/30 my-4">

          <p class="mb-2">- Worked with cloud platforms, RESTful APIs, & databases</p>
          <p class="mb-2">- I love building web projects that are functional & user-friendly</p>

          <hr class="text-white/30 my-4">

          <p>
              Right now, I’m looking for a software development role where I can keep learning, grow my skills, and be part of
              something meaningful.
          </p>
        </div>
      </div>
    </div>


    <!-- Hero Section 2 -->
    <div class="grid grid-cols-12 md:grid-rows-1 grid-rows-2 h-full md:h-7/8 my-auto md:h-[85vh] md:mb-8">
      <div class="col-span-12 md:col-span-6 h-full pb-4 md:h-[85vh] flex flex-col items-center justify-center text-balance bg-gray-700 rounded-t-xl md:rounded-l-xl md:rounded-tr-none w-full mx-auto">
        <h1 class="text-xl md:text-2xl font-bold m-4 md:m-8">#Swammer</h1>

          <div class="text-sm md:text-base text-left mx-12 normal-case font-inter">
            <p class="mb-2">- I’ve been swimming competitively since I was 8, starting with local YMCAs and eventually joining Eagle Swim Team</p>
            <p class="mb-2 text-white">- <a href="https://swimswam.com/florida-southern-scores-commitment-from-2-sport-athlete-brandon-wilson/#:~:text=High%20school%20senior%20Brandon%20Wilson,I%20have%20had%20with%20Eagles." target="_blank" class="underline hover:text-white/50 ease-in-out duration-300">Committed to swim at Florida Southern College</a></p>
            <hr class="text-white/30 my-4">
            <p class="mb-2">- Served as a 2x Team Captain, earned Most Improved twice, and was named Team MVP my senior year</p>
            <p class="mb-2">- Qualified for NCAA Nationals in multiple events; my best placement was 3rd in the 100 back my senior year</p>
            <hr class="text-white/30 my-4">
            <p>Swimming has been a huge part of my life. It’s taught me discipline, leadership, and given me some of my best memories. Thanks to everyone that I have met along the journey.</p>
          </div>


      </div>
      <div class="col-span-12 md:col-span-6 order-1 md:order-2 h-full md:h-[85vh]">
        <!-- <img class="h-auto p-10 " src="/images/wilsonSSC.JPG?url" alt="Brandon Wilson Wins 100 Back SSC Champ"> -->
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
          class="h-full w-full flex flex-col items-center justify-center
        ">
          <!--  border only top and then border only-->
          <swiper-slide>
            <img  rel="preload"  class="h-1/2 w-full object-cover md:rounded-tr-xl transition-opacity duration-300 " src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587105/wave_v74l9x.jpg" alt="wave">
            <!-- xs:rounded-b-xl md:rounded-l-xl -->
            <img  rel="preload"  class="h-1/2 w-full object-cover rounded-b-xl md:rounded-br-xl transition-opacity duration-300 " src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587102/free_uj7dmn.jpg" alt="freestyletwin">
          </swiper-slide>
          <swiper-slide>
            <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-1/2 w-full object-cover md:rounded-tr-xl transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587105/walkout_it1ult.jpg" alt="walkout">
            <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-1/2 w-full object-cover rounded-b-xl md:rounded-br-xl transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587100/firstW_fnptj3.jpg" alt="firstw">
          </swiper-slide>
          <swiper-slide>
            <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-1/2 w-full object-cover md:rounded-tr-xl transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587105/smile_grlevk.jpg" alt="walkout">
            <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-1/2 w-full object-cover rounded-b-xl md:rounded-br-xl transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747590560/back_eneoui.jpg" alt="backstroke lead">
          </swiper-slide>
          <swiper-slide>
            <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-1/2 w-full object-cover md:rounded-tr-xl transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587106/soloW_hqhghw.jpg" alt="walkout">
            <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-1/2 w-full object-cover rounded-b-xl md:rounded-br-xl transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587105/teamW_bivh9v.jpg" alt="team win">
          </swiper-slide>
        </swiper-container>
      </div>
    </div>

    <!-- Hero Section 3 -->
    <div class="grid grid-cols-12 md:grid-rows-1 grid-rows-2 h-7/8 my-auto md:h-[85vh] md:mb-8">
      <div class="col-span-12 md:col-span-6 order-2 md:order-1 h-full md:h-[85vh]">
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
          class="h-full w-full"
        >
          <swiper-slide class="flex items-center justify-center">
            <img
              rel="preload"
              class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover object-top transition-opacity duration-300"
              src="https://res.cloudinary.com/dnwp8f5uy/image/upload/f_auto,q_auto/v1747590560/skoVens_fapfwi.jpg"
              alt="Headshot"
            />
          </swiper-slide>

          <swiper-slide class="flex items-center justify-center">

            <!-- <div class=" overflow-hidden flex items-center justify-center"> -->

              <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587103/luffy.JPG_clcw9n.png" alt="pirate king">

          </swiper-slide>
          <swiper-slide class="flex items-center justify-center">

              <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-full w-full rounded-b-xl md:rounded-l-xl md:rounded-br-none object-cover transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587102/bron_ydegem.jpg" alt="ravensXorioles">


          </swiper-slide>

          <swiper-slide>
            <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-1/2 w-full object-cover md:rounded-tl-xl transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587103/ravens_fhlg4g.jpg" alt="walkout">
            <img  loading="lazy" @load="$event.target.classList.add('opacity-100')" class="h-1/2 w-full object-cover rounded-b-xl md:rounded-bl-xl transition-opacity duration-300 opacity-0" src="https://res.cloudinary.com/dnwp8f5uy/image/upload/v1747587103/fscseniors_wx8e2t.jpg" alt="mocsys">
          </swiper-slide>

        </swiper-container>
      </div>
      <div class="col-span-12 md:col-span-6 h-full md:h-[85vh] order-1 md:order-2 flex flex-col items-center justify-center bg-gray-700 rounded-t-xl md:rounded-r-xl md:rounded-tl-none">
        <h1 class="text-xl md:text-2xl font-bold m-8">Who am I really?</h1>

        <div class="text-sm md:text-base text-left mx-12 normal-case font-inter">
          <p class="mb-2">- Born and raised in Baltimore so I'm a huge Ravens fan... SKO VENS BABY!!!</p>
          <p class="mb-2">- Whether I’m gaming with friends or on my own, I’m always down for some of my favorites like Madden, Elden Ring, or Balatro.</p>
          <p class="mb-2">- I’m also a huge fan of movies, TV shows, and anime. One Piece is easily my all-time favorite.</p>
        </div>

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
