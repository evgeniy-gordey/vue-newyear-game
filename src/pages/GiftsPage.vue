<template>
    <div class="gifts">
        <img src="/images/landing.png" width="100%" alt="landing">
        <carousel-3d 
            class="carousel" 
            :width="200"
            :height="300"
            :perspective="0"
            :controls-visible="true"
            @after-slide-change="this.handleChangeMobileSlider" >
            <slide :index="0">
                <img src="/images/mobile-wp-0.png" width="100%" alt="">
            </slide>
            <slide :index="1">
                <img src="/images/mobile-wp-1.png" width="100%" alt="">
            </slide>
            <slide :index="2">
                <img src="/images/mobile-wp-2.png" width="100%" alt="">
            </slide>
        </carousel-3d>
        <carousel-3d 
            class="carousel2" 
            :width="300"
            :height="200"
            :perspective="0"
            :controls-visible="true"
            @after-slide-change="this.handleChangeDesktopSlider" >
            <slide :index="0">
                <img src="/images/desktop-wp-0.png" width="100%" alt="">
            </slide>
            <slide :index="1">
                <img src="/images/desktop-wp-1.png" width="100%" alt="">
            </slide>
            <slide :index="2">
                <img src="/images/desktop-wp-2.png" width="100%" alt="">
            </slide>
        </carousel-3d>

        <img 
            src="/images/button.png" 
            class="button button_android-wp"
            @click="openModal('androidWp')">
        <img 
            src="/images/button.png" 
            class="button button_iphone-wp"
            @click="openModal('iphoneWp')">
        <img 
            src="/images/button.png" 
            class="button button_desktop"
            @click="openModal('desktopWp')">

        <div class="modal" v-if="isModalOpened" @click.prevent.self="closeModal()">
            <div class="modal__item modal__item_android-wp" v-if="modal.androidWp" >
                <img src="/images/modals/android-wp.png" alt="">
                <qr-code 
                    class="modal__qr"
                    size="120"
                    :text="'https://sveza-new-year.com/images/mobile-wp-' + mobileWallpaper + '.png'" />
            </div>
            <div class="modal__item modal__item_iphone-wp" v-if="modal.iphoneWp" >
                <img src="/images/modals/iphone-wp.png" alt="">
            </div>
            <div class="modal__item modal__item_desktop-wp" v-if="modal.desktopWp" >
                <img src="/images/modals/desktop-wp.png" alt="">
                <img 
                    src="/images/button.png" 
                    class="modal__button"
                    @click="downloadDesktop(); closeModal()">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'GiftsPage',
        data() {
            return {
                mobileWallpaper: 0,
                desktopWallpaper: 0,
                isModalOpened: false,
                modal: {
                    androidWp: false,
                    iphoneWp: false,
                    desktopWp: false,
                    androidSound: false,
                    iphoneSound: false
                }
            }
        },
        methods: {
            handleChangeMobileSlider(index) { 
                this.mobileWallpaper = index
            },
            handleChangeDesktopSlider(index) {
                this.desktopWallpaper = index
            },
            downloadDesktop() {
                let a = document.createElement("a");
                a.href = `/images/desktop-wp-${this.desktopWallpaper}.png`
                a.download = `sveza-wallpaper.png`;
                a.click()
                a.remove()
            },
            openModal(target) {
                this.modal[target] = true
                this.isModalOpened = true
            },
            closeModal() {
                this.modal = {
                    androidWp: false,
                    iphoneWp: false,
                    desktopWp: false,
                    androidSound: false,
                    iphoneSound: false
                }
                this.isModalOpened = false
            }
        }
    }
</script>

<style lang="css" scoped>
    .carousel {
        position: absolute;
        top: 33%;
        width: 50%;
        left: 10%;
    }

    .carousel2 {
        position: absolute;
        top: 53%;
        width: 50%;
        left: 10%;
    }

    .button {
        position: absolute;
        cursor: pointer;
        width: 15%;
    }

    .button_android-wp {
        top: 50%;
        left: 64%
    }

    .button_iphone-wp {
        top: 53.5%;
        left: 64%
    }

    .button_desktop {
        top: 62%;
        left: 64%
    }
    
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .75)
    }

    .modal__item {
        display: flex;
        position: relative;
    }

    .modal__button {
        position: absolute;
        cursor: pointer;
        width: 160px;
        top: 100px;
        left: 30px;
    }

    .modal__qr {
        position: absolute;
        top: 122px;
        left: 62px;
    }
</style>