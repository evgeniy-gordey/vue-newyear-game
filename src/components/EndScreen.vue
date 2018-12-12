<template>
    <div class="end-screen">
        <div class="end-screen__image">
            <img src="../assets/end-screen.png" alt="" width="100%">
            <img 
                src="../assets/button.png" 
                alt="" 
                class="end-screen__button-phone"
                @click="downloadImage()">
            <img 
                src="../assets/button.png" 
                alt="" 
                class="end-screen__button-desktop"
                @click="downloadImage()">
        </div>
        <div class="end-screen__overlay" />
    </div>
</template>

<script>
    export default {
        name: 'EndScreen',
        methods: {
            
        }
    }
</script>

<style lang="css" scoped>
    .end-screen {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .end-screen__image {
        position: absolute;
        overflow-y: scroll;
        z-index: 21000;
        width: 80%;
        height: 90%;
        top: 5%;
        left: 10%;
        background-color: green;
    }

    .end-screen__overlay {
        position: absolute;
        z-index: 20500;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, .5)
    }

    .end-screen__button-phone {
        position: absolute;
        cursor: pointer;
        width: 12%;
        top: 137%;
        left: 65%;
    }

    .end-screen__button-desktop {
        position: absolute;
        cursor: pointer;
        width: 12%;
        top: 168%;
        left: 65%;
    }
</style>