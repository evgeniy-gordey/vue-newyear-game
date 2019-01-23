<template>
    <div class="end-screen">
        <EndRu class="end" v-if="$lang === 'ru'" />
        <EndEn class="end" v-if="$lang === 'en'" />
        <div class="end-button">
            <router-link :to="path" target="_blank">
                <Button name="button-end" hasText />
            </router-link>
        </div>
        <div class="end-under" />
    </div>
</template>

<script>
    import EndRu from '@/svg/ru/end.svg'
    import EndEn from '@/svg/en/end.svg'
    import Button from '@/components/interface/Button.vue'

    export default {
        name: 'endScreen',
        components: {
            EndRu,
            EndEn,
            Button
        },
        computed: { 
            path() {
                return (this.$lang === 'ru') ? '/ru/gifts' : '/gifts'
            }
        }
    }
</script>

<style lang="scss" scoped>
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