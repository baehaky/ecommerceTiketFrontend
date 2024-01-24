import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PesanViewVue from "../views/PesanView.vue";
import PageNotFoundVue from "@/components/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/pesan",
      name: "pesan",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PesanViewVue,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/PageNotFound.vue"),
    },
  ],
  linkActiveClass: "underline underline-offset-4 lg:bg-slate-200/95 lg:text-cyan-800 font-medium",
});

export default router;
