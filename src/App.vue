<template>
    <div id="app">
        <div class="wrapper">
            <Counter 
                :currentCount="currentCount"
                :maxCount="maxCount" />
            <StartScreen 
                v-if="!isStarted"
                :triggerStart="triggerStart" />
            <StaticElements />
            <ActiveElements 
                :elementsList="elementsList" 
                :increaseCounter="increaseCounter"/>
        </div>
    </div>
</template>

<script>
    import ActiveElements from './components/ActiveElements.vue'
    import StaticElements from './components/StaticElements.vue'
    import StartScreen from './components/StartScreen.vue'
    import Counter from './components/Counter.vue'

    import elements from './elements.json'

    export default {
        name: 'app',
        components: {
            ActiveElements,
            StaticElements,
            StartScreen,
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

<style>
    body {
        background: #225d78;
        margin: 0;
    }

    #app {
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .wrapper {
        display: grid;
        position: relative;
        width: 100%;
    }
</style>
