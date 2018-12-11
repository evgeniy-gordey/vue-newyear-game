<template>
    <div class="counter">
        <span>{{ currentCount }} / {{ maxCount }}</span>
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
            }
        }
    }
</script>

<style lang="css" scoped>
    .counter {
        position: absolute;
        color: #fff;
        font-size: 20px;
        top: 5%;
        left: 5%;
        z-index: 200;
    }
</style>