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
        display: flex;
        flex-direction: column;
        position: relative;
        overflow-x: hidden;
    }
</style>