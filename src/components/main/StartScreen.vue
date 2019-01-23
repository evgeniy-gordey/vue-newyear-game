<template>
    <div class="start-screen" >
        <StartRu class="start" v-if="$lang === 'ru'" />
        <StartEn class="start" v-if="$lang === 'en'" />
        <Button 
            class="start-button"
            @click.native="triggerStart()"
            name="button-start"
            hasText />
        <div class="start-under" />
    </div>
</template>

<script>
    import StartRu from '@/svg/ru/start.svg'
    import StartEn from '@/svg/en/start.svg'
    import Button from '@/components/interface/Button.vue'

    export default {
        name: 'StartScreen',
        components: {
            StartRu,
            StartEn,
            Button
        },
        props: {
            triggerStart: {
                type: Function
            }
        }
    }
</script>

<style lang="scss" scoped>
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