<script setup>
import { RouterLink } from 'vue-router';
import image from "../assets/404_image.jpg"
import wave from "../assets/wave.svg"
</script>

<template>
    <!-- component -->
<div class="w-full mt-10 flex flex-col items-center justify-center">
    <div class="bg-black md:w-[70%] lg:w-[60%]">
        <img :src="image"/>
    </div>
    <div class="flex flex-col items-center justify-center">
        <p class="text-3xl md:text-4xl lg:text-5xl text-sky-800 font-medium mt-12 underline">Page Not Found</p>
        <p class="md:text-lg lg:text-xl text-gray-600 mt-8 px-5"> <span class="font-bold underline">Sorry</span>, the page you are looking for could not be found.</p>

        <RouterLink to="/" class="flex items-center space-x-2 bg-sky-800 hover:bg-sky-900 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
            <span>Return Home</span>
        </RouterLink>
    </div>
    <div class="w-full hidden sm:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="RGB(7, 89, 133)" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,229.3C384,256,480,256,576,256C672,256,768,256,864,240C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
</div>
</template>