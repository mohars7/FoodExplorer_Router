<template>
  <div v-if="framework">
    <h2>{{ framework.name }}</h2>
    <p>{{ framework.desc }}</p>

    <p>
      <RouterLink :to="`/frameworks/${framework.id}/versions`">
        Ver versiones de {{ framework.name }}
      </RouterLink>
    </p>

    <hr />
    <RouterView />
  </div>
  <p v-else>
    Framework not found.
    <br />
    <RouterLink to="/frameworks">Back to Frameworks</RouterLink>
  </p>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'

const route = useRoute()

const frameworks = [
  { id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
  { id: 2, name: 'React', desc: 'Biblioteca per crear interfícies d\'usuari interactives.' },
  { id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
]

const framework = computed(() => {
  const frameworkId = parseInt(route.params.id)
  return frameworks.find(f => f.id === frameworkId)
})
</script>