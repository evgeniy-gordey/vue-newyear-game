<template>
    <div class="button">
        <img class="button__main" width="100%" :src="mainSrc">
        <img class="button__hover" width="100%" :src="hoverSrc">
        <img class="button__clicked" width="100%" :src="clickedSrc">
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            hasText: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                required: true
            }
        },
        computed: {
            path() {
                return this.hasText ? 
                    `/images/${this.$lang}/${this.name}/` :
                    `/images/${this.name}/`
            },
            mainSrc() {
                return `${this.path}/button.png`
            },
            hoverSrc() {
                return `${this.path}/button-hover.png`
            },
            clickedSrc() {
                return `${this.path}/button-clicked.png`
            },
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        cursor: pointer;

        &__main {
            display: block;
            position: absolute;
            top: 0;
        }

        &__hover {
            display: none;
            position: absolute;
            top: 0;
        }

        &__clicked {
            display: none;
            position: absolute;
            top: 0;
        }

        &:hover &__hover {
            display: block;
        }
        &:hover &__main {
            display: none;
        }

        &:active &__clicked {
            display: block;                
        }

        &:active &__hover {
            display: none;
        }
    }

    @-moz-document url-prefix() {
        .button:active .button__clicked {
            display: none !important;
        }
    }
</style>