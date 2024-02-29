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
  // {
  //   path: '/microfrontend-3',
  //   component: () => import('../../../microfrontend-3/src/App.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
