import { createRouter, createWebHistory } from "vue-router";
import Activity from "@/views/Activity.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import ExceptionPage from "@/views/exception/ExceptionPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/index/index.html",
      name: "index",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/recommend/index.html",
      name: "recommend",
      component: () => import("../views/Recommend.vue"),
    },
    {
      path: "/update/index.html",
      name: "update",
      component: () => import("../views/UpdatePage.vue"),
    },
    {
      path: "/catalog/index.html",
      name: "catalog",
      component: () => import("../views/Catalog.vue"),
    },
    {
      path: "/rank/index.html",
      name: "rank",
      component: () => import("../views/RankPage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/LoginPage.vue"),
    },

    { path: "/users/:id", component: Activity },
    { path: "/login", component: LoginPage },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: "/:pathMatch(.*)*", name: "NotFound", component: ExceptionPage },
  ],
});

export default router;
