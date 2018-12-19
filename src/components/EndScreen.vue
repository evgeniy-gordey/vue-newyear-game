<template>
    <div class="end-screen" >
        <EndRu class="end" v-if="lang === 'ru'" />
        <EndEn class="end" v-if="lang === 'en'" />
        <div 
            class="end-button">
            <router-link to="/gifts" target="_blank">
                <Button
                    :main="`/images/${lang}/button-end/button.png`" 
                    :hover="`/images/${lang}/button-end/button-hover.png`" 
                    :clicked="`/images/${lang}/button-end/button-clicked.png`"
                    @mouseup.native="goToGifts()" />
            </router-link>
        </div>
        <div class="end-under" />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import EndRu from '../svg/ru/end.svg'
    import EndEn from '../svg/en/end.svg'
    import Button from './interface/Button.vue'

    export default {
        name: 'endScreen',
        components: {
            EndRu,
            EndEn,
            Button
        },
        computed: mapGetters(['lang']),
        methods: {
            goToGifts() {
                this.$router.push({ path: '/gifts' })
            }
        }
    }
</script>

<style lang="css" scoped>
    .end-under {
        z-index: 9900;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }

    .end {
        z-index: 10000;
        position: absolute;
        width: 50%;
        top: 25%;
        left: 25%;
    }

    .end-button {
        position: absolute;
        z-index: 10010;
        width: 20%;
        top: 70%;
        left: 40%;
        cursor: pointer;
    }
</style>