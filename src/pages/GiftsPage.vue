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
            :controls-prev-html="'<img height=100% src=/images/left-arrow.png />'" 
            :controls-next-html="'<img height=100% src=/images/right-arrow.png />'" 
            :controls-width="carousel.arrows.width"
            :controls-height="carousel.arrows.height"
            @after-slide-change="this.handleChangeMobileSlider" >
            <slide v-for="(slide, i) in wallpapers.mobile" :index="i" :key="i">
                <img :src="slide" width="100%" alt="">
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
            :controls-prev-html="'<img height=100% src=/images/left-arrow.png />'" 
            :controls-next-html="'<img height=100% src=/images/right-arrow.png />'" 
            :controls-width="carousel.arrows.width"
            :controls-height="carousel.arrows.height"
            @after-slide-change="this.handleChangeDesktopSlider" >
            <slide v-for="(slide, i) in wallpapers.desktop" :index="i" :key="i">
                <img :src="slide" width="100%" alt="">
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
            :controls-prev-html="'<img height=100% src=/images/left-arrow.png />'" 
            :controls-next-html="'<img height=100% src=/images/right-arrow.png />'" 
            :controls-width="carousel.arrows.width"
            :controls-height="carousel.arrows.height"
            @after-slide-change="this.handleChangeRingtoneSlider" >
            <slide v-for="(slide, i) in ringtones" :index="i" :key="i">
                <img :src="'/images/ru/ringtones/ringtone-' + i + '.png'" width="100%" alt="">
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
                    :text="'sveza-new-year.com/images/sveza_tel-0' + mobileWallpaper + '.jpg'" />
            </div>
            <div class="modal__item modal__item_iphone-wp" v-if="modal.iphoneWp" >
                <img src="/images/ru/modals/iphone-wp.png" alt="">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/images/sveza_tel-0' + mobileWallpaper + '.jpg'" />
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
                    :text="'sveza-new-year.com/sounds/gifts/basic/' + ringtones[ringtone] + '.mp3'" />
            </div>
            <div class="modal__item modal__item_iphone-ringtone" v-if="modal.iphoneRingtone" >
                <img src="/images/ru/modals/iphone-ringtone.png" alt="">
                <img 
                    src="/images/ru/button.png" 
                    class="modal__button"
                    @click="downloadSound(); closeModal()">
            </div>
        </div>

        <audio ref="sound0" src="/sounds/gifts/basic/01_kto_tam.mp3" />
        <audio ref="sound1" src="/sounds/gifts/basic/02_molodoy_dyatel_na _bereze.mp3" />
        <audio ref="sound2" src="/sounds/gifts/basic/03_zhena_zvonit.mp3" />
        <audio ref="sound3" src="/sounds/gifts/basic/04_surpriz_za_dveryu.mp3" />
        <audio ref="sound4" src="/sounds/gifts/basic/05_prizhok_v_vodu_s_mirovim_recordom.mp3" />
        <audio ref="sound5" src="/sounds/gifts/basic/06_kokteyl_buratino.mp3" />
        <audio ref="sound6" src="/sounds/gifts/basic/07_k_zime_gotovi.mp3" />
        <audio ref="sound7" src="/sounds/gifts/basic/08_skelet_v_shkafu.mp3" />
        <audio ref="sound8" src="/sounds/gifts/basic/09_sovershenno_secretno.mp3" />
        <audio ref="sound9" src="/sounds/gifts/basic/10_tantsuyte_vam_zvonyat.mp3" />

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
                    },
                    arrows: {
                        width: null,
                        height: null
                    }
                },
                wallpapers: {
                    mobile: [
                        "/images/sveza_tel-01.jpg",
                        "/images/sveza_tel-02.jpg",
                        "/images/sveza_tel-03.jpg",
                        "/images/sveza_tel-04.jpg",
                        "/images/sveza_tel-05.jpg",
                    ],
                    desktop: [
                        "/images/sveza_comp-01.jpg",
                        "/images/sveza_comp-02.jpg",
                        "/images/sveza_comp-03.jpg",
                        "/images/sveza_comp-04.jpg",
                        "/images/sveza_comp-05.jpg",
                    ]
                },
                ringtones: [
                    '01_kto_tam',
                    '02_molodoy_dyatel_na _bereze',
                    '03_zhena_zvonit',
                    '04_surpriz_za_dveryu',
                    '05_prizhok_v_vodu_s_mirovim_recordom',
                    '06_kokteyl_buratino',
                    '07_k_zime_gotovi',
                    '08_skelet_v_shkafu',
                    '09_sovershenno_secretno',
                    '10_tantsuyte_vam_zvonyat'
                ],
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
                this.mobileWallpaper = index + 1
            },
            handleChangeDesktopSlider(index) {
                this.desktopWallpaper = index + 1
            },
            handleChangeRingtoneSlider(index) {
                this.ringtone = index
            },
            downloadDesktop() {
                let a = document.createElement("a");
                a.href = `/images/sveza_comp-0${this.desktopWallpaper}.jpg`
                a.download = `sveza_comp-0${this.desktopWallpaper}.jpg`;
                a.click()
                a.remove()
            },
            openModal(target) {
                this.modal[target] = true
                this.isModalOpened = true
                document.body.className = 'modal-opened'
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
                document.body.className = ''
            },
            playSound() {
                const ref = 'sound' + this.ringtone
                this.$refs[ref].play()
            },
            downloadSound() {
                let a = document.createElement("a");
                a.href = `/sounds/gifts/iphone/${this.ringtones[this.ringtone]}.m4r`
                a.download = `${this.ringtones[this.ringtone]}.m4r`;
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
            this.carousel.arrows = {
                width: globalWidth * 0.08,
                height: globalWidth * 0.05
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
        max-height: 90vh;
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