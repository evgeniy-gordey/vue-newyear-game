<template>
    <div class="static-elements">
        <Background class="bg" />
        <House class="house" />
    </div>
</template>

<script>
    import Background from '../svg/background.svg'
    import House from '../svg/house.svg' 

    export default {
        name: 'StaticElements',
        components: {
            Background,
            House,
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
</style>