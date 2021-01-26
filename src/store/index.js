import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    NavBarMain: {
      isDrawerOpen: false,
    },
    CentralState: {
      currentBreadcrumbs: [],
    },
    socialMediaIcons: [
      { icon: "mdi-facebook", link: "https://www.facebook.com" },
      { icon: "mdi-twitter", link: "https://www.twitter.com" },
      { icon: "mdi-linkedin", link: "https://www.linkedin.com" },
    ],
  }),
  mutations: {
    toggleDrawerState(state, payload) {
      state.NavBarMain.isDrawerOpen = !state.NavBarMain.isDrawerOpen;
    },
    createBreadcrumbs(state, payload) {
      const matchedRoutesArray = payload.component.$route.matched;
      const thereAreMatchedRoutes = matchedRoutesArray.length > 0;
      const createArrayForBreadcrumbs = () => {
        const rawBreadcrumbRoutes = [];

        const nestedBreadcrumbRoutes = matchedRoutesArray.map(route => {
          const { path, name } = route;
          const routePathIsFalsy = !path;

          if (routePathIsFalsy) {
            const {
              meta: { alias },
            } = route;

            rawBreadcrumbRoutes.push(alias);
          } else {
            rawBreadcrumbRoutes.push(path);
          }

          const concatenatedRoute = rawBreadcrumbRoutes.join("");

          return {
            text: name,
            disabled: false,
            to: concatenatedRoute,
            exact: true,
          };
        });

        state.CentralState.currentBreadcrumbs = nestedBreadcrumbRoutes;
      };

      if (thereAreMatchedRoutes) {
        createArrayForBreadcrumbs();
      }
    },
  },
  actions: {},
  modules: {},
});
