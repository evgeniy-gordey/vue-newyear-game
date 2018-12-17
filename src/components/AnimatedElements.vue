<template>
    <div>
        <Snow 
            :active="true"
            zIndex="500"
            :wind="1" 
            :swing="3" 
            speed="l" 
            color="#ffffff" />
        <CloudSmall class="cloud-small" />
        <CloudBig class="cloud-big" />
    </div>
</template>

<script>
    import Snow from 'vue-niege';
    import CloudSmall from '../svg/cloud-small.svg'
    import CloudBig from '../svg/cloud-big.svg'

    export default {
        name: 'AnimatedElements',
        components: {
            Snow,
            CloudSmall,
            CloudBig,
        }
    }
</script>

<style lang="css">
    .cloud-small {
        position: absolute;
        width: 100%;
        top: 54%;
        z-index: 190;
        transform: translateZ(0);
        will-change: transform;
        animation:linear infinite normal;
        animation-name: fly;
        animation-duration: 70s;
    }

    .cloud-big {
        position: absolute;
        width: 100%;
        top: 20%;
        z-index: 190;
        transform: translateZ(0);
        will-change: transform;
        animation:linear infinite normal;
        animation-name: fly;
        animation-duration: 45s;
    }

    @keyframes fly {
        0% { left: 110%;}
        100%{ left : -100%;}
    }
</style>