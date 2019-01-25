<template>
    <div class="ringtones">
        <!-- Carousel for ringtones -->
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
            <slide v-for="(slide, i) in ringtones" :index="i" :key="i">
                <img :src="`/images/${$lang}/ringtones/ringtone-${i}.png`" width="100%" alt="">
            </slide>
        </carousel-3d>

        <Button 
            class="button_hear"
            @click.native="playSound()"
            name="button-hear" />
        <Button 
            class="button button_android-ringtone"
            @click.native="openModal('android')"
            name="button-android"
            hasText />
        <Button 
            class="button button_iphone-ringtone"
            @click.native="openModal('iphone')"
            name="button-iphone"
            hasText />

        <Modal 
            v-if="isModalOpened && modal.android" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/android-ringtone.png`"
            :link="`/sounds/gifts/basic/${this.ringtones[this.currentRingtone]}.mp3`">
        </Modal>

        <Modal 
            v-if="isModalOpened && modal.iphone" 
            @close="closeModal()"
            :img="`/images/${$lang}/modals/iphone-ringtone.png`"
            :link="`/sounds/gifts/iphone/${this.ringtones[this.currentRingtone]}.mp3`">
        </Modal>

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
    
    export default {
        name: 'Ringtones',
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
                currentRingtone: 0,
                isModalOpened: false,
                modal: {
                    android: false,
                    iphone: false
                }
            }
        },
        methods: {
            changeSlide(index) {
                this.currentRingtone = index
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
            },
            playSound() {
                const ref = 'sound' + this.currentRingtone
                this.$refs[ref].play()
            }
        },
        mounted() {
            let globalWidth = window.innerWidth

            this.slider = {
                width: globalWidth * 0.25,
                height: globalWidth * 0.15,
                space: globalWidth * 0.07,
                arrowsWidth: globalWidth * 0.08,
                arrowHeight: globalWidth * 0.05
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slider {
        position: absolute !important;
        top: 76% !important;
        width: 45% !important;
        left: 45% !important;
    }

    .button {
        position: absolute;
        width: 15%;
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
        top: 89.9%;
        left: 57%;
    }
</style>