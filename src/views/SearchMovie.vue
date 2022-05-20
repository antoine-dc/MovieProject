
<template>
  <!-- Content -->

  <div class="search-container">

  </div>

  <div class="wrapper">
    <div class="tendances-container container">
      <div class="title-tendances">
        <h2>Résultats recherche : {{search }}</h2>    
      </div>
      <div class="grid-tendances">
        <MovieList v-for="item in data" :key="item.id" :title="item.title" :date="item.release_date"
          :score="item.vote_average * 10" :id="item.id">      
          <template #image>
            <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`" alt="Movie" />
          </template>
        </MovieList>
      </div>
    </div>
  </div>
</template>


<script setup>
import MovieList from '@/components/MovieList.vue'
import { useRoute } from 'vue-router'
import axios from 'axios';
import { ref } from 'vue'

let search = useRoute().params.search;
let key = import.meta.env.VITE_KEY_API;
// ${this.$route.params.id}
let data = ref({}) ;// On créé une variable référence, qui pourra être utilisée dans le template


let urlAPI = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr-FR&page=1&include_adult=false&query=${search}`; 


async function loadData() {
  await axios.get(urlAPI)
    .then((response) =>
      data.value = response.data.results // On précise le .data mais ça dépendra des API
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

</script>

