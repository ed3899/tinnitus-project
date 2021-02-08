export const routePaths = {
  home: {
    path: "/home",
    alias: "/",
    name: "Home",
    children: {
      quickGuide: "quick-guide",
      overcomingIt: "overcoming-it",
      info: "info",
    },
  },
  about: {
    path: "/about",
    name: "About Us",
    children: {
      ourVision: "vision",
      team: "team",
      howYourMoneyHelps: "how-your-money-helps",
    },
  },
  support: {
    path: "/support",
    name: "Get Support",
    children: {
      whereCanIGetHelp: "where-to-get-help",
      yourStories: "your-stories",
    },
  },
  research: {
    path: "/research",
    name: "Research",
    children: {
      researchNews: "news",
      takingPart: "taking-part",
    },
  },
};

export const routes = [
  {
    path: routePaths.home.path,
    alias: routePaths.home.alias,
    name: routePaths.home.name,
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
          import("../components/ChildrenBaseLayout/ChildrenBaseLayoutMain.vue"),
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
    path: routePaths.about.path,
    name: routePaths.about.name,
    icon: "mdi-office-building",
    component: () => import("../views/AboutUs.vue"),
    children: [
      {
        name: "Our Vision",
        path: routePaths.about.children.ourVision,
        component: () =>
          import("../components/ViewsChildren/AboutUs/Children.vue"),
      },
      {
        name: "Our Team",
        path: routePaths.about.children.team,
        component: () =>
          import("../components/ViewsChildren/AboutUs/Children.vue"),
      },
      {
        name: "How Your Money Helps",
        path: routePaths.about.children.howYourMoneyHelps,
        component: () =>
          import("../components/ViewsChildren/AboutUs/Children.vue"),
      },
    ],
  },
  {
    path: routePaths.support.path,
    name: routePaths.support.name,
    icon: "mdi-book-search",
    component: () => import("../views/GetSupportView.vue"),
    children: [
      {
        name: "Where Can I Get Help",
        path: routePaths.support.children.whereCanIGetHelp,
        component: () =>
          import("../components/ChildrenBaseLayout/ChildrenBaseLayoutMain.vue"),
      },
      {
        name: "Your stories",
        path: routePaths.support.children.yourStories,
        component: () =>
          import("../components/ChildrenBaseLayout/ChildrenBaseLayoutMain.vue"),
      },
    ],
  },
  {
    path: routePaths.research.path,
    name: routePaths.research.name,
    icon: "mdi-email",
    component: () => import("../views/ResearchView.vue"),
    children: [
      {
        name: "Research News",
        path: routePaths.research.children.researchNews,
        component: () =>
          import("../components/ViewsChildren/Research/ResearchNews.vue"),
      },
      {
        name: "Taking Part",
        path: routePaths.research.children.takingPart,
        component: () =>
          import("../components/ViewsChildren/Research/TakingPart.vue"),
      },
    ],
  },
];
