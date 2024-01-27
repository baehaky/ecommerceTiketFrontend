<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    let open = ref(true)
    function MenuOpen(){
        open.value = !open.value
    }
    let Links = [
        { id: 1, name: "Beranda", path: "/" },
        { id: 2, name: "Pesawat", path: "about" },
        { id: 3, name: "Hotel", path: "hotel" },
        { id: 4, name: "Kereta Api", path: "train" },
        { id: 5, name: "Masuk", path: "login" },
    ]
</script>
<template>
    <header class="shadow-md pt-5">
        <div class="flex pb-5 lg:px-0 px-10 lg:justify-center items-center z-40">
            <h1 class="font-serif text-3xl md:text-4xl font-medium text-sky-800 underline underline-offset-4 hover:decoration-sky-800 decoration-2  hover:underline-offset-8 delay-150 transition-all ease-in-out hover:text-sky-900 flex flex-col">Pesona Nusantara</h1>
            <span @click="MenuOpen()" class="absolute lg:hidden right-6 cursor-pointer text-4xl">
            <i :class="[open ?'bi bi-list' : 'bi bi-x' ]"></i>
        </span>
        </div>
        <hr class="hidden lg:block"/>
        <nav class="lg:py-5">
            <ul class="lg:flex lg:items-center lg:static justify-center z-0 text-white lg:text-black absolute lg:pb-0 px-3 lg:px-0 pb-10 lg:w-auto w-full top-14 duration-700 bg-sky-800 lg:bg-inherit" :class="[open ? 'top-[-60%]' : 'top-20']">
                
                <hr class="lg:hidden block w-full h-px my-8 bg-gray-200 border-0"/>

                <li class="lg:mx-4 lg:my-0 my-5 uppercase text-sm" v-for="link in Links" :key="link.id">
                    <RouterLink :to="link.path" class="py-2 px-10 font-semibold hover:bg-slate-200/95"> {{ link.name }}</RouterLink>
                </li>
                <li class="lg:mx-4 lg:my-0 mt-5 uppercase text-sm">
                    <RouterLink to="register" class="py-2 px-10 font-semibold uppercase lg:bg-sky-800  text-white rounded-md lg:hover:bg-sky-700"> Daftar </RouterLink>
                </li>
                <hr class="lg:hidden block w-full h-px mt-8 bg-gray-200 border-0"/>
                
            </ul>
        </nav>
    </header>
</template>