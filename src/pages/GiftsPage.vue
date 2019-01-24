<template>
    <div class="gifts">
        <img :src="'/images/' + $lang + '/landing.png'" width="100%" alt="landing">

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
                <img :src="`/images/${$lang}/ringtones/ringtone-${i}.png`" width="100%" alt="">
            </slide>
        </carousel-3d>

        <Button 
            class="button button_android-wp"
            @click.native="openModal('androidWp')"
            name="button-android"
            hasText />
        <Button 
            class="button button_iphone-wp"
            @click.native="openModal('iphoneWp')"
            name="button-iphone"
            hasText />
        <Button 
            class="button button_desktop"
            @click.native="openModal('desktopWp')"
            name="button-download"
            hasText />
        <Button 
            class="button_hear"
            @click.native="playSound()"
            name="button-hear" />
        <Button 
            class="button button_android-ringtone"
            @click.native="openModal('androidRingtone')"
            name="button-android"
            hasText />
        <Button 
            class="button button_iphone-ringtone"
            @click.native="openModal('iphoneRingtone')"
            name="button-iphone"
            hasText />
        
        <Modal 
            v-if="isModalOpened && modal.androidWp" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/android-wp.png`"
            :link="`/images/sveza-tel-0${mobileWallpaper}.jpg`">
        </Modal>

        <Modal 
            v-if="isModalOpened && modal.iphoneWp" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/iphone-wp.png`"
            :link="`/images/sveza-tel-0${mobileWallpaper}.jpg`">
        </Modal>

        <Modal 
            v-if="isModalOpened && modal.desktopWp" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/desktop-wp.png`"
            :link="`/images/sveza-tel-0${desktopWallpaper}.jpg`">
        </Modal>

        <Modal 
            v-if="isModalOpened && modal.androidRingtone" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/android-ringtone.png`"
            :link="`/sounds/gifts/basic/${this.ringtones[this.ringtone]}.mp3`">
        </Modal>

        <Modal 
            v-if="isModalOpened && modal.iphoneRingtone" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/iphone-ringtone.png`"
            :link="`/sounds/gifts/iphone/${this.ringtones[this.ringtone]}.mp3`">
        </Modal>

        <SocialButtons />

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
    import Modal from '@/components/common/Modal.vue'
    import Button from '@/components/common/Button.vue'
    import SocialButtons from '@/components/gifts/SocialButtons.vue'

    export default {
        name: 'GiftsPage',
        components: {
            Modal,
            Button,
            SocialButtons
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

<style lang="scss" scoped>
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
        width: 5%;
        top: 89.5%;
        left: 57%;
    }
</style>