<template>
    <header class="c-header">
        <a href="#" class="c-logo">
            <img src="../../assets/logo.png" alt>
        </a>

        <Navigation/>
    </header>
</template>

<script>
    import Navigation from "../../components/navigation/navigation.vue";

    export default {
        components: {
            Navigation
        }
    };
</script>

<style >
    .c-header {
        display: flex;
        justify-content: space-between;
        padding-top: 1.875rem;
    }

    .c-logo img {
        width: 60px;
    }
</style>

