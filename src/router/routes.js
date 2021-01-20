export const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    icon: "mdi-home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        name: "Quick Guide",
        path: "quick-guide",
        component: () =>
          import("../components/ViewsChildren/Home/QuickGuide.vue"),
      },
      {
        name: "Learning to Overcome It",
        path: "overcoming-it",
        component: () =>
          import("../components/ViewsChildren/Home/OvercomingIt.vue"),
      },
      {
        name: "More Information",
        path: "info",
        component: () =>
          import("../components/ViewsChildren/Home/MoreInformation.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About Us",
    icon: "mdi-office-building",
    component: () => import("../views/AboutUs.vue"),
    children: [
      {
        name: "Our Vision",
        path: "vision",
        component: () =>
          import("../components/ViewsChildren/AboutUs/OurVision.vue"),
      },
      {
        name: "Our Team",
        path: "team",
        component: () =>
          import("../components/ViewsChildren/AboutUs/OurTeam.vue"),
      },
      {
        name: "How Your Money Helps",
        path: "how-your-money-helps",
        component: () =>
          import("../components/ViewsChildren/AboutUs/HowYourMoneyHelps.vue"),
      },
    ],
  },
  {
    path: "/learn",
    name: "Learn More",
    icon: "mdi-book-search",
    component: () => import("../views/LearnMore.vue"),
  },
  {
    path: "/contact",
    name: "Contact Us",
    icon: "mdi-email",
    component: () => import("../views/ContactUs.vue"),
  },
];
