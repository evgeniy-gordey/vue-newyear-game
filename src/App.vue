<template>
    <div id="app" class="app">
        <Counter 
            :currentCount="currentCount"
            :maxCount="maxCount" />
        <StartScreen 
            v-if="false"
            :triggerStart="triggerStart" />
        <StaticElements />
        <ActiveElements 
            :elementsList="elementsList" 
            :increaseCounter="increaseCounter"/>
        <EndScreen 
            v-if="false" 
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
                currentCount: 0,
                elementsList: elements
            }
        },
        computed: {
            maxCount() {
                return this.elementsList.filter(item => item.isCounted).length
            },
            isEnded() {
                return this.currentCount == this.maxCount
            }
        },
        methods: {
            increaseCounter() {
                this.currentCount++
            },
            triggerStart() {
                this.isStarted = true
            }
        }
    }
</script>

<style lang="css">
    body {
        background: #225d78;
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
