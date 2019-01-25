<template>
    <div class="desktop-wallpapers">
        <!-- Carousel for desktop wallpapers -->
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
            :controls-height="slider.arrowsHeight"
            @after-slide-change="this.changeSlide" >
            <slide v-for="(slide, i) in wallpapers" :index="i" :key="i">
                <img :src="`/images/gallery/desktop-${i + 1}.jpg`" width="100%" alt="">
            </slide>
        </carousel-3d>

        <Button 
            class="button button_desktop"
            @click.native="openModal()"
            name="button-download"
            hasText />

        <Modal 
            v-if="isModalOpened" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/desktop-wp.png`"
            :link="`/images/sveza-tel-0${currentWallpaper}.jpg`">
        </Modal>
    </div>
</template>

<script>
    import Modal from '@/components/common/Modal.vue'
    import Button from '@/components/common/Button.vue'

    export default {
        name: 'DesktopWallpapers',
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
                    "/images/sveza-comp-01.jpg",
                    "/images/sveza-comp-02.jpg",
                    "/images/sveza-comp-03.jpg",
                    "/images/sveza-comp-04.jpg",
                    "/images/sveza-comp-05.jpg",
                ],
                currentWallpaper: 1,
                isModalOpened: false,
            }
        },
        methods: {
            changeSlide(index) { 
                this.currentWallpaper = index + 1
            },
            openModal() {
                this.isModalOpened = true
                document.body.className = 'modal-opened'
            },
            closeModal() {
                this.isModalOpened = false
                document.body.className = ''
            }
        },
        mounted() {
            let globalWidth = window.innerWidth

            this.slider = {
                width: globalWidth * 0.25,
                height: globalWidth * 0.15,
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
        top: 58% !important;
        width: 50% !important;
        left: 10% !important;
    }

    .button {
        position: absolute;
        width: 15%;
    }

    .button_desktop {
        top: 62%;
        left: 64%
    }
</style>