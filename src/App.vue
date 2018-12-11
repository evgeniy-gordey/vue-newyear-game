<template>
    <div id="app">
        <div class="wrapper">
            <div class="counter">
                <span>{{ counter }} / {{ allElements }}</span>
            </div>
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

    export default {
        name: 'app',
        components: {
            ActiveElements,
            StaticElements,
            StartScreen,
        },
        data: () => {
            return {
                isStarted: false,
                counter: 0,
                elementsList: [
                    {
                        name: 'snowman',
                        click: false,
                        path: 'active-elements/empty/snowman.svg',
                        tooltipPath: 'tooltips/snowman.svg',
                        modalPath: 'modals/snowman.svg',
                        top: '71%',
                        left: '15.3%',
                        width: '14.2%',
                        zIndex: 250,
                        modal: {
                            width: '12.2%',
                            height: '35%',
                            marginLeft: '0.8%',
                            marginTop: '-7.5%',
                        },
                        tooltip: {
                            width: '14.2%',
                            marginLeft: '-1.2%',
                            marginTop: '-3%',
                        }
                    },
                    {
                        name: 'chimney',
                        click: false,
                        path: 'active-elements/empty/chimney.svg',
                        tooltipPath: 'tooltips/chimney.svg',
                        modalPath: 'modals/chimney.svg',
                        top: '18.7%',
                        left: '32.3%',
                        width: '5.57%',
                        zIndex: 250,
                        modal: {
                            width: '12.2%',
                            height: '20%',
                            marginTop: '-7.3%',
                            marginLeft: '-3%',
                        },
                        tooltip: {
                            width: '14.2%',
                            marginTop: '-5%',
                            marginLeft: '-3%',
                        }
                    },
                    {
                        name: 'attic-boxes',
                        click: false,
                        path: 'active-elements/empty/attic-boxes.svg',
                        tooltipPath: 'tooltips/attic-boxes.svg',
                        modalPath: 'modals/attic-boxes.svg',
                        top: '26.4%',
                        left: '27.89%',
                        width: '6.15%',
                        zIndex: 260,
                        modal: {
                            width: '12.2%',
                            height: '35%',
                            marginTop: '-4.5%',
                            marginLeft: '-1.2%',
                        },
                        tooltip: {
                            width: '14.2%',
                            marginTop: '-4%',
                            marginLeft: '-1.2%',
                        }
                    },
                    {
                        name: 'ship',
                        click: true,
                        path: 'active-elements/normal/ship.svg',
                        tooltipPath: 'tooltips/ship.svg',
                        modalPath: 'modals/ship.svg',
                        top: '51.85%',
                        left: '6.1%',
                        width: '17%',
                        zIndex: 240,
                        modal: {
                            width: '12.2%',
                            height: '35%',
                            marginTop: '-2%',
                            marginLeft: '-2.2%',
                        },
                        tooltip: {
                            width: '14.2%',
                            marginTop: '0',
                            marginLeft: '0',
                        }
                    }
                ]
            }
        },
        computed: {
            allElements() {
                return this.elementsList.filter(item => item.click).length
            }
        },
        methods: {
            increaseCounter() {
                this.counter++
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

    .counter {
        position: absolute;
        color: #fff;
        font-size: 20px;
        top: 5%;
        left: 5%;
        z-index: 200;
    }
</style>
