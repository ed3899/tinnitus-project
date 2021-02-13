import { formDialogMutations } from "../mutations/index.js";

export const module = {
  name: "formDialog",
  namespaced: true,
  state: () => ({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    subscribeToNewsletter: false,
    isOpen: false,
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
    [formDialogMutations.SUBSCRIBE_NEWSLETTER](state) {
      //Switch toggle
      state.subscribeToNewsletter = !state.subscribeToNewsletter;
    },
    [formDialogMutations.OPEN_DIALOG](state) {
      state.isOpen = true;
    },
    [formDialogMutations.CLOSE_DIALOG](state) {
      state.isOpen = false;
    },
    [formDialogMutations.RESET_FORM](state) {
      state.middleName = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.subscribeToNewsletter = false;
    },
  },
  actions: {},
  getters: {},
};
