<template>
  <router-link :to="`/details-films/${id}`">
    <div class="movie">
        <slot name="image"></slot>
        <div class="score">
            <p>{{ score }}%</p>
        </div>
        <h5>{{ title }}</h5>
        <p>{{ date }}</p>
    </div>
    </router-link>
</template>

<script setup>
defineProps({
    id : Number,
    title: String,
    date: String,
    score: Number
})

</script>

<style lang="scss" >
//********** Footer **********//
$accent-color: #032541;
a{
    text-decoration: none;
}
.movie {
    margin-bottom: 20px;
    cursor: pointer;
    width: 25%;
    min-width: 300px;
    color:black;


    img {
        transition: all 0.3s;
    }

    .score {
        width: 235px;
        display: flex;
        justify-content: flex-end;

        p {
            margin-top: -40px;
            height: 50px;
            width: 50px;
            border-radius: 50px;
            background-color: $accent-color;
            border: solid 3px white;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: rgba(0, 0, 0, 0.44) 0px 3px 8px;
        }
    }

    h5 {
        transition: all 0.3s;
        color: $accent-color;
        font-size: 20px;
    }

    &:hover {
        img {
            box-shadow: rgba(0, 0, 0, 0.55) 8px 8px 5px;
        }

        h5 {
            text-shadow: rgba(0, 0, 0, 0.15) 2px 2px 2px;
        }
    }
}
</style>