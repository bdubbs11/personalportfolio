<template>
<div class="flex flex-col text-white">
  <nav class="flex flex-row justify-between my-auto w-screen px-6 py-4 text-white">
    <!-- if page is different make the color gradient for my name change -->
    <!-- if swimming make blue to red bc of all the red and blue in actualality of me siwmming LOL -->
    <router-link to='/' class = "text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Brandon Wilson</router-link> <!-- click on it and change theme / inverse -->
    <div class="flex gap-10">
      <router-link to='/projects' class="pt-1">Projects</router-link>
      <router-link to='/about' class="pt-1">About</router-link>
    </div>
  </nav>

  <main class="flex-1 text-center my-auto text-white">
   <router-view />
   <slot></slot>
  </main>


  <footer class = "text-center py-4 mt-auto">
    <h3>All aspects of this website was designed and implemented by me, Brandon Wilson</h3>
  </footer> 
</div>
</template>

<script>

</script>