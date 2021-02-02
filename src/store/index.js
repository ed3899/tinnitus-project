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
      { icon: "mdi-facebook" },
      { icon: "mdi-twitter" },
      { icon: "mdi-linkedin" },
    ],
  }),
  mutations: {
    toggleDrawerState(state, payload) {
      state.NavBarMain.isDrawerOpen = !state.NavBarMain.isDrawerOpen;
    },
    createBreadcrumbs(state, payload) {
      const matchedRoutesArray = payload.component.$route.matched;
      console.log(matchedRoutesArray);
      const thereAreMatchedRoutes = matchedRoutesArray.length > 0;
      const theFirstMatchIsHome =
        matchedRoutesArray[0].meta.alias === "/home" &&
        matchedRoutesArray[0].name === "Home";

      const createBreadcrumbsForHome = () => {
        const rawBreadcrumbRoutes = [];

        const nestedBreadcrumbRoutes = matchedRoutesArray.map((route, i) => {
          const {
            path,
            name,
            meta: { alias },
          } = route;
          const routePathIsFalsy = !path;
          const routeNameIsHome = name === "Home";

          if (routePathIsFalsy && routeNameIsHome) {
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
      const createBreadcrumbsForTheRest = () => {
        const normalBreadcrumbRoutes = matchedRoutesArray.map(route => {
          const { path, name } = route;
          return {
            text: name,
            disabled: false,
            to: path,
            exact: true,
          };
        });
        state.CentralState.currentBreadcrumbs = normalBreadcrumbRoutes;
      };

      if (thereAreMatchedRoutes && theFirstMatchIsHome) {
        createBreadcrumbsForHome();
      } else if (thereAreMatchedRoutes) {
        createBreadcrumbsForTheRest();
      }
    },
  },
  actions: {},
  modules: {},
});
