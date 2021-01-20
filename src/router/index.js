import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const lazyLoadedComponents = {
  HomeView: () => import("../views/Home.vue"),
  AboutUsView: () => import("../views/AboutUs.vue"),
  LearnMoreView: () => import("../views/LearnMore.vue"),
  ContactUsView: () => import("../views/ContactUs.vue"),
};

import TestVue from "../components/HomeChildren/Test.vue";

export const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: lazyLoadedComponents.HomeView,
    children: [
      {
        path: "test",
        component: TestVue,
      },
    ],
  },
  {
    path: "/about",
    name: "About Us",
    component: lazyLoadedComponents.AboutUsView,
  },
  {
    path: "/learn-more",
    name: "Learn More",
    component: lazyLoadedComponents.LearnMoreView,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: lazyLoadedComponents.ContactUsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
