<template>
    <div class="gifts">
        <img :src="'/images/' + lang + '/landing.png'" width="100%" alt="landing">

        <!-- Carousel for mobile wallpapers -->
        <carousel-3d 
            v-if="carousel.mobile.width"
            class="carousel1"
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
                <img :src="`/images/gallery/mobile-${i + 1}.jpg`" width="100%" alt="">
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
                <img :src="`/images/gallery/desktop-${i + 1}.jpg`" width="100%" alt="">
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
                <img :src="`/images/${lang}/ringtones/ringtone-${i}.png`" width="100%" alt="">
            </slide>
        </carousel-3d>

        <Button 
            :main="`/images/${lang}/button-android/button.png`"
            :hover="`/images/${lang}/button-android/button-hover.png`"
            :clicked="`/images/${lang}/button-android/button-clicked.png`"
            class="button button_android-wp"
            @click.native="openModal('androidWp')" />
        <Button 
            :main="`/images/${lang}/button-iphone/button.png`"
            :hover="`/images/${lang}/button-iphone/button-hover.png`"
            :clicked="`/images/${lang}/button-iphone/button-clicked.png`"
            class="button button_iphone-wp"
            @click.native="openModal('iphoneWp')" />
        <Button 
            :main="`/images/${lang}/button-download/button.png`"
            :hover="`/images/${lang}/button-download/button-hover.png`"
            :clicked="`/images/${lang}/button-download/button-clicked.png`"
            class="button button_desktop"
            @click.native="openModal('desktopWp')" />
        <Button 
            :main="`/images/button-hear/button.png`"
            hover="/images/button-hear/button-hover.png" 
            clicked="/images/button-hear/button-clicked.png" 
            class="button_hear"
            @click.native="playSound()" />
        <Button 
            :main="`/images/${lang}/button-android/button.png`"
            :hover="`/images/${lang}/button-android/button-hover.png`"
            :clicked="`/images/${lang}/button-android/button-clicked.png`"
            class="button button_android-ringtone"
            @click.native="openModal('androidRingtone')" />
        <Button 
            :main="`/images/${lang}/button-iphone/button.png`"
            :hover="`/images/${lang}/button-iphone/button-hover.png`"
            :clicked="`/images/${lang}/button-iphone/button-clicked.png`"
            class="button button_iphone-ringtone"
            @click.native="openModal('iphoneRingtone')" />
        

        <div class="modal" v-if="isModalOpened" @click.self.prevent="closeModal()">
            <div class="modal__item modal__item_android-wp" v-if="modal.androidWp" >
                <img 
                    :src="`/images/${lang}/modals/android-wp.png`"
                    alt=""
                    class="modal__image"
                    width="500px">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/images/sveza-tel-0' + mobileWallpaper + '.jpg'" />
                <a :href="`/images/sveza-tel-0${this.mobileWallpaper}.jpg`" target="_blank" download>
                    <Button 
                        :main="`/images/${lang}/button-download/button.png`"
                        :hover="`/images/${lang}/button-download/button-hover.png`"
                        :clicked="`/images/${lang}/button-download/button-clicked.png`"
                        class="modal__button_withqr" />
                </a>
                <span class="modal__link">
                    {{ 'sveza-new-year.com/images/sveza-tel-0' + mobileWallpaper + '.jpg' }}
                </span>
            </div>
            <div class="modal__item modal__item_iphone-wp" v-if="modal.iphoneWp" >
                <img 
                    :src="`/images/${lang}/modals/iphone-wp.png`" 
                    alt=""
                    class="modal__image"
                    width="500px">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/images/sveza-tel-0' + mobileWallpaper + '.jpg'" />
                <a :href="`/images/sveza-tel-0${this.mobileWallpaper}.jpg`" target="_blank" download>
                    <Button 
                        :main="`/images/${lang}/button-download/button.png`"
                        :hover="`/images/${lang}/button-download/button-hover.png`"
                        :clicked="`/images/${lang}/button-download/button-clicked.png`"
                        class="modal__button_withqr" />
                </a>
                <span class="modal__link">
                    {{ 'sveza-new-year.com/images/sveza-tel-0' + mobileWallpaper + '.jpg' }}
                </span>
            </div>
            <div class="modal__item modal__item_desktop-wp" v-if="modal.desktopWp" >
                <img 
                    :src="`/images/${lang}/modals/desktop-wp.png`" 
                    alt=""
                    class="modal__image"
                    width="500px">
                <a :href="`/images/sveza-comp-0${this.desktopWallpaper}.jpg`" target="_blank" download>
                    <Button 
                        :main="`/images/${lang}/button-download/button.png`"
                        :hover="`/images/${lang}/button-download/button-hover.png`"
                        :clicked="`/images/${lang}/button-download/button-clicked.png`"
                        class="modal__button" />
                </a>
            </div>
            <div class="modal__item modal__item_android-ringtone" v-if="modal.androidRingtone" >
                <img 
                    :src="`/images/${lang}/modals/android-ringtone.png`" 
                    alt=""
                    class="modal__image"
                    width="500px">
                <qr-code 
                    class="modal__qr"
                    :size="120"
                    :text="'sveza-new-year.com/sounds/gifts/basic/' + ringtones[ringtone] + '.mp3'" />
                <a :href="`/sounds/gifts/basic/${this.ringtones[this.ringtone]}.mp3`" target="_blank" download>
                    <Button 
                        :main="`/images/${lang}/button-download/button.png`"
                        :hover="`/images/${lang}/button-download/button-hover.png`"
                        :clicked="`/images/${lang}/button-download/button-clicked.png`"
                        class="modal__button_withqr" />
                </a>
                <span class="modal__link">
                    {{ 'sveza-new-year.com/sounds/gifts/basic/' + ringtones[ringtone] + '.mp3' }}
                </span>
            </div>
            <div class="modal__item modal__item_iphone-ringtone" v-if="modal.iphoneRingtone" >
                <img 
                    :src="`/images/${lang}/modals/iphone-ringtone.png`" 
                    alt=""
                    class="modal__image"
                    width="500px">
                <a :href="`/sounds/gifts/iphone/${this.ringtones[this.ringtone]}.m4r`" target="_blank" download>
                    <Button 
                        :main="`/images/${lang}/button-download/button.png`"
                        :hover="`/images/${lang}/button-download/button-hover.png`"
                        :clicked="`/images/${lang}/button-download/button-clicked.png`"
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

        <div class="social-sharing">
            <a 
                href="https://vk.com/share.php?url=http%3A%2F%2Fsveza-new-year.com&title=Happy%20Wood%20Year&description=Увлекательная%20новогодняя%20игра%20от%20«Свезы»%20с%20приятными%20подарками&noparse=true" 
                target="_blank" 
                class="">
                <Button 
                    main="/images/button-vk/button.png"
                    hover="/images/button-vk/button-hover.png"
                    clicked="/images/button-vk/button-clicked.png"
                    class="social-sharing__vk" />
            </a>
            <a 
                href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsveza-new-year.com&title=Happy%20Wood%20Year&description=Увлекательная%20новогодняя%20игра%20от%20«Свезы»%20с%20приятными%20подарками" 
                target="_blank" 
                class="">
                <Button 
                    main="/images/button-facebook/button.png"
                    hover="/images/button-facebook/button-hover.png"
                    clicked="/images/button-facebook/button-clicked.png"
                    class="social-sharing__fb" />
            </a>
            <Button 
                :main="`/images/${lang}/button-link/button.png`"
                :hover="`/images/${lang}/button-link/button-hover.png`"
                :clicked="`/images/${lang}/button-link/button-clicked.png`"
                @click.native="copyUrl()"
                class="social-sharing__link" />
        </div>

        <audio ref="sound0" src="/sounds/gifts/basic/01-kto-tam.mp3" />
        <audio ref="sound1" src="/sounds/gifts/basic/02-molodoy-dyatel-na-bereze.mp3" />
        <audio ref="sound2" src="/sounds/gifts/basic/03-zhena-zvonit.mp3" />
        <audio ref="sound3" src="/sounds/gifts/basic/04-surpriz-za-dveryu.mp3" />
        <audio ref="sound4" src="/sounds/gifts/basic/05-prizhok-v-vodu-s-mirovim-recordom.mp3" />
        <audio ref="sound5" src="/sounds/gifts/basic/06-kokteyl-buratino.mp3" />
        <audio ref="sound6" src="/sounds/gifts/basic/07-k-zime-gotovi.mp3" />
        <audio ref="sound7" src="/sounds/gifts/basic/08-skelet-v-shkafu.mp3" />
        <audio ref="sound8" src="/sounds/gifts/basic/09-sovershenno-secretno.mp3" />
        <audio ref="sound9" src="/sounds/gifts/basic/10-tantsuyte-vam-zvonyat.mp3" />

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
                        "/images/sveza-tel-01.jpg",
                        "/images/sveza-tel-02.jpg",
                        "/images/sveza-tel-03.jpg",
                        "/images/sveza-tel-04.jpg",
                        "/images/sveza-tel-05.jpg",
                    ],
                    desktop: [
                        "/images/sveza-comp-01.jpg",
                        "/images/sveza-comp-02.jpg",
                        "/images/sveza-comp-03.jpg",
                        "/images/sveza-comp-04.jpg",
                        "/images/sveza-comp-05.jpg",
                    ]
                },
                ringtones: [
                    '01-kto-tam',
                    '02-molodoy-dyatel-na-bereze',
                    '03-zhena-zvonit',
                    '04-surpriz-za-dveryu',
                    '05-prizhok-v-vodu-s-mirovim-recordom',
                    '06-kokteyl-buratino',
                    '07-k-zime-gotovi',
                    '08-skelet-v-shkafu',
                    '09-sovershenno-secretno',
                    '10-tantsuyte-vam-zvonyat'
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
            },
            copyUrl() {
                const el = document.createElement('textarea');
                el.value = window.location.href;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
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
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.commit('setLang', to.matched[0].meta.lang)
            })
        }
    }
</script>

<style lang="css" scoped>
    .carousel1 {
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

    @media (max-width: 1000px) and (min-aspect-ratio: 1/1) {
        .modal {
            align-items: flex-start;
            overflow: scroll;
        }
    }

    .modal__image {
        align-self: center;
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
        width: 27%;
        top: 40%;
        left: 10%;
    }

    .modal__qr {
        position: absolute;
        top: 15%;
        left: 11%;
    }

    .modal__itunes {
        position: absolute;
        top: 24%;
        left: 14%;
        color: #2e358b;
        font-size: 10px;
        width: 22%;
        word-wrap: break-word;
        text-decoration: underline;
    }
    
    .modal__link {
        position: absolute;
        top: 49%;
        left: 13%;
        color: #2e358b;
        font-size: 10px;
        width: 22%;
        word-wrap: break-word;
    }

    .social-sharing__vk {
        position: absolute;   
        width: 4%;
        top: 97%;
        left: 46.5%;
    }

    .social-sharing__fb {
        position: absolute;   
        width: 4%;
        top: 97%;
        left: 41%;
    }

    .social-sharing__link {
        position: absolute;   
        width: 18%;
        top: 97%;
        left: 52%;
    }
</style>