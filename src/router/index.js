import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const lazyLoadedComponents = {
  Home: () => import("../views/Home.vue"),
  About: () => import("../views/About.vue"),
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoadedComponents.Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: lazyLoadedComponents.About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
