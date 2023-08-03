import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../../layout/Layout.vue' 
import user_account from '../views/system_config/account_management/user_account.vue' 
  
const system_config = { 
  routes: [  
    {
      component: Layout, meta: { requiresAuth: true },
      children: [
        {
          path: '/config/userAccount', component: user_account, meta: { requiresAuth: true }
        }
      ]
    },
  ]
}

export default system_config

