<script setup>
import MovieList from '@/components/MovieList.vue'
import axios from 'axios';
import { ref } from 'vue'

let key = import.meta.env.VITE_KEY_API;
let data = ref({}) // On créé une variable référence, qui pourra être utilisée dans le template
let dataTrending = ref({})
let valueSearch = ref("")


async function loadData() {
  let urlAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr-FR`; // Un exemple d'API simple
  await axios.get(urlAPI)
    .then((response) =>
      data.value = response.data.results // On précise le .data mais ça dépendra des API
    )
}

async function loadDataTrending() {
  let urlAPI = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=fr-FR`; // Un exemple d'API simple
  await axios.get(urlAPI)
    .then((response) =>
      dataTrending.value = response.data.results // On précise le .data mais ça dépendra des API
    )
}
loadData(); // On lance la fonction pour récupérer les données de l'API
loadDataTrending();

</script>

<template>
  <!-- Content -->

  <div class="search-container">
    <input type="text" placeholder="Rechercher un film" v-model="valueSearch"/>
    <router-link :to="`/search/${valueSearch}`">
    <button type="submit"><i class="fas fa-search"></i></button></router-link>
  </div>

  <div class="wrapper">
    <div class="tendances-container container">
      <div class="title-tendances">
        <h2>Tendances</h2>
        <button class="active">Aujourd'hui</button>
        <button class="no-active">Cette semaine</button>
      </div>
      <div class="grid-tendances">
        <MovieList v-for="item in dataTrending" :key="item.id" :title="item.title" :date="item.release_date"
          :score="item.vote_average * 10" :id="item.id">      
          <template #image>
            <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`" alt="Hypnotic" />
          </template>
        </MovieList>
      </div>
    </div>
  </div>

  <div class="wrapper-pop">
    <div class="populaires-container container">
      <div class="title-tendances">
        <h2>Populaires</h2>
        <button class="active">Streaming</button>
        <button class="no-active">TV</button>
        <button class="no-active">Cinéma</button>
      </div>
      <div class="grid-tendances">
           <MovieList v-for="item in data" :key="item.id" :title="item.title" :date="item.release_date"
          :score="item.vote_average * 10" :id="item.id">      
          <template #image>
            <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`" alt="Hypnotic" />
          </template>
        </MovieList>
      </div>
    </div>
  </div>
</template>
