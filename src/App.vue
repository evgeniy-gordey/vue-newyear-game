<template>
  <div id="app">
    <div class="wrapper">
      <Background class="bg" />
      <House class="house" />
      <Ship class="ship" />
      <active-element 
        v-for="element in activeElements" 
        :key="element.name"
        :data="element.data" />
    </div>
  </div>
</template>

<script>
import Background from './svg/background.svg'
import House from './svg/house.svg'
import Ship from './svg/ship.svg'
import ActiveElement from './components/ActiveElement.vue'

export default {
  name: 'app',
  components: {
    Background,
    House,
    Ship,
    ActiveElement
  },
  data: () => {
    return {
      activeElements: [
        {
          data: {
            name: 'snowman',
            title: 'Снеговик',
            motto: 'Здесь фанеры шаром покати - продолжайте искать',
            path: 'active-elements/empty/snowman.svg',
            top: '71%',
            left: '15.3%',
            width: '14.2%',
            zIndex: 250,
            modal: {
              width: '14.2%',
              height: '35%',
              marginLeft: '-1.2%',
              marginTop: '-6.5%',
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
            title: 'Вход для Санта Клауса',
            motto: 'Не отвлекайте Санту - ищите дальше',
            path: 'active-elements/empty/chimney.svg',
            top: '18.7%',
            left: '32.3%',
            width: '5.57%',
            zIndex: 250,
            modal: {
              width: '14.2%',
              height: '23%',
              marginLeft: '-3%',
              marginTop: '-9%',
            },
            tooltip: {
              width: '14.2%',
              marginLeft: '-3%',
              marginTop: '-5%',
            }
          }
        }
      ]
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

.ship {
  position: absolute;
  width: 21%;
  left: 6%;
  top: 52.6%;
  stroke: white;
  stroke-width: 5px;
}
</style>
