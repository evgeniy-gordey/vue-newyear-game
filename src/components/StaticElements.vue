<template>
    <div class="static-elements">
        <Background class="bg" />
        <House class="house" />
        <Roof class="roof" />
    </div>
</template>

<script>
    import Background from '../svg/background.svg'
    import House from '../svg/house.svg'
    import Roof from '../svg/roof.svg'    

    export default {
        name: 'StaticElements',
        components: {
            Background,
            House,
            Roof,
        }
    }
</script>

<style lang="css" scoped>
    .bg {
     z-index: 100;
    }

    .house {
        position: absolute;
        top: 18.9%;
        left: 8.3%;
        width: 75%;
        z-index: 200;
    }

    .roof {
        position: absolute;
        pointer-events: none;
        width: 6.8%;
        top: 28.9%;
        left: 26.5%;
        z-index: 300;
    }
</style>