 <template>
    <div class="active-elements">
        <ActiveElementsItem
            v-for="element in elementsList" 
            :key="element.name"
            :increaseCounter="increaseCounter"
            :data="element"
            :isMute="isMute" />
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
            },
            isMute: {
                type: Boolean
            }
        }
    }
</script>

<style lang="css" scoped>
    
</style>