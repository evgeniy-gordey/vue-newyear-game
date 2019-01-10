<template>
    <div class="mute-sound">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.7527 101.54407" @click="triggerIsMute()">
            <path d="M4514.66667,114.08549V147.1281a3.73809,3.73809,0,0,0,3.73809,3.73809h47.02381l21.924,23.41887a3.07167,3.07167,0,0,0,5.314-2.09926V86.01261a3.07167,3.07167,0,0,0-5.14087-2.27014l-28.2877,25.7837-40.90843.822A3.73808,3.73808,0,0,0,4514.66667,114.08549Z" transform="translate(-4514.66667 -77.9724)" style="fill:#fff"/>
            <g class="sound-on" :class="{ 'mute-sound_active': !this.isMute }">
                <path d="M4605.57324,156.88219a2.12622,2.12622,0,0,1-1.76465-3.30908,44.05569,44.05569,0,0,0-2.06347-51.77832,2.12591,2.12591,0,0,1,3.334-2.63868,48.3084,48.3084,0,0,1,2.2627,56.78321A2.12391,2.12391,0,0,1,4605.57324,156.88219Z" transform="translate(-4514.66667 -77.9724)" fill="transparent" />
                <path d="M4611.57324,179.51646a4.25194,4.25194,0,0,1-3.05078-7.21337,62.03886,62.03886,0,0,0-.6543-87.07227,4.252,4.252,0,1,1,6.01368-6.0127,70.54206,70.54206,0,0,1,.74218,99.00782A4.23715,4.23715,0,0,1,4611.57324,179.51646Z" transform="translate(-4514.66667 -77.9724)" fill="transparent" />
            </g>
            <g class="sound-off" :class="{ 'mute-sound_active': this.isMute }">
                <path d="M4633.168,148.97545a4.24065,4.24065,0,0,1-3.06934-1.30811l-28.14746-29.33349a4.25219,4.25219,0,0,1,6.13672-5.8877l28.14746,29.3335a4.252,4.252,0,0,1-3.06738,7.1958Z" transform="translate(-4514.66667 -77.9724)" fill="transparent" />
                <path d="M4605.01855,148.97545a4.252,4.252,0,0,1-3.06738-7.1958l28.14746-29.3335a4.25219,4.25219,0,0,1,6.13672,5.8877l-28.14746,29.33349A4.24065,4.24065,0,0,1,4605.01855,148.97545Z" transform="translate(-4514.66667 -77.9724)" fill="transparent" />
            </g>
        </svg>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'MuteSound',
        computed: mapGetters(['isMute']),
        methods: mapMutations(['triggerIsMute'])
    }
</script>

<style lang="scss" scoped>
    .mute-sound {
        position: absolute;
        top: 5%;
        right: 11%;
        width: 2%;
        z-index: 300;

        & svg {
            position: absolute;
            cursor: pointer;
        }

        &_active path {
            fill: #fff;
        }
    }
</style>