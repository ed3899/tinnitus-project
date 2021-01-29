export const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    icon: "mdi-home",
    component: () => import("../views/Home.vue"),
    meta: { alias: "/home" },
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
        meta: {
          dummyData: async () => {
            const module = await import("../data/MoreInformation.js");
            return module.data();
          },
        },
        component: () => import("../components/Blog/BlogMain.vue"),
      },
    ],
  },
  {
    path: "/about",
    alias: "/about-us",
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
    path: "/support",
    alias: "/get-support",
    name: "Get Support",
    icon: "mdi-book-search",
    component: () => import("../views/GetSupportView.vue"),
    children: [
      {
        name: "Where Can I Get Help",
        path: "where-to-get-help",
        component: () =>
          import("../components/ViewsChildren/GetSupport/WhereToGetHelp.vue"),
      },
      {
        name: "Your stories",
        path: "your-stories",
        component: () =>
          import("../components/ViewsChildren/GetSupport/YourStories.vue"),
      },
    ],
  },
  {
    path: "/research",
    alias: "/research-state",
    name: "Research",
    icon: "mdi-email",
    component: () => import("../views/ResearchView.vue"),
    children: [
      {
        name: "Research News",
        path: "news",
        component: () =>
          import("../components/ViewsChildren/Research/ResearchNews.vue"),
      },
      {
        name: "Taking Part",
        path: "taking-part",
        component: () =>
          import("../components/ViewsChildren/Research/TakingPart.vue"),
      },
    ],
  },
  {
    path: "/test-comp",
    alias: "/test-component",
    name: "Test Component",
    icon: "mdi-email",
    meta: {
      dummyData: async () => {
        const module = await import("../data/MoreInformation.js");
        return module.data();
      },
    },
    component: () => import("../components/Blog/BlogMain.vue"),
  },
];
