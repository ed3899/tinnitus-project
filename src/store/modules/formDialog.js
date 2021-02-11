import { formDialogMutations } from "../mutations/index.js";

export const module = {
  name: "formDialog",
  namespaced: true,
  state: () => ({
    firstName: "",
  }),
  mutations: {
    [formDialogMutations.SET_FIRST_NAME](state, { value }) {
      state.firstName = value;
    },
  },
  actions: {},
  getters: {},
};
