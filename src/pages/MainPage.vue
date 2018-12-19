<template>
    <div class="main">
        <div class="main__background-top" />
        <div class="main__background-bottom" />
        <div class="main__wrapper">
            <StaticElements />
            <ActiveElements 
                :elementsList="elementsList" 
                :increaseCounter="addFoundedElement" 
                :isMute="isMute" />
            <AnimatedElements v-if="isStarted" />
            <Counter 
                :foundedElements="foundedElements"
                :currentCount="currentCount"
                :maxCount="maxCount" />
            <StartScreen 
                v-if="!isStarted"
                :triggerStart="handleStartGame" />
            <EndScreen 
                v-if="isEnded" 
                class="app__end-screen" />
            <MuteSound />
            <audio ref="background" src="/sounds/background.mp3" loop />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    import ActiveElements from '../components/ActiveElements.vue'
    import StaticElements from '../components/StaticElements.vue'
    import AnimatedElements from '../components/AnimatedElements.vue'
    import StartScreen from '../components/StartScreen.vue'
    import EndScreen from '../components/EndScreen.vue'
    import Counter from '../components/interface/Counter.vue'
    import MuteSound from '../components/interface/MuteSound.vue'

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
                'lang', 'isMute', 'isStarted', 'elementsList', 'foundedElements' 
            ]),
            currentCount() {
                return this.foundedElements.length
            },
            maxCount() {
                return this.elementsList.filter(item => item.isCounted).length
            },
            isEnded() {
                return this.currentCount === this.maxCount
            }
        },
        methods: {
            ...mapMutations([
                'startGame', 'addFoundedElement'
            ]),
            handleStartGame() {
                this.startGame()
                this.$refs.background.play()
            }
        },
        watch: {
            isMute(value) {
                this.$refs.background.volume = !value
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.commit('setLang', to.matched[0].meta.lang)
            })
        },
    }
</script>

<style lang="css">
    .main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow-x: hidden;
        justify-content: center;
    }

    .main__wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
        flex: 0 0 auto;
    }

    .main__background-top {
        position: absolute;
        top: 0;
        height: 50vh;
        width: 100%;
        background: #1e3e4f;
    }

    .main__background-bottom {
        position: absolute;
        top: 50%;
        height: 50vh;
        width: 100%;
        background: #b0d2e3;
    }

    @media (min-aspect-ratio: 16/9) {
        .main {
            justify-content: flex-start;
        }
    }

    @media (max-aspect-ratio: 16/9) {
        .main {
            overflow: hidden;
        }
    }
</style>
