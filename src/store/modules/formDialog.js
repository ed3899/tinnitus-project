import { formDialogMutations } from "../mutations/index.js";
import { formDialogActions } from "../actions/index.js";
import axios from "axios";
import { encode } from "../../utils/index";

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

  actions: {
    async [formDialogActions.POST_FORM]({ getters }) {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };

      try {
        const res = await axios.post(
          "/home",
          encode({
            "form-name": "contact-dialog-form",
            ...getters.completeForm,
          }),
          axiosConfig
        );
      } catch (error) {
        console.error(`${error.name}:${error.message}`);
        return error;
      }
    },
  },

  getters: {
    completeForm(state) {
      return {
        firstName: state.firstName,
        middleName: state.middleName,
        lastName: state.lastName,
        email: state.email,
        ageRange: state.ageRange,
        inquiryType: state.inquiry.type,
        inquirySubject: state.inquiry.subject,
        textArea: state.textArea,
        subscribeToNewsletter: state.subscribeToNewsletter,
      };
    },
  },
};
