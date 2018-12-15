<template>
    <div class="static-elements">
        <Background class="bg" />
        <House class="house" />
        <Front class="front" />
        <Moon class="moon" />
        <SantaWithDeers class="santa-with-deers" />
    </div>
</template>

<script>
    import Background from '../svg/background.svg'
    import House from '../svg/house.svg' 
    import Front from '../svg/front.svg' 
    import Moon from '../svg/moon.svg' 
    import SantaWithDeers from '../svg/santa-with-deers.svg' 

    export default {
        name: 'StaticElements',
        components: {
            Background,
            House,
            Front,
            Moon,
            SantaWithDeers
        }
    }
</script>

<style lang="css" scoped>
    .static-elements {
        display: grid;
    }

    .bg {
        z-index: 100;
    }

    .house {
        position: absolute;
        top: 18.58%;
        left: 8.29%;
        width: 75.38%;
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

    .front {
        position: absolute;
        z-index: 100;
        bottom: 0;
    }

    .moon {
        position: absolute;
        z-index: 150;
        width: 16%;
        top: 5%;
        left: 65%;
    }

    .santa-with-deers {
        position: absolute;
        width: 29%;
        top: 14%;
        left: 51.6%;
        z-index: 160;
    }
</style>