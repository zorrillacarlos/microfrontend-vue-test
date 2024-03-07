import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/LayoutView.vue"),
  },
  {
    path: "/microfrontend-1",
    name: "MicroFrontend1",
    component: () => import("microfrontend-1/VistaMF1"),
  },
  {
    path: "/microfrontend-2",
    name: "MicroFrontend2",
    component: () => import("microfrontend-2/VistaMF2"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
