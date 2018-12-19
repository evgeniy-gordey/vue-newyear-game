 <template>
    <div class="active-elements">
        <ActiveElementsItem
            v-for="element in elementsList" 
            :key="element.name"
            :increaseCounter="increaseCounter"
            :data="element"
            :isMute="isMute"
            :lang="lang" />
    </div>
</template>

<script>
    import ActiveElementsItem from './ActiveElementsItem.vue'
    import { mapGetters } from 'vuex'

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
        },
        computed: mapGetters(['lang'])
    }
</script>

<style lang="css" scoped>
    
</style>