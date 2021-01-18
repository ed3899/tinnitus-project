import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const lazyLoadedComponents = {
  HomeView: () => import("../views/Home.vue"),
  AboutUsView: () => import("../views/AboutUs.vue"),
  LearnMoreView: () => import("../views/LearnMore.vue"),
  ContactUsView: () => import("../views/ContactUs.vue"),
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoadedComponents.HomeView,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: lazyLoadedComponents.AboutUsView,
  },
  {
    path: "/learn-more",
    name: "LearnMore",
    component: lazyLoadedComponents.LearnMoreView,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: lazyLoadedComponents.ContactUsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
