<template>
  <div class="flex flex-col min-h-screen items-center justify-center"> 
    <div class="container grid grid-cols-16 min-w-screen">
      <div class="col-span-2"></div> <!-- left border with color can be deleted-->
      <!-- all the main info -->
      <div class="text-left col-span-12 p-2 mt-2">
        <div class = "grid grid-cols-16"> <!-- grid for the main info -->
          <div class="col-span-10 pt-6"> <!-- left side -->
            <h1 class="text-5xl pb-4 capitalize animate-slideIn-1">Hello, I'm Brandon.</h1> <!--animate-slideIn-1 -->
            <h1 class="text-4xl pb-4 animate-slideIn-2">I'm an Aspiring <span class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Software Developer.</span></h1> <!--animate-slideIn-2 -->
            <h1 class="text-3xl pb-4 animate-slideIn-3">Welcome to my Personal Portfolio.</h1> <!--animate-slideIn-3 -->

            <div class="animate-slideIn-after">
              <p class = "pb-4 text-large">I graduated from Florida Southern College with Magna Cum Laude Honors.</p>
              <p class = "pb-4 text-large" > I have a specalization in Web Development and a passion for learning new <span> skills. </span></p>
            </div>


            <div class="flex gap-4 text-3xl text-gray-600 pb-4 animate-slideIn-after">
              <a href="https://github.com/bdubbs11" target="_blank" rel="noopener noreferrer">
                <div class="w-8 h-8 bg-gradient-to-r from-black to-gray-500 mask-github transition-transform hover:scale-120 hover:shadow-md duration-300 ease-in-out"></div>
              </a>
              <a href="https://www.instagram.com/l3randooo" target="_blank" rel="noopener noreferrer">
                <div class="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 mask-instagram transition-transform hover:scale-120 hover:shadow-md duration-300 ease-in-out"></div>
              </a>
              <a href="https://www.linkedin.com/in/brandon-wilson-635598254/" target="_blank" rel="noopener noreferrer">
                <div class="w-8 h-8 bg-gradient-to-r from-sky-500 to-indigo-500 mask-linkedin transition-transform hover:scale-120 hover:shadow-md duration-300 ease-in-out"></div>
              </a>
              <a href="https://open.spotify.com/user/bdubbs_11" target="_blank" rel="noopener noreferrer">
                <div class="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 mask-spotify transition-transform hover:scale-120 hover:shadow-md duration-300 ease-in-out"></div>
              </a>
            </div>

          <a href="/images/files/wilson-newgrad-resume.pdf" download class="animate-slideIn-after">
            <button class="border rounded-full px-6 py-2 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 border-none font-semibold transition-transform  hover:scale-110 duration-300 ease-in-out"> Download Resume </button>
          </a>  

          </div>
          <div class="col-span-6 p-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full inline-block animate-slideIn-after"> <!-- hero image -->
            <img class="h-auto p-2 rounded-full animate-slideIn-after" src="/images/wilsonHEADSHOT.JPG?url" alt="hero image">
          </div>
        </div>
        <!-- <p class = "normal-case "> Lorem ipsum dolor sit amet, consec</p> -->
      </div>
      <div class="col-span-2"></div> <!-- right border with color can be deleted-->
    </div>
  </div>


</template>

<style>
.mask-github {
  -webkit-mask: url('/images/svg/icons8-github_blank.svg') no-repeat center;
  -webkit-mask-size: contain;
  mask: url('/images/svg/icons8-github_blank.svg') no-repeat center;
  mask-size: contain;
}

.mask-instagram {
  -webkit-mask: url('/images/svg/icons8-instagram.svg') no-repeat center;
  -webkit-mask-size: contain;
  mask: url('/images/svg/icons8-instagram.svg') no-repeat center;
  mask-size: contain;
}

.mask-linkedin {
  -webkit-mask: url('/images/svg/icons8-linkedin.svg') no-repeat center;
  -webkit-mask-size: contain;
  mask: url('/images/svg/icons8-linkedin.svg') no-repeat center;
  mask-size: contain;
}

.mask-spotify {
  -webkit-mask: url('/images/svg/icons8-spotify.svg') no-repeat center;
  -webkit-mask-size: contain;
  mask: url('/images/svg/icons8-spotify.svg') no-repeat center;
  mask-size: contain;
}

@keyframes slideIn {
  0% {
    transform: translateY(40px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.animate-slideIn-1 {
  animation: slideIn 1s ease-in forwards;
}
.animate-slideIn-2 {
  animation: slideIn 1s ease-in forwards;
  animation-delay: 1.2s;
  opacity: 0;
}
.animate-slideIn-3 {
  animation: slideIn 1s ease-in forwards;
  animation-delay: 2.4s;
  opacity: 0;
}

.animate-slideIn-after {
  animation: slideIn 1s ease-in forwards;
  animation-delay: 4s;
  opacity: 0;
}

</style>