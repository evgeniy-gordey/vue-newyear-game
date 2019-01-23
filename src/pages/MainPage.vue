<template>
    <div class="main">
        <div class="main__background-top" />
        <div class="main__background-bottom" />
        <div class="main__wrapper">
            <StaticElements />
            <ActiveElements 
                :allElements="allElements" 
                :increaseCounter="addFoundElement"  />
            <AnimatedElements v-if="isStarted" />
            <Counter 
                :foundElements="foundElements"
                :currentCount="currentCount"
                :maxCount="maxCount" />
            <StartScreen 
                v-if="!isStarted"
                :triggerStart="handleStartGame" />
            <EndScreen 
                v-if="isEnded" />
            <MuteSound />
            <audio ref="background" src="/sounds/background.mp3" loop />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    import ActiveElements from '@/components/main/ActiveElements.vue'
    import StaticElements from '@/components/main/StaticElements.vue'
    import AnimatedElements from '@/components/main/AnimatedElements.vue'
    import StartScreen from '@/components/main/StartScreen.vue'
    import EndScreen from '@/components/main/EndScreen.vue'
    import Counter from '@/components/interface/Counter.vue'
    import MuteSound from '@/components/interface/MuteSound.vue'

    export default {
        name: 'MainPage',
        components: {
            ActiveElements,
            StaticElements,
            AnimatedElements,
            StartScreen,
            EndScreen,
            Counter,
            MuteSound
        },
        computed: {
            ...mapGetters([
                'isMuted', 'isStarted', 'allElements', 'foundElements' 
            ]),
            currentCount() {
                return this.foundElements.length
            },
            maxCount() {
                return this.allElements.filter(item => item.isCounted).length
            },
            isEnded() {
                return this.currentCount === this.maxCount
            }
        },
        methods: {
            ...mapMutations([
                'startGame', 'addFoundElement'
            ]),
            handleStartGame() {
                this.startGame()
                this.$refs.background.play()
            }
        },
        watch: {
            isMuted(value) {
                this.$refs.background.volume = !value
            }
        }
    }
</script>

<style lang="scss">
    .main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow-x: hidden;
        justify-content: center;

        @media (min-aspect-ratio: 16/9) {
            justify-content: flex-start;
        }

        @media (max-aspect-ratio: 16/9) {
            overflow: hidden;
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            position: relative;
            flex: 0 0 auto;
        }

        &__background-top {
            position: absolute;
            top: 0;
            height: 50vh;
            width: 100%;
            background: #1e3e4f;
        }

        &__background-bottom {
            position: absolute;
            top: 50%;
            height: 50vh;
            width: 100%;
            background: #b0d2e3;
        }
    }
</style>
