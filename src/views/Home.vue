<template>
  <RouterLink to="/recipes" class="hero-link">
    <img src="/public/img/hero.png" alt="KebabExplorer - Los 5 mejores kebabs del mundo" />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero-link { display: block; }
.hero-link img {
  width: 100%;
  display: block;
  border-radius: 8px;
  transition: transform 0.2s;
}
.hero-link img:hover { transform: scale(1.01); }
</style>