<template>
    <nav class="desktop-nav">
        <router-link to="/"><i class="fas fa-film"></i></router-link>
        <ul>
            <li>
                <router-link to="/">Films</router-link>
            </li>
            <li><a href="">Séries</a></li>
            <li><a href="">Populaires</a></li>
        </ul>
    </nav>
</template>

<script setup>

</script>

<style lang="scss">
//********** Navigation **********//

$accent-color: #032541;

.desktop-nav {
    display: flex;
    justify-content: space-between;
    height: 70px;
    background-color: $accent-color;
    align-items: center;
    padding: 0px 40px;

    i {
        cursor: pointer;
        font-size: 30px;
        color: white;
    }

    ul {
        display: flex;
        width: 300px;
        justify-content: space-between;
    }

    li {
        list-style: none;

        a {
            color: white;
            font-weight: 800;
            font-size: 20px;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}

//********** Navigation Mobile **********//

.bar {
    height: 4px;
    background-color: white;
    width: 35px;
    margin: 7px 0px 0px 0px;
    transition: all 0.2s;
    transform-origin: 0% 50%;
    cursor: pointer;
    position: inherit;
}

#mobileNav {
    width: 100%;
    display: none;
    background-color: $accent-color;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;
    position: fixed;
    z-index: 205;

    i {
        color: white;
        font-size: 40px;
    }

    &.open {
        #menu-nav {
            position: fixed;
            right: 0px !important;
            bottom: 0px !important;
            transition: all 0.3s;
            z-index: -1;
        }

        #top-nav {
            transform: rotate(45deg) translate(0, -10px);
        }

        #middle-nav {
            display: none;
        }

        #bottom-nav {
            transform: rotate(-45deg) translate(0, +10px);
        }
    }

    .mobile-nav-content {
        position: fixed;
        /* z-index: 50; */
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        right: -100%;
        bottom: 0px !important;
        background: $accent-color;
        height: 100%;
        width: 100%;
        transition: all 0.3s;
        text-align: center;

        ul {
            list-style: none;
            height: 320px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-align: center;

            li {
                color: black;
                width: 100%;
                padding: 15px 0px 15px 15px;

                a {
                    text-decoration: none;
                    font-weight: bold;
                    color: white;
                    text-transform: capitalize;
                    font-size: 30px;
                }
            }
        }
    }
}
</style>

