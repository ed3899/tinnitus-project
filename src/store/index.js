import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    NavBarMain: {
      isDrawerOpen: false,
    },
  }),
  mutations: {
    toggleDrawerState(state, payload) {
      state.NavBarMain.isDrawerOpen = !state.NavBarMain.isDrawerOpen;
    },
  },
  actions: {},
  modules: {},
});
