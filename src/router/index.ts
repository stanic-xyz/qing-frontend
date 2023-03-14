import { createRouter, createWebHistory } from "vue-router";
import Activity from "@/views/Activity.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import ExceptionPage from "@/views/exception/ExceptionPage.vue";
import AuthingLogin from "@/views/login/AuthingLogin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/index",
      name: "index",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/recommend",
      name: "recommend",
      component: () => import("../views/Recommend.vue"),
    },
    {
      path: "/update",
      name: "update",
      component: () => import("../views/UpdatePage.vue"),
    },
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../views/catlog/Catalog.vue"),
    },
    {
      path: "/rank",
      name: "rank",
      component: () => import("../views/RankPage.vue"),
    },
    {
      path: "/anime/:animeId",
      name: "anime",
      component: () => import("../views/Detail.vue"),
    },
    {
      path: "/play/:animeId",
      name: "play",
      component: () => import("../views/PlayPage.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/LoginPage.vue"),
    },

    { path: "/users/:id", component: Activity },
    { path: "/login", component: LoginPage },
    { path: "/login/authing", component: AuthingLogin },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: "/:pathMatch(.*)*", name: "NotFound", component: ExceptionPage },
  ],
});

export default router;
