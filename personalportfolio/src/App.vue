<template>
<div class="flex flex-col text-white">
  <nav class="flex flex-row justify-between my-auto w-screen px-6 py-4 text-white">
    <!-- if page is different make the color gradient for my name change -->
    <!-- if swimming make blue to red bc of all the red and blue in actualality of me siwmming LOL -->
    <router-link to='/' class = "text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:scale-110 duration-300 ease-in-out">Brandon Wilson</router-link> <!-- click on it and change theme / inverse -->
    <div class="flex gap-10 font-inter">
      <router-link to='/projects' class=" md:text-md hover:bg-gray-900 p-2 rounded cursor-pointer ease-in-out duration-300">Projects</router-link>
      <router-link to='/about' class=" md:text-md hover:bg-gray-900 p-2 rounded cursor-pointer ease-in-out duration-300">About</router-link>
    </div>
  </nav>

  <main class="text-center text-white">
   <router-view />
   <slot></slot>
  </main>


  <footer class="font-inter text-sm md:text-lg text-center p-4">
    <h3>All aspects of this website was designed and implemented by me, Brandon Wilson</h3>
  </footer> 
</div>
</template>

<script>

</script>