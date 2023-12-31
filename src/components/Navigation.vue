<script setup>
    import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <header class="flex justify-center bg-blue-900 w-full">
        <nav class="flex justify-center w-full">
            <RouterLink class="text-white" to="/">Home</RouterLink>
            <RouterLink class="text-white" to="/about">About</RouterLink>
        </nav>
    </header>
    <RouterView/>
</template>