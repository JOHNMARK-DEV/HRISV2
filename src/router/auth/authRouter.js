 import login from '../../views/auth/login.vue'
// import Employee from '../views/Profile/Employee.vue'
// import EmployeeDashboard from '../views/Dashboard/EmployeeDashboard.vue'


const authRouter = { 
  routes: [
    {
      path: '/login', component: login, meta: { requiresAuth: true }
    },
  ]
}

export default authRouter

