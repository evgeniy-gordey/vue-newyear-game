<template>
    <div>
        <Snow 
            :active="true"
            zIndex="500"
            :wind="1" 
            :swing="3" 
            speed="l" 
            color="#ffffff" />
        <Cloud class="cloud1" />
        <Cloud class="cloud2" />
        <Cloud class="cloud3" />
        <Cloud class="cloud4" />
        <Cloud class="cloud5" />
    </div>
</template>

<script>
    import Snow from 'vue-niege';
    import Cloud from '../svg/cloud.svg'

    export default {
        name: 'AnimatedElements',
        components: {
            Snow,
            Cloud
        }
    }
</script>

<style lang="css">
    .cloud1 {
        position: absolute;
        width: 8%;
        top: 54%;
        z-index: 190;
        animation:linear infinite normal;
        animation-name: fly;
        animation-duration: 30s;
        fill: #3e8aac;
    }

    .cloud2 {
        position: absolute;
        width: 8%;
        top: 57%;
        z-index: 190;
        animation:linear infinite normal;
        animation-name: fly2;
        animation-duration: 30s;
        fill: #3e8aac;
    }

    .cloud3 {
        position: absolute;
        width: 25%;
        top: 26%;
        z-index: 190;
        animation:linear infinite normal;
        animation-name: fly3;
        animation-duration: 20s;
        fill: #A4CFE3;
    }

    .cloud4 {
        position: absolute;
        width: 15%;
        top: 23%;
        z-index: 180;
        animation:linear infinite normal;
        animation-name: fly4;
        animation-duration: 20s;
        fill: #80AABD;
    }

    .cloud5 {
        position: absolute;
        width: 15%;
        top: 24.5%;
        z-index: 180;
        animation:linear infinite normal;
        animation-name: fly5;
        animation-duration: 20s;
        fill: #3E8AAC;
    }

    @-webkit-keyframes fly {
        0% { left: 120%;}
        100%{ left : -90%;}
    }

    @-webkit-keyframes fly2 {
        0% { left: 200%;}
        100%{ left : -10%;}
    }

    @-webkit-keyframes fly3 {
        0% { left: 180%;}
        100%{ left : -30%;}
    }

    @-webkit-keyframes fly4 {
        0% { left: 160%;}
        100%{ left : -50%;}
    }

    @-webkit-keyframes fly5 {
        0% { left: 120%;}
        100%{ left : -90%;}
    }
</style>