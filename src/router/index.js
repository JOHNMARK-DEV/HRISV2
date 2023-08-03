import { createRouter, createWebHistory } from 'vue-router'
import auth from './routes/auth'
import employee from './routes/employee'
import dashboard from './routes/dashboard'
import { supabase } from '../services/online/supabase'
import AuthService_Local from '../services/local/Authentication/Auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    ...auth.routes,
    ...employee.routes,
    ...dashboard.routes,
  ]
})

async function getUserSession(next) {

  if (import.meta.env.VITE_APP_ENV == 'local') {

    const localUser = await AuthService_Local.getSession(); 
    if (localUser.data == null || localUser.data == '') {
      next('/unauthorized')
    } else {
      next();
    }

  } else {

    const localUser = await supabase.auth.getSession();
    if (localUser.data.session == null) {
      next('/unauthorized')
    } else {
      next();
    }

  }
}
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUserSession(next)
  } else {
    next()
  }
})

export default router
