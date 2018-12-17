<template>
    <div id="app" class="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="css"> 
     body {
        background: #b0d2e3;
        margin: 0;
        width: 100%;
        height: 100vh;
    }

    .app {
        width: 100%;
        position: relative;
    }

    .carousel-3d-slide img {
        width: 100%;
        height: 100%;
    }

</style>