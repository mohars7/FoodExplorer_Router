<template>
  <div v-if="recipe" class="detail">
    <img :src="recipe.image" :alt="recipe.name" />
    <div>
      <h2>{{ recipe.name }}</h2>
      <p>{{ recipe.description }}</p>

      <h3>Ingredients</h3>
      <ul>
        <li v-for="item in recipe.ingredients" :key="item">{{ item }}</li>
      </ul>

      <h3>Pas a pas</h3>
      <ol>
        <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
      </ol>

      <RouterLink to="/recipes">← Tornar a receptes</RouterLink>
    </div>
  </div>

  <div v-else>
    <h2>Recepta no trobada</h2>
    <RouterLink to="/recipes">← Tornar a receptes</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { recipes } from '../data/recipes.js'

const route = useRoute()

const recipe = computed(() =>
  recipes.find(r => r.id === Number(route.params.id))
)
</script>

<style scoped>
.detail { display: flex; gap: 25px; flex-wrap: wrap; }
.detail img {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 6px;
}
.detail > div { flex: 1; min-width: 250px; }
</style>