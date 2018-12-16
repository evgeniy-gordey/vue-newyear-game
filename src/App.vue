<template>
    <div id="app" class="app">
        <div class="app__background-top" />
        <div class="app__background-bottom" />
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
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow-x: hidden;
        justify-content: center;
    }

    .app__background-top {
        position: absolute;
        top: 0;
        height: 50vh;
        width: 100%;
        background: #1e3e4f;
    }

    .app__background-bottom {
        position: absolute;
        top: 50%;
        height: 50vh;
        width: 100%;
        background: #b0d2e3;
    }

    .carousel-3d-slide img {
        width: 100%;
        height: 100%;
    }

    @media (min-aspect-ratio: 16/9) {
        .app {
            justify-content: flex-start;
        }
    }

    @media (max-aspect-ratio: 16/9) {
        .app {
            overflow: hidden;
        }
    }
</style>