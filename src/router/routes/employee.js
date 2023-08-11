import Layout from "../../layout/Layout.vue";
import Employee from "../../views/profile/Employee.vue";
import Create from "../../views/system_config/employee_management/create_employee.vue";
import View from "../../views/system_config/employee_management/view_employee.vue";
import StatusServices from "../../views/system_config/employee_management/emp_status_services.vue";
import PositionServices from "../../views/system_config/employee_management/position_services.vue";

const userRouter = {
  routes: [
    {
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/Employee/profile",
          component: Employee,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/Employee/create",
          component: Create,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/Employee/list",
          component: View,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/Employee/status-services",
          component: StatusServices,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/Employee/position-services",
          component: PositionServices,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
};

export default userRouter;
