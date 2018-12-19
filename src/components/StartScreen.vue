<template>
    <div class="start-screen" >
        <StartRu class="start" v-if="lang === 'ru'" />
        <StartEn class="start" v-if="lang === 'en'" />
        <Button 
            :main="`/images/${lang}/button-start/button.png`"
            :hover="`/images/${lang}/button-start/button-hover.png`"
            :clicked="`/images/${lang}/button-start/button-clicked.png`"
            @click.native="triggerStart()"
            class="start-button" />
        <div class="start-under" />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    import StartRu from '../svg/ru/start.svg'
    import StartEn from '../svg/en/start.svg'
    import Button from './interface/Button.vue'

    export default {
        name: 'StartScreen',
        components: {
            StartRu,
            StartEn,
            Button
        },
        computed: mapGetters(['lang']),
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