<template>
    <div class="button">
        <img class="button__main" width="100%" :src="main">
        <img class="button__hover" width="100%" :src="hover">
        <img class="button__clicked" width="100%" :src="clicked">
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            main: {
                type: String
            },
            hover: {
                type: String
            },
            clicked: {
                type: String
            }
        }
    }
</script>

<style lang="css" scoped>
    .button__main {
        display: block;
    }

    .button__hover {
        display: none;
    }

    .button__clicked {
        display: none;
    }

    .button:hover .button__hover {
        display: block;
    }
    .button:hover .button__main {
        display: none;
    }

    .button:active .button__hover {
        display: none;
    }
    .button:active .button__clicked {
        display: block;
    }
</style>