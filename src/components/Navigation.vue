<script setup>
    import { ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    let open = ref(false)
    function MenuOpen(){
        open.value = !open.value
    }
    let Links = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Service", path: "service" },
        { id: 3, name: "About", path: "about" },
        { id: 4, name: "Login", path: "login" },
    ]
</script>
<template>
    <nav class="bg-indigo-800 text-white py-3.5 px-6 max-w-screen-xl shadow-slate-700/45 shadow-md md:flex justify-between items-center">
        <div class="flex items-center">
            <h1 class="font-bold uppercase underline underline-offset-4 md:text-2xl text-xl">SonicTickets</h1>
        </div>
        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ?'bi bi-x' : 'bi bi-list']"></i>
        </span>


        <ul class="md:flex md:items-center md:static absolute md:pb-0 px-3 md:px-0 pb-10 md:w-auto w-full top-14 duration-700 bg-indigo-900 md:bg-inherit" :class="[open ? 'left-0' : 'left-[-100%]']">
            <li class="md:mx-4 md:my-0 my-5" v-for="link in Links" :key="link.id">
                <RouterLink :to="link.path"> {{ link.name }}</RouterLink>
            </li>
            <button class="md:mx-4 bg-white  p-1 rounded-md px-3 hover:bg-slate-300">
                <RouterLink to="register" class="text-black hover:text-neutral-700">Register</RouterLink>
            </button>
        </ul>
    </nav>
    <RouterView/>
</template>