import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    NavState: {
      drawerState: false,
      listGroup: null,
    },
  }),
  mutations: {},
  actions: {},
  modules: {},
});
