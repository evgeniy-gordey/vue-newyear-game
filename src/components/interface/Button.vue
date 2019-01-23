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
            mainSrc() {
                return this.hasText ? 
                    `/images/${this.$lang}/${this.name}/button.png` :
                    `/images/${this.name}/button.png`
            },
            hoverSrc() {
                return this.hasText ? 
                    `/images/${this.$lang}/${this.name}/button-hover.png` :
                    `/images/${this.name}/button-hover.png`
            },
            clickedSrc() {
                return this.hasText ? 
                    `/images/${this.$lang}/${this.name}/button-clicked.png` :
                    `/images/${this.name}/button-clicked.png`
            },
        }
    }
</script>

<style lang="css" scoped>
    
    .button__main {
        display: block;
        position: absolute;
        top: 0;
        z-index: 110;
    }

    .button__hover {
        display: none;
        position: absolute;
        top: 0;
        z-index: 120;
    }

    .button__clicked {
        display: none;
        position: absolute;
        top: 0;
        z-index: 130;
    }

    .button:hover .button__hover {
        display: block;
    }
    .button:hover .button__main {
        display: none;
    }

    .button:active .button__clicked {
        display: block;
    }

    @-moz-document url-prefix() {
        .button:active .button__clicked {
            display: none !important;
        }
    }
</style>