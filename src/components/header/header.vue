<template>
    <header class="c-header">
        <div class="o-shell">
            <a href="#" class="c-logo">
                <img src="../../assets/logo.png" alt>
            </a>

            <Navigation/>
        </div>
        <!-- /.o-shell -->
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

<style lang="scss" >
    .c-header {
        background-color: #333;
        padding: 1rem 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;

        .o-shell {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .c-logo img {
        width: 3.75rem;
    }

    .c-nav {
        align-self: center;
    }
</style>

