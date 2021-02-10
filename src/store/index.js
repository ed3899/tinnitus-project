import Vue from "vue";
import Vuex from "vuex";

//Modules
import { module as dummyDataModule } from "./modules/dummyData.js";

//Mutations
import * as Mutations from "./mutations/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    NavBarMain: {
      isDrawerOpen: false,
    },

    CentralState: {
      currentBreadcrumbs: [],
    },

    //Used by Breadcrumbs.vue
    currentBreadcrumbs: [],

    //Used by NavBarMain.vue and FooterMain.vue
    socialMediaIcons: [
      { icon: "mdi-facebook" },
      { icon: "mdi-twitter" },
      { icon: "mdi-linkedin" },
    ],
  }),
  mutations: {
    [Mutations.TOGGLE_DRAWER_STATE](state, payload) {
      state.NavBarMain.isDrawerOpen = !state.NavBarMain.isDrawerOpen;
    },
    [Mutations.CREATE_BREADCRUMBS](state, { component }) {
      const matchedRoutesArray = component.$route.matched;
      const thereAreMatchedRoutes = matchedRoutesArray.length > 0;

      const createBreadcrumbs = () => {
        const normalBreadcrumbRoutes = matchedRoutesArray.map(route => {
          const { path, name } = route;
          return {
            text: name,
            disabled: false,
            to: path,
            exact: true,
          };
        });
        state.currentBreadcrumbs = normalBreadcrumbRoutes;
      };

      if (thereAreMatchedRoutes) {
        createBreadcrumbs();
      }
    },
  },
  modules: {
    [dummyDataModule.name]: dummyDataModule,
  },
});
