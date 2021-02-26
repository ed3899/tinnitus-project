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
      try {
        const res2 = await axios({
          method: "post",
          url: "/home",
          data: encode({
            "form-name": "contact-dialog-form",
            ...getters.completeForm,
          }),
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        console.log(res2.data);
      } catch (error) {
        console.error(`${error.name}:${error.message}`);
        return error;
      }
    },
  },

  getters: {
    completeForm(state) {
      return {
        //These have to matched the form in the entry index.html
        "first-name": state.firstName,
        "middle-name": state.middleName,
        "last-name": state.lastName,
        email: state.email,
        "selected-age-range": state.ageRange,
        "inquiry-type": state.inquiry.type,
        "inquiry-subject": state.inquiry.subject,
        message: state.textArea,
        "subscribe-to-newsletter": state.subscribeToNewsletter,
      };
    },
  },
};
