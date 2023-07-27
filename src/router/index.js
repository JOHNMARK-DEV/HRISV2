import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth/authRouter'
import userRouter from './system_config/user_management/userRouter' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes:[
    ...authRouter.routes,
    ...userRouter.routes,
  ]
})

export default router
 