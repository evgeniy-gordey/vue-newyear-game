<template>
    <div class="counter">
        <span 
            :style="{ fontSize: counterFontSize + 'px', lineHeight: counterFontSize * 1.4 + 'px' }">
            {{ currentCount }} / {{ maxCount }}
        </span>
        <ul>
            <li 
                v-for="element in foundedElements" 
                :key="element"
                :style="{ fontSize: spanFontSize + 'px', lineHeight: spanFontSize * 1.4 + 'px' }">
                <i class="counter__check">&#10003; </i>
                <span >
                    {{ element }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        props: {
            currentCount: {
                type: Number,
                default: 0
            },
            maxCount: {
                type: Number,
                default: 0
            },
            foundedElements: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                spanFontSize: 12,
                counterFontSize: 20
            }
        },
        mounted() {
            let globalWidth = window.innerWidth
            this.spanFontSize = globalWidth * 0.01
            this.counterFontSize = globalWidth * 0.025
        }
    }
</script>

<style lang="css" scoped>
    .counter {
        position: absolute;
        color: #fff;
        font-size: 20px;
        max-width: 17%;
        top: 5%;
        left: 3.5%;
        z-index: 300;
    }

    .counter ul {
        padding: 0;
        list-style: none;
        font-size: 10px;
    }
    
    .counter__check {
        color: green;
    }
</style>