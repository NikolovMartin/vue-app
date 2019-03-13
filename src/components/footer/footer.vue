<template>
    <footer class="c-footer">
        <a href="#" class="c-logo">
            <img src="../../assets/logo.png" alt>
        </a>

        <Navigation class="c-nav--footer"/>
        <socials class="c-socials">
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
        </socials>
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


<style scoped>
    .c-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .c-socials ul {
        display: flex;
        flex-direction: row;
        flex: 0 0 33%;
    }

    .c-socials ul li {
        list-style-type: none;
        padding-left: 1.875rem;
    }

    .c-socials {
        flex: 0 0 33%;
        display: flex;
        justify-content: flex-end;
    }

    .c-socials a {
        text-decoration: none;
    }

    .c-socials a:hover {
        opacity: 0.5;
    }

    .c-nav--footer {
        flex: 0 0 33%;
        display: flex;
        justify-content: flex-start;
    }

    .c-logo {
        flex: 0 0 33%;
        text-align: left;
    }
</style>

