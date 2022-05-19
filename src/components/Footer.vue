<template>
    <footer>
        <p>Tous droits réservés</p>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
//********** Footer **********//
$accent-color: #032541;

footer {
    background-color: $accent-color;
    display: flex;
    align-items: center;
    height: 60px;

    p {
        color: white;
        margin-left: 30px;
    }
}
</style>