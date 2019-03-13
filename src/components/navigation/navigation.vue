<template>
    <nav class="c-nav">
        <ul>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Cliets</a>
            </li>
            <li>
                <a href="#">Team</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {};
</script>


<style scoped>
    .c-nav ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0;
    }

    li {
        list-style-type: none;
        padding-left: 30px;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        opacity: 0.5;
    }
</style>

