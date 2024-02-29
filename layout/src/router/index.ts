import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/Principal.vue"),
  },
  {
    path: "/microfrontend-1",
    component: () => import("microfrontend-1/VistaMF1"),
  },
  {
    path: "/microfrontend-2",
    name: "MicroFrontend2",
    component: () => import("microfrontend-2/VistaNueva"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
