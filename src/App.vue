<template>
  <div>
    <nav>
      <RouterLink to="/">🏠 inici</RouterLink> | 
      <RouterLink to="/frameworks">Ver Frameworks</RouterLink>
    </nav>
    <hr />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>