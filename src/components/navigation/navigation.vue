<template>
    <nav class="c-nav">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/services">Services</router-link>
            </li>
            <li>
                <router-link to="/team">Team</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>

    <!-- /.o-shell -->
</template>

<script>
    export default {};
</script>


<style lang="scss" >
    .o-shell {
        padding: 0 1rem;
    }
    .c-nav {
        ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            padding: 0;

            li {
                list-style-type: none;
                padding-left: 30px;

                a {
                    text-decoration: none;
                    color: white;

                    &:hover {
                        opacity: 0.5;
                    }
                }
            }
        }

        &--socials {
            ul {
                display: flex;
                flex-direction: row;
                flex: 0 0 33%;

                li {
                    list-style-type: none;
                    padding-left: 1.875rem;

                    a {
                        text-decoration: none;
                        color: black;
                    }
                }
            }
        }
    }
</style>

