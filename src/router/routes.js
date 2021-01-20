import { routesChildren } from "./routesChildren.js";
const { QuickGuide, OvercomingIt, MoreInformation } = routesChildren;

const lazyLoadedComponents = {
  HomeView: () => import("../views/Home.vue"),
  AboutUsView: () => import("../views/AboutUs.vue"),
  LearnMoreView: () => import("../views/LearnMore.vue"),
  ContactUsView: () => import("../views/ContactUs.vue"),
};

export const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    icon: "mdi-home",
    component: lazyLoadedComponents.HomeView,
    children: [
      {
        name: "Quick Guide",
        path: "quick-guide",
        component: QuickGuide,
      },
      {
        name: "Learning to Overcome It",
        path: "overcoming-it",
        component: OvercomingIt,
      },
      {
        name: "More Information",
        path: "information",
        component: MoreInformation,
      },
    ],
  },
  {
    path: "/about",
    name: "About Us",
    icon: "mdi-office-building",
    component: lazyLoadedComponents.AboutUsView,
    children: [{ name: "Our Vision", path: "vision" }],
  },
  {
    path: "/learn",
    name: "Learn More",
    icon: "mdi-book-search",
    component: lazyLoadedComponents.LearnMoreView,
  },
  {
    path: "/contact",
    name: "Contact Us",
    icon: "mdi-email",
    component: lazyLoadedComponents.ContactUsView,
  },
];
