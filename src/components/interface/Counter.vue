<template>
    <div class="counter">
        <span>{{ currentCount }} / {{ maxCount }}</span>
        <ul>
            <li v-for="element in foundedElements" :key="element">
                <i class="counter__check">&#10003; </i>
                <span>{{ element }}</span>
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
        left: 5%;
        z-index: 200;
    }

    .counter ul {
        padding: 0;
        list-style: none;
        font-size: 18px;
    }
    
    .counter__check {
        color: green;
    }
</style>