<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
   <div class="flex min-h-screen">

<!-- Container -->
<div class="flex flex-row w-full">

  <!-- Sidebar -->
  <div class="relative overflow-hidden md:flex  w-1/2 bg-gradient-to-tr from-sky-800 to-blue-900 i justify-around items-center hidden">
    <div class="bg-white/15 py-10 px-10 rounded-lg backdrop-blur-lg">
        <div class="">
            <RouterLink to="/" class="flex items-center space-x-3 hover:underline text-gray-100 rounded transition duration-150">
                <span class="bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                </span>
                <span>Return Home</span>
            </RouterLink>
        </div>
		<div>
            <h1 class="text-white font-bold text-4xl font-sans">Pesona Nusantara</h1>
			<p class="text-white mt-1">Enter your account and discover new experiences</p>
			<RouterLink to="register" class="block text-center w-28 bg-white hover:bg-slate-400 hover:text-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Register</RouterLink>
        </div>
	</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-14 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
</div>
  <!-- Login -->
  <div class="flex flex-1 flex-col items-center justify-center px-10 relative">
    <!-- Login box -->
    <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">Sign in to account</h2>
      </div>
      <div class="flex flex-col max-w-md space-y-5">
        <input type="text" placeholder="Username"
          class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
        <input type="password" placeholder="Password"
          class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
        <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Confirm
          with email</button>
        <div class="flex justify-center items-center">
          <span class="w-full border border-black"></span>
          <span class="px-4 hidden md:block">Welcome</span>
          <span class="px-4 block md:hidden">Or</span>
          <span class="w-full border border-black"></span>
        </div>
        <RouterLink to="register" class="text-center md:hidden justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Create
          new account</RouterLink >
        <RouterLink to="/" class="flex items-center text-center md:hidden justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium bg-gradient-to-tr from-sky-800 to-blue-900 text-white">
            <span class="bg-white rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                </span> Go to home</RouterLink >
      </div>
    </div>
  </div>
</div>

</div> 
</template>