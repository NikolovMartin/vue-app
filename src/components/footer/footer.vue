<template>
    <footer class="c-footer">
        <div class="o-shell">
            <a href="#" class="c-logo">
                <img src="../../assets/logo.png" alt>
            </a>

            <Navigation class="c-nav--footer"/>
            <nav class="c- nav c-nav--socials">
                <ul>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- /.o-shell -->
    </footer>
</template>

<script>
    import Navigation from "../../components/navigation/navigation.vue";
    export default {
        components: {
            Navigation
        }
    };
</script>


<style lang="scss" scoped>
    .c-footer {
        padding: 2rem 0;
        background-color: rgb(204, 203, 203);

        .o-shell {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>

