<template>
    <div class="mobile-wallpapers">
        <carousel-3d 
            v-if="slider.width"
            class="slider"
            :width="slider.width"
            :height="slider.height"
            :space="slider.space"
            :perspective="0"
            :controls-visible="true"
            :controls-prev-html="'<img height=100% src=/images/left-arrow.png />'" 
            :controls-next-html="'<img height=100% src=/images/right-arrow.png />'" 
            :controls-width="slider.arrowsWidth"
            :controls-height="slider.sarrowHeight"
            @after-slide-change="this.changeSlide" >
            <slide v-for="(slide, i) in wallpapers" :index="i" :key="i">
                <img :src="`/images/gallery/mobile-${i + 1}.jpg`" width="100%" alt="">
            </slide>
        </carousel-3d>

        <Button 
            class="button button_android-wp"
            @click.native="openModal('android')"
            name="button-android"
            hasText />
        <Button 
            class="button button_iphone-wp"
            @click.native="openModal('iphone')"
            name="button-iphone"
            hasText />

        <Modal 
            v-if="isModalOpened && modal.android" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/android-wp.png`"
            :link="`/images/sveza-tel-0${currentWallpaper}.jpg`">
        </Modal>

        <Modal 
            v-if="isModalOpened && modal.iphone" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/iphone-wp.png`"
            :link="`/images/sveza-tel-0${currentWallpaper}.jpg`">
        </Modal>

    </div>
</template>

<script>
    import Modal from '@/components/common/Modal.vue'
    import Button from '@/components/common/Button.vue'

    export default {
        name: 'MobileWallpapers',
        components: {
            Modal,
            Button
        },
        data() {
            return {
                slider: {
                    width: null,
                    height: null,
                    space: null,
                    arrowsWidth: null,
                    arrowsHeight: null
                },
                wallpapers: [
                    "/images/sveza-tel-01.jpg",
                    "/images/sveza-tel-02.jpg",
                    "/images/sveza-tel-03.jpg",
                    "/images/sveza-tel-04.jpg",
                    "/images/sveza-tel-05.jpg",
                ],
                currentWallpaper: 1,
                isModalOpened: false,
                modal: {
                    android: false,
                    iphone: false
                }
            }
        },
        methods: {
            changeSlide(index) { 
                this.currentWallpaper = index + 1
            },
            openModal(target) {
                this.modal[target] = true
                this.isModalOpened = true
                document.body.className = 'modal-opened'
            },
            closeModal() {
                this.modal = {
                    android: false,
                    iphone: false
                }
                this.isModalOpened = false
                document.body.className = ''
            }
        },
        mounted() {
            let globalWidth = window.innerWidth

            this.slider = {
                width: globalWidth * 0.15,
                height: globalWidth * 0.3,
                space: globalWidth * 0.08,
                arrowsWidth: globalWidth * 0.08,
                arrowsHeight: globalWidth * 0.05
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slider {
        position: absolute !important;
        top: 35% !important;
        width: 50% !important;
        left: 10% !important;
    }

    .button {
        position: absolute;
        width: 15%;
    }

    .button_android-wp {
        top: 50%;
        left: 64%
    }

    .button_iphone-wp {
        top: 53%;
        left: 64%
    }
</style>