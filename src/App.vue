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
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: rgb(252, 242, 230);
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1 0 auto;
    }

    .o-wrapper {
        max-width: 75rem;
        margin: 0 auto;
    }
</style>
