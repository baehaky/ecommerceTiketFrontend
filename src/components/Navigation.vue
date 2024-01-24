<script setup>
    import { ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    let open = ref(false)
    function MenuOpen(){
        open.value = !open.value
    }
    let Links = [
        { id: 1, name: "Beranda", path: "/" },
        { id: 1, name: "Pesawat", path: "plane" },
        { id: 2, name: "Hotel", path: "hotel" },
        { id: 3, name: "Kereta Api", path: "train" },
        { id: 4, name: "Masuk", path: "login" },
    ]
</script>
<template>
    <header class="shadow-md pt-5">
        <div class="flex pb-5 lg:px-0 px-10 lg:justify-center items-center z-40">
            <h1 class="font-serif text-3xl md:text-4xl font-medium text-sky-800 underline underline-offset-4 hover:decoration-sky-800 decoration-2  hover:underline-offset-8 delay-150 transition-all ease-in-out hover:text-sky-900 flex flex-col">Pesona Nusantara</h1>
            <span @click="MenuOpen()" class="absolute lg:hidden right-6 cursor-pointer text-4xl">
            <i :class="[open ?'bi bi-x' : 'bi bi-list']"></i>
        </span>
        </div>
        <hr class="hidden lg:block"/>
        <nav class="lg:py-5">
            <ul class="lg:flex lg:items-center lg:static justify-center z-0 text-white lg:text-black absolute lg:pb-0 px-3 lg:px-0 pb-10 lg:w-auto w-full top-14 duration-700 bg-sky-800 lg:bg-inherit" :class="[open ? 'top-[-50%]' : 'top-16']">

                <li class="lg:mx-4 lg:my-0 my-5 uppercase text-sm" v-for="link in Links" :key="link.id">
                    <RouterLink :to="link.path" class="py-2 px-10 font-semibold"> {{ link.name }}</RouterLink>
                </li>
                <li class="lg:mx-4 lg:my-0 mt-5 uppercase text-sm">
                    <RouterLink to="register" class="py-2 px-10 font-semibold uppercase lg:bg-sky-800  text-white rounded-md lg:hover:bg-sky-700"> Daftar </RouterLink>
                </li>

            </ul>
        </nav>
    </header>
    <!-- <nav class="bg-indigo-800 text-white py-5 px-10 shadow-slate-700/45 shadow-md md:flex justify-between items-center">
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
    </nav> -->
    <RouterView/>
</template>