import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Layout from '../layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      component: Layout, meta: { requiresAuth: true },
      children: [
        {
          path: '/', component: HomeView, meta: { requiresAuth: true }
        }
      ]
    }, 
    {
      component: Layout, meta: { requiresAuth: true },
      children: [
        {
          path: '/about', component: AboutView, meta: { requiresAuth: true }
        }
      ]
    } 
  ]
})

export default router
