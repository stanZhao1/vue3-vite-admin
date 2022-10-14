import BasicLayout from "@/layouts/BasicLayout.vue";

const withSidebar = {
  path: "/withSidebar",
  component: BasicLayout,
  redirect: "/withSidebar/table",
  children: [
    {
      path: "table",
      component: () => import("@/views/withSidebar/table/Index.vue"),
    },
    {
      path: "editor",
      component: () => import("@/views/withSidebar/editor/Index.vue"),
    },
  ],
};
export default withSidebar;
