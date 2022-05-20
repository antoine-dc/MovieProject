import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/details-films/:id",
      name: "details-films",
      component: () => import("../views/DetailsMovie.vue"),
    },
    {
      path: "/search/:search",
      name: "search",
      component: () => import("../views/SearchMovie.vue"),
    },
  ],
})

export default router
