<template>
    <div 
        class="active-element"
        :class="{ 'active-element_hover': isHover, 'active-element_clicked': isClicked, 'active-element_found': wasClicked }">
        <component 
            :is="componentLoader" 
            class="active-element__svg"
            :style="{ top: data.top, left: data.left, zIndex: isClicked ? 1110 : data.zIndex + 2 }" />
        <div 
            class="active-element__tooltip"
            :style="{ top: data.top, left: data.left, width: data.tooltip.width, marginTop: data.tooltip.marginTop, marginLeft: data.tooltip.marginLeft, zIndex: 1000 }">
            <component :is="tooltipLoader" />
        </div>
        <div class="active-element__modal-wrapper">
            <div 
                class="active-element__modal-overlay"
                @mouseenter="closeModal()" />
            <div 
                class="active-element__modal"
                :style="{ top: data.top, left: data.left, width: data.modal.width, height: data.modal.height, marginTop: data.modal.marginTop, marginLeft: data.modal.marginLeft, zIndex: data.modal.zIndex ? 1100 + data.modal.zIndex : 1100 }">
                <component :is="modalLoader" />
            </div>
        </div>
        <audio :ref="data.name" :src="`/sounds/${data.name}.mp3`" />
    </div>
</template>

<script>
    export default {
        name: 'ActiveElementsItem',
        props: {
            data: {
                type: Object
            },
            increaseCounter: {
                type: Function
            },
            isMute: {
                type: Boolean
            }
        },
        data: () => {
            return {
                isHover: false,
                isClicked: false,
                wasClicked: false,
                el: {},
            }
        },
        computed: {
            componentLoader () { 
                return () => import(`../svg/active-elements/${this.data.name}.svg`)
            },
            tooltipLoader () {
                return () => import(`../svg/tooltips/${this.data.name}.svg`)
            },
            modalLoader () {
                return () => import(`../svg/modals/${this.data.name}.svg`)
            }
        },
        methods: {
            mouseEnterHandler () {
                this.isHover = true
                if (!this.isMute) this.$refs[this.data.name].play()
            },
            mouseLeaveHandler () {
                this.isHover = false
            },
            openModal () {
                this.isClicked = true
                this.isHover = false
                if (this.data.isCounted && !this.wasClicked) this.increaseCounter(this.data.title)
                this.wasClicked = true
            },
            closeModal () {
                this.isClicked = false;
            }
        },
        watch: {
            isMute(value) {
                this.$refs[this.data.name].volume = !value
            }
        },
        mounted() {
            this.componentLoader().then(() => {
                this.$nextTick(() => {
                    this.el = this.$el.querySelector(`.${this.data.name}`)
                    this.el.addEventListener('mouseenter', this.mouseEnterHandler)
                    this.el.addEventListener('mouseleave', this.mouseLeaveHandler)
                    this.el.addEventListener('click', this.openModal)
                })
            })
        }
    }
</script>

<style lang="css">
    .active-element__svg {
        position: absolute;
        pointer-events: none;
    }

    .active-element__svg g {
        cursor: pointer;
        pointer-events: all;
    }

    .active-element_hover .active-element__tooltip {
        opacity: 1; 
        z-index: 500;
        display: block;
        transform: translate3d(0, 0, 0)
    }

    .active-element_clicked .active-element__modal {
        opacity: 1;
        display: block;
        transform: translate3d(0, 0, 0)
    }

    .active-element_clicked .active-element__svg g {
        pointer-events: none;
    }

    .active-element_clicked .active-element__modal-overlay {
        z-index: 990;
    }

    .active-element_found .active-element__svg .outline {
        fill: #fff;
    }

    .active-element__tooltip {
        opacity: 0; 
        z-index: -1;
        display: none;
        position: absolute;
        width: 14%;
        transition: opacity 0.5s ease;
    }

    .active-element__modal-overlay {
        display: block;
        position: absolute;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
    }

    .active-element__modal {
        opacity: 0;
        display: none;
        position: absolute;
        transition: opacity 0.5s ease;
    }

    .resize {
        width: 100%;
    }

</style>