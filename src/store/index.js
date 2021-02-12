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
  },
  modules: {
    [dummyDataModule.name]: dummyDataModule,
    [formDialogModule.name]: formDialogModule,
  },
});

// if (module.hot) {
//   module.hot.accept(["./mutations/index", "./modules/index"], () => {
//     store.hotUpdate({
//       mutations: require("./mutations/index"),
//       modules: {
//         [dummyDataModule.name]: dummyDataModule,
//         [formDialogModule.name]: formDialogModule,
//       },
//     });
//   });
// }
