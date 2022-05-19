<script setup>
import MovieList from '@/components/MovieList.vue'
import axios from 'axios';
import { ref } from 'vue'

let data = ref({}) // On créé une variable référence, qui pourra être utilisée dans le template
let urlAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=b8784e79c57339a259c473aaa7bdab93&language=fr-FR'; // Un exemple d'API simple

async function loadData() {
  await axios.get(urlAPI)
    .then((response) =>
      data.value = response.data.results // On précise le .data mais ça dépendra des API
    )

}
loadData(); // On lance la fonction pour récupérer les données de l'API

</script>

<template>
  <!-- Content -->

  <div class="search-container">
    <input type="text" placeholder="Rechercher un film" />
    <button type="submit"><i class="fas fa-search"></i></button>
  </div>

  <div class="wrapper">
    <div class="tendances-container container">
      <div class="title-tendances">
        <h2>Tendances</h2>
        <button class="active">Aujourd'hui</button>
        <button class="no-active">Cette semaine</button>
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

  <div class="wrapper-pop">
    <div class="populaires-container container">
      <div class="title-tendances">
        <h2>Populaires</h2>
        <button class="active">Streaming</button>
        <button class="no-active">TV</button>
        <button class="no-active">Cinéma</button>
      </div>
      <div class="grid-tendances">
        <div class="movie">
          <img src="@/assets/images/greys.jpg" alt="" />
          <div class="score">
            <p>80%</p>
          </div>
          <h5>Grey's Anatomy</h5>
          <p>15 sept 2021</p>
        </div>
        <div class="movie">
          <img src="@/assets/images/got.jpg" alt="" />
          <div class="score">
            <p>80%</p>
          </div>
          <h5>Game of Thrones</h5>
          <p>15 sept 2021</p>
        </div>
        <div class="movie">
          <img src="@/assets/images/mortal.jpg" alt="" />
          <div class="score">
            <p>80%</p>
          </div>
          <h5>Mortal Kombat</h5>
          <p>15 sept 2021</p>
        </div>
        <div class="movie">
          <img src="@/assets/images/lucas.jpg" alt="" />
          <div class="score">
            <p>80%</p>
          </div>
          <h5>Luca</h5>
          <p>15 sept 2021</p>
        </div>
      </div>
    </div>
  </div>
</template>
