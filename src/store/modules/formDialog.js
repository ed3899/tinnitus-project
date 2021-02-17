import { formDialogMutations } from "../mutations/index.js";

export const module = {
  name: "formDialog",
  namespaced: true,
  state: () => ({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    ageRange: "",
    inquiry: {
      type: "",
      subject: "",
    },
    textArea: "",
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
    [formDialogMutations.SET_AGE_RANGE](state, { value }) {
      state.ageRange = value;
    },
    [formDialogMutations.SET_INQUIRY_TYPE](state, { value }) {
      state.inquiry.type = value;
    },
    [formDialogMutations.SET_INQUIRY_SUB](state, { value }) {
      state.inquiry.subject = value;
    },
    [formDialogMutations.SET_TEXTAREA](state, { value }) {
      state.textArea = value;
    },
    [formDialogMutations.SUBSCRIBE_NEWSLETTER](state, { value }) {
      //Switch toggle
      state.subscribeToNewsletter = value;
    },
    [formDialogMutations.OPEN_DIALOG](state) {
      state.isOpen = true;
    },
    [formDialogMutations.CLOSE_DIALOG](state) {
      state.isOpen = false;
    },
  },
  actions: {},
  getters: {},
};
