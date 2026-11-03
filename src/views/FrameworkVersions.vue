<template>
  <h2>Versions for Framework ID: {{ route.params.id }}</h2>
  <div v-if="version.length > 0">
    <ul>
      <li v-for="ver in version" :key="ver">{{ ver }}</li>
    </ul>
  </div>
  <RouterView />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()

const versionsData = {
  1: ['3.4.21', '3.3.8', '2.7.16'],
  2: ['18.2.0', '17.0.2', '16.14.0'],
  3: ['17.3.0', '16.2.0', '15.1.5']
}

const version = computed(() => {
  return versionsData[route.params.id] || []
})
</script>