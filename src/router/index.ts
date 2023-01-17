import { createRouter, createWebHistory } from "vue-router";
import Activity from "@/views/Activity.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import ExceptionPage from "@/views/exception/ExceptionPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../views/Catalog.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/login",
      name: "catalog",
      component: () => import("../views/login/LoginPage.vue"),
    },
    { path: "/users/:id", component: Activity },
    { path: "/login", component: LoginPage },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: "/:pathMatch(.*)*", name: "NotFound", component: ExceptionPage },
  ],
});

export default router;
