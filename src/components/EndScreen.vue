<template>
    <div class="end-screen" >
        <End class="end"/>
        <div 
            class="end-button">
            <router-link to="/gifts">
                <EndButton />
            </router-link>
        </div>
        <div class="end-under" />
    </div>
</template>

<script>
    import End from '../svg/end.svg'
    import EndButton from '../svg/end-button.svg'

    export default {
        name: 'endScreen',
        components: {
            End,
            EndButton
        }
    }
</script>

<style lang="css" scoped>
    .end-under {
        z-index: 9900;
        position: absolute;
        width: 100vw;
        height: 100vh;
    }

    .end {
        z-index: 10000;
        position: absolute;
        width: 50%;
        top: 25%;
        left: 25%;
    }

    .end-button {
        position: absolute;
        z-index: 10010;
        width: 20%;
        top: 70%;
        left: 40%;
        cursor: pointer;
    }
</style>