/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // tagit bort createWebHistory(import.meta.env.BASE_URL) nedan för debugg
  history: createWebHistory(),
  routes: [
    {
      path: "/create-account",
      component: () => import("../views/CreateAccountView.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/profile",
      component: () => import("../presenters/ProfilePresenter.vue"),
      //   meta: {
      //     requiresAuth: true,
      //   },
    },
    {
      path: "/forgot-account",
      component: () => import("../views/ForgotPassword.vue"),
    },
  ],
});

export default router;
