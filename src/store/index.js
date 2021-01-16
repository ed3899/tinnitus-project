import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    drawer: false,
    group: null,
  }),
  mutations: {
    showDrawer(state) {
      state.drawer = true;
      console.log("Showing drawer");
    },
  },
  actions: {},
  modules: {},
});
