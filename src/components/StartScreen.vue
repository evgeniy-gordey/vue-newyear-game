<template>
    <div class="start-screen" >
        <Start class="start"/>
        <Button 
            main="/images/ru/button-start/button.png" 
            hover="/images/ru/button-start/button-hover.png" 
            clicked="/images/ru/button-start/button-clicked.png" 
            class="start-button"
            @click.native="triggerStart()" />
        <div class="start-under" />
    </div>
</template>

<script>
    import Start from '../svg/start.svg'
    import Button from './interface/Button.vue'

    export default {
        name: 'StartScreen',
        components: {
            Start,
            Button
        },
        props: {
            triggerStart: {
                type: Function
            }
        }
    }
</script>

<style lang="css" scoped>
    .start-under {
        z-index: 9900;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }

    .start {
        z-index: 10000;
        position: absolute;
        width: 50%;
        top: 25%;
        left: 25%;
    }

    .start-button {
        position: absolute;
        z-index: 10010;
        width: 20%;
        top: 70%;
        left: 40%;
        cursor: pointer;
    }
</style>