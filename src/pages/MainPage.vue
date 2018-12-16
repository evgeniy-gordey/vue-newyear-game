<template>
    <div class="main">
        <StaticElements />
        <ActiveElements 
            :elementsList="elementsList" 
            :increaseCounter="addFoundedElement" 
            :isMute="isMute" />
        <AnimatedElements />
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
        <ChangeLanguage />
        <MuteSound />
        <audio ref="background" src="/sounds/background.mp3" loop />
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
    import ChangeLanguage from '../components/interface/ChangeLanguage.vue'
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
            ChangeLanguage,
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
                // this.$refs.background.play()
            }
        },
        watch: {
            isMute(value) {
                this.$refs.background.volume = !value
            }
        },
    }
</script>

<style lang="css">
</style>
