 <template>
    <div class="active-elements">
        <ActiveElementsItem
            v-for="element in allElements" 
            :key="element.name"
            :increaseCounter="increaseCounter"
            :data="element" />
    </div>
</template>

<script>
    import ActiveElementsItem from '@/components/main/ActiveElementsItem.vue'

    export default {
        name: 'ActiveElements',
        components: {
            ActiveElementsItem
        },
        props: {
            allElements: {
                type: Array,
                default: () => []
            },
            increaseCounter: {
                type: Function,
                required: true
            }
        }
    }
</script>