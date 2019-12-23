/* Layout */
import Layout from "@/views/layout/Layout";
export function vadRouterList() {
  return [
    {
      path: "/system",
      component: Layout,
      redirect: "admin",
      meta: {
        roles: ["superadmin"]
      },
      children: [
        {
          path: "admin",
          component: () => import("@/vad-pages/adminManage.vue"),
          name: "admin",
          meta: {
            title: "管理员",
            icon: "lock",
            noCache: true,
            roles: ["superadmin"]
          }
        }
      ]
    },
    {
      path: "/order",
      component: Layout,
      redirect: "admin",
      meta: {
        roles: ["superadmin"]
      },
      children: [
        {
          path: "order",
          component: () => import("@/vad-pages/orderManage.vue"),
          name: "order",
          meta: {
            title: "订单",
            icon: "lock",
            noCache: true,
            roles: ["superadmin"]
          }
        }
      ]
    }
  ];
}
