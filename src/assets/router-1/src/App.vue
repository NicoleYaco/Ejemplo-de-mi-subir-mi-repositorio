<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="navbar bg-body-tertiary">
  <div class="container">
      <a class="navbar-brand" href="#">
      <img 
      src="@/assets/logo.svg" 
      alt="Logo"
      width="30" 
      height="24" 
      class="d-inline-block align-text-top">
      />
      PokeAPI

      <div>
        <router-link class="btn btn-outline-primary" to="/">Home</router-link>
        <router-link class="btn btn-outline-primary" to="/pokemons">Pokemons</router-link>
      </div>
     </a>
  </div>
</nav>

<div class="container">
  <RouterView />
</div> 
  <footer> footer </footer>
</template>
 
