import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PesanViewVue from "../views/PesanView.vue";
import LoginViewVue from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../layouts/UserDashboardView.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "pesan",
          name: "pesan",
          component: PesanViewVue,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginViewVue,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../components/PageNotFound.vue"),
    },
  ],
  linkActiveClass:
    "underline underline-offset-4 lg:bg-slate-200/95 lg:text-cyan-800 font-medium",
});

const isAuthenticated = false;

export default router;
