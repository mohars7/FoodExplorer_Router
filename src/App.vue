<template>
  <header class="header">
    <h1>🥙 KebabExplorer</h1>
    <nav>
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/recipes">Receptes</RouterLink>
    </nav>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #faf6f0;
  color: #333;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #8b1e1e;
  color: white;
}
.header h1 { margin: 0; font-size: 22px; }
.header nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
}
.header nav a.router-link-exact-active {
  border-bottom: 2px solid #ffd166;
}
.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
}
.button {
  display: inline-block;
  padding: 8px 14px;
  background: #8b1e1e;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>