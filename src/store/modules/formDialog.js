import { formDialogMutations } from "../mutations/index.js";

export const module = {
  name: "formDialog",
  namespaced: true,
  state: () => ({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
  }),
  mutations: {
    [formDialogMutations.SET_FIRST_NAME](state, { value }) {
      state.firstName = value;
    },
    [formDialogMutations.SET_MIDDLE_NAME](state, { value }) {
      state.middleName = value;
    },
    [formDialogMutations.SET_LAST_NAME](state, { value }) {
      state.lastName = value;
    },
    [formDialogMutations.SET_EMAIL](state, { value }) {
      state.email = value;
    },
    [formDialogMutations.SET_PASSWORD](state, { value }) {
      state.password = value;
    },
  },
  actions: {},
  getters: {},
};
