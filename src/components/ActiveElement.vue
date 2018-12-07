<template>
    <div 
        class="active-element"
        :class="{ 'active-element_hover': isHover, 'active-element_clicked': isClicked, 'active-element_found': wasClicked }">
        <component 
            :is="componentLoader" 
            class="active-element__svg"
            :style="{ top: data.top, left: data.left, width: data.width, zIndex: data.zIndex + 2 }"/>
        <div 
            class="active-element__tooltip"
            :style="{ top: data.top, left: data.left, width: data.tooltip.width, marginTop: data.tooltip.marginTop, marginLeft: data.tooltip.marginLeft, zIndex: data.zIndex }">
            <span>{{ data.title }}</span>
        </div>
        <div
            class="active-element__modal"
            :style="{ top: data.top, left: data.left, width: data.modal.width, height: data.modal.height, marginTop: data.modal.marginTop, marginLeft: data.modal.marginLeft, zIndex: data.zIndex + 1 }">
            <span class="active-element__title">{{ data.title }}</span>
            <span class="active-element__motto">{{ data.motto }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'activeElement',
        props: {
            data: {
                type: Object
            }
        },
        data: () => {
            return {
                isHover: false,
                isClicked: false,
                wasClicked: false,
                el: {}
            }
        },
        computed: {
            componentLoader () { 
                return () => import(`../svg/${this.data.path}`)
            }
        },
        methods: {
            mouseEnterHandler () {
                this.isHover = true
            },
            mouseLeaveHandler () {
                this.isHover = false
            },
            clickHandler () {
                this.isClicked = true
                this.isHover = false
                this.el.removeEventListener('mouseenter', this.mouseEnterHandler)
                this.el.removeEventListener('mouseleave', this.mouseLeaveHandler)
                setTimeout(() => {
                    this.el.removeEventListener('click', this.clickHandler)
                    this.isClicked = false
                    this.wasClicked = true
                }, 3000);
            }
        },
        mounted() {
            this.componentLoader().then(() => {
                this.$nextTick(() => {
                    this.el = this.$el.querySelector(`.${this.data.name}`)
                    this.el.addEventListener('mouseenter', this.mouseEnterHandler)
                    this.el.addEventListener('mouseleave', this.mouseLeaveHandler)
                    this.el.addEventListener('click', this.clickHandler)
                })
            })
        }
    }
</script>

<style lang="css">
    .active-element__svg {
        position: absolute
    }

    .active-element__svg g {
        cursor: pointer;
    }

    .active-element_hover .active-element__tooltip {
        opacity: 1; 
    }

    .active-element_clicked .active-element__modal {
        opacity: 1;
    }

    .active-element_found .active-element__svg {
        filter: drop-shadow(0 0 10px #fff); 
    }

    .active-element_found {
        pointer-events: none;
    }

    .active-element__tooltip {
        display: flex;
        text-align: center;
        opacity: 0; 
        position: absolute;
        justify-content: center;
        background: #fff;
        padding: 4px 0;
        border-radius: 5px;
        color: #D86600;
        box-shadow: 2px 0 0 1px #000;
        transition: opacity 0.5s ease;
    }

    .active-element__modal {
        display: flex;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        position: absolute;
        background: #fff;
        padding: 4px 0;
        border-radius: 5px;
        box-shadow: 2px 0 0 1px #000;
        transition: opacity 0.5s ease;
    }

    .active-element__title {
        text-align: center;
        color: #D86600;
        padding-bottom: 10px;
    }

    .active-element__motto {
        text-align: center;
        color: #7A923C;
        font-size: 10px;
        padding: 4px 0;
        font-weight: bold;
    }

</style>