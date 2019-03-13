<template>
    <div class="o-wrapper">
        <div id="app">
            <Header/>

            <div class="content">
                <router-view>
                    <Landing/>
                </router-view>
            </div>
            <!-- /.content -->
            <Footer/>
        </div>
    </div>
    <!-- /.o-wrapper -->
</template>

<script>
    import Landing from "./pages/Landing.vue";
    import Header from "./components/header/header.vue";
    import Footer from "./components/footer/footer.vue";

    export default {
        components: {
            Landing,
            Header,
            Footer
        }
    };
</script>

<style style="scss"  >
    body {
        margin: 0;
    }

    #app {
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url(./assets/sun.jpg);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 5;
        padding-top: 100px;
    }

    .content {
        flex: 1 0 auto;
        position: relative;
        z-index: 10;
    }

    .o-wrapper {
        max-width: 75rem;
        margin: 0 auto;
    }
</style>
