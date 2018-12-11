<template>
    <div class="start-screen" >
        <Start class="start"/>
        <div 
            class="start-button" 
            @click="triggerStart()">
            <StartButton />
        </div>
        <div class="start-under" />
    </div>
</template>

<script>
    import Start from '../svg/start.svg'
    import StartButton from '../svg/start-button.svg'

    export default {
        name: 'StartScreen',
        components: {
            Start,
            StartButton
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
        width: 100vw;
        height: 100vh;
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