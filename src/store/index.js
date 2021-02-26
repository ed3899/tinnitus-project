import Vue from "vue";
import Vuex from "vuex";

//Modules
import { dummyDataModule, formDialogModule } from "./modules/index";

//Mutations
import { mainStoreMutations } from "./mutations/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    //Used by Breadcrumbs.vue
    currentBreadcrumbs: [],

    //Used by NavBarMain.vue and FooterMain.vue
    socialMediaIcons: [
      { icon: "mdi-facebook" },
      { icon: "mdi-twitter" },
      { icon: "mdi-linkedin" },
    ],

    //Snackbars
    isSnackbarVisible: false,
    isSnackbarFailureVisible: false,

    // %Lazy
    lazy: {
      options: {
        threshold: 0.5,
      },
      transition: "fade-transition",
    },
  }),
  mutations: {
    [mainStoreMutations.CREATE_BREADCRUMBS](state, { component }) {
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
    [mainStoreMutations.DISPLAY_SNACKBAR](state, { value }) {
      state.isSnackbarVisible = value;
    },
    [mainStoreMutations.DISPLAY_FAILURE_SNACKBAR](state, { value }) {
      if (!state.isSnackbarVisible) {
        state.isSnackbarFailureVisible = value;
      }
    },
  },
  modules: {
    [dummyDataModule.name]: dummyDataModule,
    [formDialogModule.name]: formDialogModule,
  },
});
