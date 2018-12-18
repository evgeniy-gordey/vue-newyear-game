<template>
    <div class="gifts">
        <img :src="'/images/' + lang + '/landing.png'" width="100%" alt="landing">

        <!-- Carousel for mobile wallpapers -->
        <carousel-3d 
            v-if="carousel.mobile.width"
            class="carousel"
            :width="carousel.mobile.width"
            :height="carousel.mobile.height"
            :space="carousel.mobile.space"
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
            :space="carousel.desktop.space"
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
            :space="carousel.ringtones.space"
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

        <Button 
            main="/images/ru/button-android/button.png" 
            hover="/images/ru/button-android/button-hover.png" 
            clicked="/images/ru/button-android/button-clicked.png" 
            class="button button_android-wp"
            @click.native="openModal('androidWp')" />
        <Button 
            main="/images/ru/button-iphone/button.png" 
            hover="/images/ru/button-iphone/button-hover.png" 
            clicked="/images/ru/button-iphone/button-clicked.png" 
            class="button button_iphone-wp"
            @click.native="openModal('iphoneWp')" />
        <Button 
            main="/images/ru/button-download/button.png" 
            hover="/images/ru/button-download/button-hover.png" 
            clicked="/images/ru/button-download/button-clicked.png" 
            class="button button_desktop"
            @click.native="openModal('desktopWp')" />
        <Button 
            main="/images/button-hear/button.png" 
            hover="/images/button-hear/button-hover.png" 
            clicked="/images/button-hear/button-clicked.png" 
            class="button_hear"
            @click.native="playSound()" />
        <Button 
            main="/images/ru/button-android/button.png" 
            hover="/images/ru/button-android/button-hover.png" 
            clicked="/images/ru/button-android/button-clicked.png" 
            class="button button_android-ringtone"
            @click.native="openModal('androidRingtone')" />
        <Button 
            main="/images/ru/button-iphone/button.png" 
            hover="/images/ru/button-iphone/button-hover.png" 
            clicked="/images/ru/button-iphone/button-clicked.png" 
            class="button button_iphone-ringtone"
            @click.native="openModal('iphoneRingtone')" />
        

        <div class="modal" v-if="isModalOpened" @click.self.prevent="closeModal()">
            <div class="modal__item modal__item_android-wp" v-if="modal.androidWp" >
                <img src="/images/ru/modals/android-wp.png" alt="">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/images/sveza_tel-0' + mobileWallpaper + '.jpg'" />
                <a :href="`/images/sveza_tel-0${this.mobileWallpaper}.jpg`" target="_blank" download>
                    <Button 
                        main="/images/ru/button-download/button.png" 
                        hover="/images/ru/button-download/button-hover.png" 
                        clicked="/images/ru/button-download/button-clicked.png" 
                        class="modal__button_withqr" />
                </a>
                <span class="modal__link">
                    {{ 'sveza-new-year.com/images/sveza_tel-0' + mobileWallpaper + '.jpg' }}
                </span>
            </div>
            <div class="modal__item modal__item_iphone-wp" v-if="modal.iphoneWp" >
                <img src="/images/ru/modals/iphone-wp.png" alt="">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/images/sveza_tel-0' + mobileWallpaper + '.jpg'" />
                <a :href="`/images/sveza_tel-0${this.mobileWallpaper}.jpg`" target="_blank" download>
                    <Button 
                        main="/images/ru/button-download/button.png" 
                        hover="/images/ru/button-download/button-hover.png" 
                        clicked="/images/ru/button-download/button-clicked.png" 
                        class="modal__button_withqr" />
                </a>
                <span class="modal__link">
                    {{ 'sveza-new-year.com/images/sveza_tel-0' + mobileWallpaper + '.jpg' }}
                </span>
            </div>
            <div class="modal__item modal__item_desktop-wp" v-if="modal.desktopWp" >
                <img src="/images/ru/modals/desktop-wp.png" alt="">
                <a :href="`/images/sveza_comp-0${this.desktopWallpaper}.jpg`" target="_blank" download>
                    <Button 
                        main="/images/ru/button-download/button.png" 
                        hover="/images/ru/button-download/button-hover.png" 
                        clicked="/images/ru/button-download/button-clicked.png" 
                        class="modal__button" />
                </a>
            </div>
            <div class="modal__item modal__item_android-ringtone" v-if="modal.androidRingtone" >
                <img src="/images/ru/modals/android-ringtone.png" alt="">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/sounds/gifts/basic/' + ringtones[ringtone] + '.mp3'" />
                <a :href="`/sounds/gifts/basic/${this.ringtones[this.ringtone]}.mp3`" target="_blank" download>
                    <Button 
                        main="/images/ru/button-download/button.png"
                        hover="/images/ru/button-download/button-hover.png"
                        clicked="/images/ru/button-download/button-clicked.png"
                        class="modal__button_withqr" />
                </a>
                <span class="modal__link">
                    {{ 'sveza-new-year.com/sounds/gifts/basic/' + ringtones[ringtone] + '.mp3' }}
                </span>
            </div>
            <div class="modal__item modal__item_iphone-ringtone" v-if="modal.iphoneRingtone" >
                <img src="/images/ru/modals/iphone-ringtone.png" alt="">
                <a :href="`/sounds/gifts/iphone/${this.ringtones[this.ringtone]}.m4r`" target="_blank" download>
                    <Button 
                        main="/images/ru/button-download/button.png"
                        hover="/images/ru/button-download/button-hover.png"
                        clicked="/images/ru/button-download/button-clicked.png"
                        class="modal__button" />
                </a>
                <a 
                    href="https://www.apple.com/ru/itunes/download/" 
                    class="modal__itunes" 
                    target="_blank">
                    Скачать iTunes<br>
                    для Windows
                </a>
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

    import Button from '../components/interface/Button.vue'
    export default {
        name: 'GiftsPage',
        components: {
            Button
        },
        data() {
            return {
                carousel: {
                    mobile: {
                        width: null,
                        height: null,
                        space: null
                    },
                    desktop: {
                        width: null,
                        height: null,
                        space: null
                    },
                    ringtones: {
                        width: null,
                        height: null,
                        space: null
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
                mobileWallpaper: 1,
                desktopWallpaper: 1,
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
            }
        },
        mounted() {
            let globalWidth = window.innerWidth

            this.carousel.mobile = {
                width: globalWidth * 0.15,
                height: globalWidth * 0.3,
                space: globalWidth * 0.08
            }
            this.carousel.desktop = {
                width: globalWidth * 0.25,
                height: globalWidth * 0.15,
                space: globalWidth * 0.08
            }
            this.carousel.ringtones = {
                width: globalWidth * 0.25,
                height: globalWidth * 0.15,
                space: globalWidth * 0.07
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
        z-index: 1000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .75)
    }

    .modal__item {
        display: flex;
        position: relative;
        z-index: 1100;
    }

    .modal__button {
        position: absolute;
        cursor: pointer;
        width: 160px;
        top: 100px;
        left: 45px;
        z-index: 1110;
    }

    .modal__button_withqr {
        position: absolute;
        cursor: pointer;
        width: 160px;
        top: 280px;
        left: 45px;
    }

    .modal__qr {
        position: absolute;
        top: 122px;
        left: 62px;
    }

    .modal__itunes {
        position: absolute;
        top: 165px;
        left: 65px;
        color: #2e358b;
        font-size: 10px;
        width: 22%;
        word-wrap: break-word;
        text-decoration: underline;
    }
    
    .modal__link {
        position: absolute;
        top: 330px;
        left: 65px;
        color: #2e358b;
        font-size: 10px;
        width: 22%;
        word-wrap: break-word;
        text-decoration: underline;
    }
</style>