<template>
    <div class="modal" @click.self.prevent="closeModal()">
        <div class="modal__item">
            <div class="modal__image">
                <img :src="img" width="100%" />
            </div>
            <div class="modal__content">
                <qr-code 
                    class="modal__qr"
                    :text="`sveza-new-year.com${link}`" 
                    :size="120" />
                <a 
                    class="modal__button" 
                    :href="link" 
                    target="_blank" 
                    download>
                    <Button name="button-download" hasText />
                </a>
                <span class="modal__link">
                    {{ 'sveza-new-year.com' + link }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/common/Button.vue'
export default {
    name: 'Modal',
    components: {
        Button
    },
    props: {
        link: {
            type: String
        },
        img: {
            type: String,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        escListener(e) {
            if (e.keyCode == 27) this.closeModal()
        }
    },
    mounted() {
        document.addEventListener("keyup", this.escListener)
    },
    destroyed() {
        document.removeEventListener("keyup", this.escListener)
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .75);

        &__item {
            display: flex;
            position: relative;
            z-index: 1100;
        }

        &__image {
            align-self: center;
            width: 500px;
        }

        &__content {
            position: absolute;
            top: 15%;
            left: 10%;
        }

        &__button {
            display: block;
            margin-top: 25px;
            position: relative;
            width: 130px;
            height: 55px;
        }

        &__link {
            display: block;
            color: #2e358b;
            font-size: 12px;
            padding-left: 10px;
            width: 35%;
            word-wrap: break-word;
        }

         @media (max-width: 1000px) and (min-aspect-ratio: 1/1) {
            align-items: flex-start;
            overflow: scroll;
        }
    }
</style>