 
import Layout from '../../layout/Layout.vue'    
import Employee from '../../views/profile/Employee.vue'
import Create from '../../views/system_config/employee_management/create_employee.vue'
import View from '../../views/system_config/employee_management/view_employee.vue'


const userRouter = { 
    routes: [  
        {
            component: Layout, meta: { requiresAuth: true },
            children: [
                {
                    path: '/Employee/profile', component: Employee, meta: { requiresAuth: true }
                }
            ]
        },
        {
            component: Layout, meta: { requiresAuth: true },
            children: [
                {
                    path: '/Employee/create', component: Create, meta: { requiresAuth: true }
                }
            ]
        },
        {
            component: Layout, meta: { requiresAuth: true },
            children: [
                {
                    path: '/Employee/list', component: View, meta: { requiresAuth: true }
                }
            ]
        },
    ]
}

export default userRouter

