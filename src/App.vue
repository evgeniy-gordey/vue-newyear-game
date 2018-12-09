<template>
  <div id="app">
    <div class="wrapper">
      <div class="counter">
        <span>{{ counter }} / {{ allElements }}</span>
      </div>
      <Background class="bg" />
      <House class="house" />
      <Roof class="roof"/>
      <active-element 
        v-for="element in activeElements" 
        :key="element.name"
        :increaseCounter="increaseCounter"
        :data="element.data" />
    </div>
  </div>
</template>

<script>
import Background from './svg/background.svg'
import House from './svg/house.svg'
import Roof from './svg/roof.svg'
import ActiveElement from './components/ActiveElement.vue'

export default {
  name: 'app',
  components: {
    Background,
    House,
    Roof,
    ActiveElement
  },
  data: () => {
    return {
      counter: 0,
      activeElements: [
        {
          data: {
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
          }
        },
        {
          data: {
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
          }
        },
        {
          data: {
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
          }
        },
        {
          data: {
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
        }
      ]
    }
  },
  computed: {
    allElements() {
      return this.activeElements.filter(item => item.data.click).length
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
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

.bg {
  z-index: 100;
}

.house {
  position: absolute;
  top: 18.9%;
  left: 8.3%;
  width: 75%;
  z-index: 200;
}

.roof {
  position: absolute;
  pointer-events: none;
  width: 6.8%;
  top: 28.9%;
  left: 26.5%;
  z-index: 300;
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
