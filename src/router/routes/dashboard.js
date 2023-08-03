 
import Layout from '../../layout/Layout.vue'  
import Dashboard from '../../views/dashboard/Dashboard.vue' 


const dashboard = { 
    routes: [
        {
            component: Layout, meta: { requiresAuth: true },
            children: [
                {
                    path: '/Dashboard', component: Dashboard, meta: { requiresAuth: true }
                }
            ]
        },  
    ]
}

export default dashboard

