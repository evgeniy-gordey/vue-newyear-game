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
    @font-face {
        font-family: Freakomix;
        src: url("/fonts/freakomix.woff") format("woff");
        font-weight: 400;
        font-style: normal;
    }

    body {
        font-family: Freakomix;
        background: #9fb949;
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