<template>
    <div class="focus-container">
        <div class="banner" :style="`background:url('https://www.themoviedb.org/t/p/w1920_and_h800_face${data.backdrop_path}')`">
            <div class="content">
                <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`" alt="" />
                <div class="right">
                    <div class="top">
                        <div class="score">{{data.vote_average *10}}%</div>
                        <div class="title-date">
                            <h1>{{data.title}}</h1>
                            <span>{{data.release_date}} - {{data.genres[0].name}} - {{data.runtime}}mn</span>
                        </div>
                    </div>
                    <div class="synopsis">
                        <h2>Synopsis</h2>
                        <p>
                          {{data.overview}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="casting">
            <h2>Casting</h2>
            <div class="actors">
                <div class="actor" v-for="item in dataActors">
                    <img :src="`${checkImage(item.profile_path)}`" alt="" />
                    <h4>{{item.name}}</h4>
                    <span>{{item.character}}</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios';
import { ref } from 'vue'

let id = useRoute().params.id;
// ${this.$route.params.id}
let data = ref({}) ;// On créé une variable référence, qui pourra être utilisée dans le template
let dataActors = ref({}) ;
let urlAPI = `https://api.themoviedb.org/3/movie/${parseInt(id)}?api_key=b8784e79c57339a259c473aaa7bdab93&language=fr-FR`; // Un exemple d'API simple
let urlAPIActors = `https://api.themoviedb.org/3/movie/${parseInt(id)}/credits?api_key=b8784e79c57339a259c473aaa7bdab93&language=fr-FR`; 


async function loadData() {
  await axios.get(urlAPI)
    .then((response) =>
      data.value = response.data // On précise le .data mais ça dépendra des API
    )

}
async function loadDataActors() {
  await axios.get(urlAPIActors)
    .then((response) =>
      dataActors.value = response.data.cast // On précise le .data mais ça dépendra des API
    )

}

function checkImage(path){
    if(path){
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${path}`
    }else{
        return "https://dummyimage.com/220x330/c2c2c2/ababab.jpg&text=People"
    }
}

loadData(); // On lance la fonction pour récupérer les données de l'API
loadDataActors();

</script>

