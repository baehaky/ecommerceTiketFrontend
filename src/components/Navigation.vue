<script setup>
    import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <nav class="bg-purple-700 p-5 space-x-5">
        <RouterLink class="text-white" to="/">Home</RouterLink>
        <RouterLink class="text-white" to="/about">About</RouterLink>
    </nav>
    <RouterView/>
</template>