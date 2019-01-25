<template>
    <div class="gifts">
        <img :src="'/images/' + $lang + '/landing.png'" width="100%" alt="landing">

        <MobileWallpapers />
        <DesktopWallpapers />
        <Ringtones />

        <SocialButtons />
    </div>
</template>

<script>
    import SocialButtons from '@/components/gifts/SocialButtons.vue'
    import MobileWallpapers from '@/components/gifts/MobileWallpapers.vue'
    import DesktopWallpapers from '@/components/gifts/DesktopWallpapers.vue'
    import Ringtones from '@/components/gifts/Ringtones.vue'

    export default {
        name: 'GiftsPage',
        components: {
            MobileWallpapers,
            DesktopWallpapers,
            Ringtones,
            SocialButtons
        }
    }
</script>