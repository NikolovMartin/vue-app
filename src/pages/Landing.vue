<template>
    <div class="o-shell">
        <Header/>
        <Footer/>
    </div>
    <!-- /.o-shell -->
</template>

<script>
    import Header from "../components/header/header.vue";
    import Footer from "../components/footer/footer.vue";

    export default {
        components: {
            Header,
            Footer
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }

    .o-shell {
        padding: 0 1rem;

        .c-header {
            background-color: red;
        }
    }
</style>
