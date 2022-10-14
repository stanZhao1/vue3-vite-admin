import { createRouter, createWebHistory } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout.vue";
import modules from "./modules/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/index",
      component: BasicLayout,
      children: [
        {
          path: "index",
          name: "Index",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },
    ...modules,
    {
      path: "/login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/404.vue"),
    },
  ],
});

export default router;
