import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth/authRouter'
import userRouter from './system_config/user_management/userRouter' 
import { supabase } from '../services/online/supabase'

import EmployeeDashboard from '../views/Dashboard/EmployeeDashboard.vue'
import Layout from '../layout/Layout.vue' 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes:[
   
    ...authRouter.routes,
    ...userRouter.routes,
  ]
})

async function getUserSession(next){
  const localUser = await supabase.auth.getSession();
  if(localUser.data.session == null){
    next('/unauthorized')
  }else{
    next();
  }
}
router.beforeEach((to,from,next) => {
  if(to.meta.requiresAuth){
    getUserSession(next)
  }else{
    next()
  }
})

export default router
 