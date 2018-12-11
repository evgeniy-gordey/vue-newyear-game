<template>
    <div class="active-elements">
        <ActiveElementsItem
            v-for="element in elementsList" 
            :key="element.name"
            :increaseCounter="increaseCounter"
            :data="element" />
    </div>
</template>

<script>
    import ActiveElementsItem from './ActiveElementsItem.vue'
    export default {
        name: 'ActiveElements',
        components: {
            ActiveElementsItem
        },
        props: {
            elementsList: {
                type: Array,
                default: () => []
            },
            increaseCounter: {
                type: Function
            }
        }
    }
</script>

<style lang="css" scoped>
    
</style>