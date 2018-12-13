<template>
    <div id="app" class="app">
        <Counter 
            :foundedElements="foundedElements"
            :currentCount="currentCount"
            :maxCount="maxCount" />
        <StartScreen 
            v-if="!isStarted"
            :triggerStart="triggerStart" />
        <StaticElements />
        <ActiveElements 
            :elementsList="elementsList" 
            :increaseCounter="increaseCounter"/>
        <EndScreen 
            v-if="isEnded" 
            class="app__end-screen"
            />
    </div>
</template>

<script>
    import ActiveElements from './components/ActiveElements.vue'
    import StaticElements from './components/StaticElements.vue'
    import StartScreen from './components/StartScreen.vue'
    import EndScreen from './components/EndScreen.vue'
    import Counter from './components/Counter.vue'

    import elements from './elements.json'

    export default {
        name: 'app',
        components: {
            ActiveElements,
            StaticElements,
            StartScreen,
            EndScreen,
            Counter
        },
        data: () => {
            return {
                isStarted: false,
                elementsList: elements,
                foundedElements: []
            }
        },
        computed: {
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
            increaseCounter(name) {
                this.foundedElements.push(name)
            },
            triggerStart() {
                this.isStarted = true
            }
        }
    }
</script>

<style lang="css">
    body {
        background: #b0d2e3;
        margin: 0;
        width: 100%;
        height: 100vh;
    }

    .app {
        width: 100%;
        display: grid;
        position: relative;
    }
</style>
