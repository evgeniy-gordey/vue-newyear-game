<template>
    <div class="social-buttons">
        <a 
            href="https://vk.com/share.php?url=http%3A%2F%2Fsveza-new-year.com&title=Happy%20Wood%20Year&description=Увлекательная%20новогодняя%20игра%20от%20«Свезы»%20с%20приятными%20подарками&noparse=true" 
            target="_blank">
            <Button class="social-buttons__vk" name="button-vk" />
        </a>
        <a 
            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsveza-new-year.com&title=Happy%20Wood%20Year&description=Увлекательная%20новогодняя%20игра%20от%20«Свезы»%20с%20приятными%20подарками" 
            target="_blank">
            <Button class="social-buttons__fb" name="button-facebook" />
        </a>
        <Button 
            class="social-buttons__link"
            @click.native="copyPageUrl()"
            name="button-link"
            hasText />
    </div>
</template>


<script>
    import Button from '@/components/interface/Button.vue'
    
    export default {
        name: 'SocialButtons',
        components: {
            Button
        },
        methods: {
            copyPageUrl() {
                const el = document.createElement('textarea');
                el.value = window.location.href;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            }
        }
    }
</script>

<style lang="scss">
    .social-buttons__vk {
        position: absolute;   
        width: 4%;
        top: 97%;
        left: 46.5%;
    }

    .social-buttons__fb {
        position: absolute;   
        width: 4%;
        top: 97%;
        left: 41%;
    }

    .social-buttons__link {
        position: absolute;   
        width: 18%;
        top: 97%;
        left: 52%;
    }
</style>