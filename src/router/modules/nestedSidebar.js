import BasicLayout from "@/layouts/BasicLayout.vue";

const nestedNavbar = {
  path: "/nestedNavbar",
  component: BasicLayout,
  redirect: "/nestedNavbar/level1",
  children: [
    {
      path: "level1",
      component: () => import("@/views/nestedSidebar/Test.vue"),
      children: [
        {
          path: "level1-1",
          component: () => import("@/views/nestedSidebar/Test.vue"),
          children: [
            {
              path: "level1-1-1",
              component: () => import("@/views/nestedSidebar/Test.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "level2",
      component: () => import("@/views/nestedSidebar/Test.vue"),
      children: [
        {
          path: "level2-1",
          component: () => import("@/views/nestedSidebar/Test.vue"),
        },
      ],
    },
    {
      path: "level3",
      component: () => import("@/views/nestedSidebar/Test.vue"),
    },
  ],
};

export default nestedNavbar;
