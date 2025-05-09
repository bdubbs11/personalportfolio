<template>
  <div class="flex flex-col min-h-screen items-center justify-center"> 
    <div class="container grid grid-cols-16 min-w-screen">
      <div class="col-span-2"></div> <!-- left border with color can be deleted-->
      <!-- all the main info -->
      <div class="text-left col-span-12 p-2 mt-2">
        <div class = "grid grid-cols-16"> <!-- grid for the main info -->
          <div class="col-span-10 pt-6"> <!-- left side -->
            <h1 class="text-5xl pb-4 capitalize">Hello, I'm Brandon.</h1> <!--animate-slideIn-1 -->
            <h1 class="text-4xl pb-4">I'm an Aspiring <span class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Software Developer.</span></h1> <!--animate-slideIn-2 -->
            <h1 class="text-3xl pb-4">Welcome to my Personal Portfolio.</h1> <!--animate-slideIn-3 -->

            <p class = "pb-4 text-large">I graduated from Florida Southern College with Magna Cum Laude Honors.</p>
            <p class = "pb-4 text-large" > I have a specalization for Web Development and a passion for learning new <span> skills. </span></p>

          <div class="flex gap-4 text-3xl text-gray-600 pb-4">
            <a href="https://github.com/bdubbs11" target="_blank" rel="noopener noreferrer"><div class="w-8 h-8 bg-gradient-to-r from-black-400 to-gray-500 mask-github"></div></a>
            <a href="https://www.instagram.com/l3randooo" target="_blank" rel="noopener noreferrer"><div class="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 mask-instagram"></div></a>
            <a href="https://www.linkedin.com/in/brandon-wilson-635598254/" target="_blank" rel="noopener noreferrer"><div class="w-8 h-8 bg-gradient-to-r from-sky-500 to-indigo-500 mask-linkedin"></div></a>
            <a href="https://open.spotify.com/user/bdubbs_11" target="_blank" rel="noopener noreferrer"><div class="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 mask-spotify"></div></a>
          </div>
          <button class="border rounded-full px-6 py-2 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 border-none font-semibold"> Download Resume </button>
          </div>
          <div class="col-span-6 p-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full inline-block"> <!-- hero image -->
            <img class="h-auto p-2 rounded-full " src="/images/wilsonHEADSHOT.JPG?url" alt="hero image">
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
    transform: translateX(80px) scale(0.8);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

.animate-slideIn-1 {
  animation: slideIn 2s ease-out forwards;
}
.animate-slideIn-2 {
  animation: slideIn 4s ease-out forwards;
}
.animate-slideIn-3 {
  animation: slideIn 6s ease-out forwards;
}

</style>