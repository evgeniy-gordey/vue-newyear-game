<template>
    <div class="gifts">
        <img :src="'/images/' + lang + '/landing.png'" width="100%" alt="landing">

        <!-- Carousel for mobile wallpapers -->
        <carousel-3d 
            v-if="carousel.mobile.width"
            class="carousel"
            :width="carousel.mobile.width"
            :height="carousel.mobile.height"
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

        <!-- Carousel for desktop wallpapers -->
        <carousel-3d 
            v-if="carousel.desktop.width"
            class="carousel2" 
            :width="carousel.desktop.width"
            :height="carousel.desktop.height"
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

        <!-- Carousel for ringtones -->
        <carousel-3d 
            v-if="carousel.ringtones.width"
            class="carousel3" 
            :width="carousel.ringtones.width"
            :height="carousel.ringtones.height"
            :perspective="0"
            :controls-visible="true"
            @after-slide-change="this.handleChangeRingtoneSlider" >
            <slide :index="0">
                <img src="/images/ru/ringtones/ringtone-0.png" width="100%" alt="">
            </slide>
            <slide :index="1">
                <img src="/images/ru/ringtones/ringtone-1.png" width="100%" alt="">
            </slide>
            <slide :index="2">
                <img src="/images/ru/ringtones/ringtone-2.png" width="100%" alt="">
            </slide>
            <slide :index="3">
                <img src="/images/ru/ringtones/ringtone-3.png" width="100%" alt="">
            </slide>
            <slide :index="4">
                <img src="/images/ru/ringtones/ringtone-4.png" width="100%" alt="">
            </slide>
            <slide :index="5">
                <img src="/images/ru/ringtones/ringtone-5.png" width="100%" alt="">
            </slide>
            <slide :index="6">
                <img src="/images/ru/ringtones/ringtone-6.png" width="100%" alt="">
            </slide>
            <slide :index="7">
                <img src="/images/ru/ringtones/ringtone-7.png" width="100%" alt="">
            </slide>
            <slide :index="8">
                <img src="/images/ru/ringtones/ringtone-8.png" width="100%" alt="">
            </slide>
            <slide :index="9">
                <img src="/images/ru/ringtones/ringtone-9.png" width="100%" alt="">
            </slide>
        </carousel-3d>

        <img 
            src="/images/ru/button-android.png" 
            class="button button_android-wp"
            @click="openModal('androidWp')">
        <img 
            src="/images/ru/button-iphone.png" 
            class="button button_iphone-wp"
            @click="openModal('iphoneWp')">
        <img 
            src="/images/ru/button.png" 
            class="button button_desktop"
            @click="openModal('desktopWp')">
        <img 
            src="/images/hear-button.png" 
            class="button_hear"
            @click="playSound()">
        <img 
            src="/images/ru/button-android.png" 
            class="button button_android-ringtone"
            @click="openModal('androidRingtone')">
        <img 
            src="/images/ru/button-iphone.png" 
            class="button button_iphone-ringtone"
            @click="openModal('iphoneRingtone')">
        

        <div class="modal" v-if="isModalOpened" @click.prevent.self="closeModal()">
            <div class="modal__item modal__item_android-wp" v-if="modal.androidWp" >
                <img src="/images/ru/modals/android-wp.png" alt="">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/images/mobile-wp-' + mobileWallpaper + '.png'" />
            </div>
            <div class="modal__item modal__item_iphone-wp" v-if="modal.iphoneWp" >
                <img src="/images/ru/modals/iphone-wp.png" alt="">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/images/mobile-wp-' + mobileWallpaper + '.png'" />
            </div>
            <div class="modal__item modal__item_desktop-wp" v-if="modal.desktopWp" >
                <img src="/images/ru/modals/desktop-wp.png" alt="">
                <img 
                    src="/images/ru/button.png" 
                    class="modal__button"
                    @click="downloadDesktop(); closeModal()">
            </div>
            <div class="modal__item modal__item_android-ringtone" v-if="modal.androidRingtone" >
                <img src="/images/ru/modals/android-ringtone.png" alt="">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/sounds/gifts/basic/sound-' + ringtone + '.mp3'" />
            </div>
            <div class="modal__item modal__item_iphone-ringtone" v-if="modal.iphoneRingtone" >
                <img src="/images/ru/modals/iphone-ringtone.png" alt="">
                <img 
                    src="/images/ru/button.png" 
                    class="modal__button"
                    @click="downloadSound(); closeModal()">
            </div>
        </div>

        <audio ref="sound-0" src="/sounds/gifts/basic/sound-0.mp3" />
        <audio ref="sound-1" src="/sounds/gifts/basic/sound-1.mp3" />
        <audio ref="sound-2" src="/sounds/gifts/basic/sound-2.mp3" />
        <audio ref="sound-3" src="/sounds/gifts/basic/sound-3.mp3" />
        <audio ref="sound-4" src="/sounds/gifts/basic/sound-4.mp3" />
        <audio ref="sound-5" src="/sounds/gifts/basic/sound-5.mp3" />
        <audio ref="sound-6" src="/sounds/gifts/basic/sound-6.mp3" />
        <audio ref="sound-7" src="/sounds/gifts/basic/sound-7.mp3" />
        <audio ref="sound-8" src="/sounds/gifts/basic/sound-8.mp3" />
        <audio ref="sound-9" src="/sounds/gifts/basic/sound-9.mp3" />

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'GiftsPage',
        data() {
            return {
                carousel: {
                    mobile: {
                        width: null,
                        height: null
                    },
                    desktop: {
                        width: null,
                        height: null
                    },
                    ringtones: {
                        width: null,
                        height: null
                    }
                },
                mobileWallpaper: 0,
                desktopWallpaper: 0,
                ringtone: 0,
                isModalOpened: false,
                modal: {
                    androidWp: false,
                    iphoneWp: false,
                    desktopWp: false,
                    androidRingtone: false,
                    iphoneRingtone: false
                }
            }
        },
        computed: mapGetters(['lang']),
        methods: {
            handleChangeMobileSlider(index) { 
                this.mobileWallpaper = index
            },
            handleChangeDesktopSlider(index) {
                this.desktopWallpaper = index
            },
            handleChangeRingtoneSlider(index) {
                this.ringtone = index
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
                    androidRingtone: false,
                    iphoneRingtone: false
                }
                this.isModalOpened = false
            },
            playSound() {
                const ringtoneName = `sound-${this.ringtone}`
                this.$refs[ringtoneName].play()
            },
            downloadSound() {
                let a = document.createElement("a");
                a.href = `/sounds/gifts/iphone/sound-${this.ringtone}.m4r`
                a.download = `sveza-ringtone.m4r`;
                a.click()
                a.remove()
            },
        },
        mounted() {
            let globalWidth = window.innerWidth

            this.carousel.mobile = {
                width: globalWidth * 0.15,
                height: globalWidth * 0.3
            }
            this.carousel.desktop = {
                width: globalWidth * 0.25,
                height: globalWidth * 0.15
            }
            this.carousel.ringtones = {
                width: globalWidth * 0.25,
                height: globalWidth * 0.15
            }
        }
    }
</script>

<style lang="css" scoped>
    .carousel {
        position: absolute !important;
        top: 35% !important;
        width: 50% !important;
        left: 10% !important;
    }

    .carousel2 {
        position: absolute !important;
        top: 58% !important;
        width: 50% !important;
        left: 10% !important;
    }

    .carousel3 {
        position: absolute !important;
        top: 76% !important;
        width: 45% !important;
        left: 45% !important;
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
        top: 53%;
        left: 64%
    }

    .button_desktop {
        top: 62%;
        left: 64%
    }

    .button_android-ringtone {
        top: 90%;
        left: 64%
    }

    .button_iphone-ringtone {
        top: 93%;
        left: 64%
    }

    .button_hear {
        position: absolute;
        cursor: pointer;
        width: 5%;
        top: 89.5%;
        left: 57%;
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