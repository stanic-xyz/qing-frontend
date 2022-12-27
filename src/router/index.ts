import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Activity from "@/views/ActivityPage.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import ExceptionPage from "@/views/exception/ExceptionPage.vue";
import AnimeInfo from "@/views/anime/AnimeInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: "/:pathMatch(.*)*", name: "NotFound", component: ExceptionPage },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../views/CatalogPage.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    { path: "/users/:id", component: Activity },
    { path: "/login", component: LoginPage },
    { path: "/anime", component: AnimeInfo },
  ],
});

export default router;
