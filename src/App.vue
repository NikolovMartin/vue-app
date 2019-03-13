<template>
    <div id="app">
        <Landing/>
    </div>
</template>

<script>
    import Landing from "./pages/Landing.vue";

    export default {
        components: {
            Landing
        }
    };
</script>

<style>
    body {
        margin: 0;
        height: 100vh;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        max-width: 75rem;
        margin: 0 auto;
        background-color: antiquewhite;
        height: 100%;
    }
</style>
