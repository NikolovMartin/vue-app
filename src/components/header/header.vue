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
        .o-shell {
            padding: 1.875rem 1rem 0 1rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: rgb(184, 184, 184);
        }
    }

    .c-logo img {
        width: 3.75rem;
    }

    .c-nav {
        align-self: center;
    }
</style>

