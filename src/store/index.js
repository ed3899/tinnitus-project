import Vue from "vue";
import Vuex from "vuex";
import { data as dummyCards } from "../data/LatestCards";

const { cards: dummyCardData } = dummyCards();

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
    dummyCardData,
    latestNews: [],
  }),
  mutations: {
    toggleDrawerState(state, payload) {
      state.NavBarMain.isDrawerOpen = !state.NavBarMain.isDrawerOpen;
    },
    createBreadcrumbs(state, { component }) {
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
        state.CentralState.currentBreadcrumbs = normalBreadcrumbRoutes;
      };

      if (thereAreMatchedRoutes) {
        createBreadcrumbs();
      }
    },
    setLatestNews(state, { news }) {
      state.latestNews = news;
    },
  },
  actions: {
    async getLatestNews({ commit }) {
      const module = await import("../data/LatestNews.js");
      const news = await module.data();
      commit({ type: "setLatestNews", news });
    },
  },
  modules: {},
});
