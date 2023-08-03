 import login from '../../views/auth/login.vue'
 import unauthorized from '../../views/auth/unauthorized.vue'
// import Employee from '../views/Profile/Employee.vue'
// import EmployeeDashboard from '../views/Dashboard/EmployeeDashboard.vue'


const authRouter = { 
  routes: [
    {
      path: '/login', component: login, meta: { requiresAuth: false }
    },
    {
      path: '/unauthorized', component: unauthorized, meta: { requiresAuth: false }
    },
  ]
}

export default authRouter

