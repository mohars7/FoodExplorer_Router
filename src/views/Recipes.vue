<template>
  <h2>Receptes</h2>
  <div class="list">
    <div v-for="recipe in recipes" :key="recipe.id" class="card">
      <img :src="recipe.image" :alt="recipe.name" />
      <h3>{{ recipe.name }}</h3>
      <p>{{ recipe.description }}</p>
      <RouterLink :to="`/recipes/${recipe.id}`" class="button">Veure detall</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { recipes } from '../data/recipes.js'
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 15px;
}
.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
}
.card h3 { margin: 10px 0 5px; }
</style>