import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Frameworks from '../views/Frameworks.vue'
import FrameworkDetails from '../views/FrameworkDetails.vue'
import FrameworkVersions from '../views/FrameworkVersions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: Home 
    },
    { 
      path: '/frameworks', 
      name: 'frameworks', 
      component: Frameworks,
      children: [
        {
          path: ':id',
          name: 'framework-details',
          component: FrameworkDetails,
          children: [
            {
              path: 'versions',
              name: 'framework-versions-info',
              component: FrameworkVersions
            }
          ]
        }
      ]
    }
  ]
})

export default router