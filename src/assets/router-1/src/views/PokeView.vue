<script setup>
import axios from 'axios'
import {useRoute,useRouter } from 'vue-router'
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const poke = ref({});

// function back() {
//     router.push('/pokemons');
// }

const back = () => {
    router.push({name:'pokemons'})
}

async function getData() {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        // console.log(data);
        poke.value = data;
    } catch (error) {
        console.log(error);
    }
}

getData();
</script>

<template>
    <img :src="poke.sprites?.front_default" alt=""/>
    <h1>Poke name: {{ $route.params?.name }} </h1>
    <button @click="back">Volver</button>
</template>