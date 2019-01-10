 <template>
    <div class="active-elements" v-if="lang">
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
    import ActiveElementsItem from '@/components/main/ActiveElementsItem.vue'
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
                type: Function,
                required: true
            },
            isMute: {
                type: Boolean,
                default: true
            }
        },
        computed: mapGetters(['lang'])
    }
</script>