import { createRouter, createWebHistory } from 'vue-router' 
import Layout from '../layout/Layout.vue'

import login from '../views/Auth/login.vue'

import EmployeeDashboard from '../views/Dashboard/EmployeeDashboard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    { 
      path: '/login', component: login, meta: { requiresAuth: true }
    }, 
    {
      component: Layout, meta: { requiresAuth: true },
      children: [
        {
          path: '/EmployeeDashboard', component: EmployeeDashboard, meta: { requiresAuth: true }
        }
      ]
    }, 
  ]
})

export default router
