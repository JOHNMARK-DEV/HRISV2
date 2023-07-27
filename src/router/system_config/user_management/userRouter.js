import { createRouter, createWebHistory } from 'vue-router' 
import Layout from '../../../layout/Layout.vue' 
// import Employee from '../views/Profile/Employee.vue'
import EmployeeDashboard from '../../../views/Dashboard/EmployeeDashboard.vue'
import user_account from '../../../views/system_config/account_management/user_account.vue'


const userRouter = { 
    routes: [
        {
            component: Layout, meta: { requiresAuth: true },
            children: [
                {
                    path: '/User/EmployeeDashboard', component: EmployeeDashboard, meta: { requiresAuth: true }
                }
            ]
        },

        {
            component: Layout, meta: { requiresAuth: true },
            children: [
                {
                    path: '/User/user_account', component: user_account, meta: { requiresAuth: true }
                }
            ]
        },
    ]
}

export default userRouter

