//Create an object in order to make comparison between variables easier as well as
// accessing the info. Routes array is not intuitive enough.

//Avoid chaging property names

//Next time create an object and sparce it across

export const routePaths = {
  home: {
    path: "/home",
    alias: "/",
    name: "Home",
    children: {
      quickGuide: "quick-guide",
      overcomingIt: "overcoming-it",
      moreInformation: "info",
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
        path: routePaths.home.children.quickGuide,
        component: () =>
          import(
            "../components/ChildrenBaseLayout/UniqueChildren/QuickGuide.vue"
          ),
      },
      {
        name: "Learning to Overcome It",
        path: routePaths.home.children.overcomingIt,
        component: () =>
          import("../components/ChildrenBaseLayout/ChildrenBaseLayoutMain.vue"),
      },
      {
        name: "More Information",
        path: routePaths.home.children.moreInformation,
        component: () =>
          import("../components/ChildrenBaseLayout/ChildrenBaseLayoutMain.vue"),
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
          import("../components/ChildrenBaseLayout/ChildrenBaseLayoutMain.vue"),
      },
      {
        name: "Our Team",
        path: routePaths.about.children.team,
        component: () =>
          import("../components/ChildrenBaseLayout/ChildrenBaseLayoutMain.vue"),
      },
      {
        name: "How Your Money Helps",
        path: routePaths.about.children.howYourMoneyHelps,
        component: () =>
          import("../components/ChildrenBaseLayout/ChildrenBaseLayoutMain.vue"),
      },
    ],
  },
  {
    path: routePaths.support.path,
    name: routePaths.support.name,
    icon: "mdi-account-supervisor",
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
    path: "/:pathMatch(.*)*",
    name: "NotFound404",
    component: () => import("../components/NotFound404/NotFound404.vue"),
  },
];
