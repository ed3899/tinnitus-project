<template>
  <v-card>
    <ValidationObserver
      :ref="htmlTagsRefs.observer"
      #default="{invalid, handleSubmit}"
    >
      <v-form
        :ref="htmlTagsRefs.main"
        method="post"
        @submit.prevent="handleSubmit(recaptcha)"
      >
        <input type="hidden" name="form-name" value="contact-dialog-form" />

        <p class="d-none">
          <label
            >Don’t fill this out if you’re human: <input name="bot-field"
          /></label>
        </p>

        <v-card-title>
          <span class="headline text-capitalize">Send us your thoughts</span>
        </v-card-title>

        <v-card-text>
          <v-row :style="[weAreOnDevMode ? brownBorder : '']" class="mb-1">
            <!-- Name -->
            <v-col cols="12" sm="6" md="4">
              <TextField
                :value="firstName"
                @input="firstName = $event"
                :rules="{ required: true, minmax: { min: 5, max: 25 } }"
                :label="'First Name*'"
                :name="'First Name'"
              />
            </v-col>

            <!-- Middle name -->
            <v-col cols="12" sm="6" md="4">
              <TextField
                :value="middleName"
                @input="middleName = $event"
                :rules="{ minmax: { min: 5, max: 25 } }"
                :label="'Middle Name'"
                :required="false"
                :successMsgActive="false"
                :name="'Middle Name'"
              />
            </v-col>

            <!-- Last name -->
            <v-col cols="12" sm="6" md="4">
              <TextField
                :value="lastName"
                @input="lastName = $event"
                :rules="{ required: true, minmax: { min: 5, max: 25 } }"
                :label="'Last Name'"
                :name="'Last Name'"
              />
            </v-col>

            <!-- Email -->
            <v-col cols="12">
              <TextField
                :value="email"
                @input="email = $event"
                :rules="{ required: true, email: true }"
                :label="'Email*'"
                :name="'Email'"
                :required="true"
                :type="'email'"
              />
            </v-col>

            <!-- Age -->
            <v-col cols="12">
              <Select
                :value="selectedAgeRange"
                @input="selectedAgeRange = $event"
                :items="ages"
                :name="'Age Range'"
                :label="'Age Range'"
                :rules="{ required: true }"
              />
            </v-col>

            <!-- Inquiry type -->
            <v-col cols="12" class="py-0">
              <RadioGroup
                :value="inquiryType"
                @input:inquiry-type="inquiryType = $event"
                @input:inquiry-subject="inquirySubject = $event"
                :name="'Inquiry Type'"
                :label="'Select your inquiry type:'"
                :radio-options="radioOptions"
                :rules="{ required: true }"
              />
            </v-col>

            <!-- Textarea -->
            <v-col cols="12 py-0">
              <TextArea
                :value="textArea"
                @input="textArea = $event"
                :name="'Message'"
                :label="'How can we help you?'"
                :rules="{ required: true, minmax: { min: 50, max: 1000 } }"
              />
            </v-col>
          </v-row>

          <!-- Newsletter sign-up -->
          <v-row class="temp-border my-1">
            <v-col cols="12" sm="6">
              <v-switch
                v-model="subscribeToNewsletter"
                label="Subscribe to our newsletter"
                color="info"
                inset
              ></v-switch>
            </v-col>
          </v-row>

          <small class="d-block">*indicates required field</small>

          <small class="d-block"
            >This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and
            <a href="https://policies.google.com/terms">Terms of Service</a>
            apply.
          </small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            :class="[cancelBtnClass, 'mr-3']"
            @click="closeAndResetForm"
          >
            cancel
          </v-btn>

          <v-btn
            text
            :class="[saveBtnClass, 'mr-3']"
            :loading="saveLoading"
            :disabled="invalid || saveLoading"
            type="submit"
          >
            submit
          </v-btn>
        </v-card-actions>
      </v-form>
    </ValidationObserver>
  </v-card>
</template>

<script>
//% Vuex
//Mutations
import {
  formDialogMutations,
  mainStoreMutations,
} from "../../store/mutations/index";
//Modules
import { formDialogModule } from "../../store/modules/index";

//% Util
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

//% Packages
import axios from "axios";

//% Components
import TextField from "../FormFields/TextField.vue";
import Select from "../FormFields/Select.vue";
import RadioGroup from "../FormFields/RadioGroup.vue";
import TextArea from "../FormFields/TextArea.vue";

export default {
  name: "NavBarContactDialogForm",

  components: {
    TextField,
    Select,
    RadioGroup,
    TextArea,
  },

  data: () => ({
    htmlTagsRefs: {
      main: "popup-form",
      observer: "popup-form-validation-observer",
    },

    ages: ["0-17", "18-29", "30-54", "54+"],

    radioOptions: [
      {
        option: "business",
      },
      { option: "just saying thank you!" },
      { option: "other" },
    ],

    maxTextAreaCharacters: 1000,

    saveLoading: false,
  }),

  computed: {
    //% Form fields
    firstName: {
      get() {
        return this.$store.state.formDialog.firstName;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_FIRST_NAME}`,
          value,
        });
      },
    },

    middleName: {
      get() {
        return this.$store.state.formDialog.middleName;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_MIDDLE_NAME}`,
          value,
        });
      },
    },

    lastName: {
      get() {
        return this.$store.state.formDialog.lastName;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_LAST_NAME}`,
          value,
        });
      },
    },

    email: {
      get() {
        return this.$store.state.formDialog.email;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_EMAIL}`,
          value,
        });
      },
    },

    selectedAgeRange: {
      get() {
        return this.$store.state.formDialog.ageRange;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_AGE_RANGE}`,
          value,
        });
      },
    },

    inquiryType: {
      get() {
        return this.$store.state.formDialog.inquiry.type;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_INQUIRY_TYPE}`,
          value,
        });
      },
    },

    inquirySubject: {
      get() {
        return this.$store.state.formDialog.inquiry.subject;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_INQUIRY_SUB}`,
          value,
        });
      },
    },

    textArea: {
      get() {
        return this.$store.state.formDialog.textArea;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_TEXTAREA}`,
          value,
        });
      },
    },

    subscribeToNewsletter: {
      get() {
        return this.$store.state.formDialog.subscribeToNewsletter;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SUBSCRIBE_NEWSLETTER}`,
          value,
        });
      },
    },

    completeForm() {
      return {
        "first-name": this.firstName,
        "middle-name": this.middleName,
        "last-name": this.lastName,
        email: this.email,
        "selected-age-range": this.selectedAgeRange,
        "inquiry-type": this.inquiryType,
        "inquiry-subject": this.inquirySubject,
        message: this.textArea,
        "subscribe-to-newsletter": this.subscribeToNewsletter,
      };
    },

    isOtherTextDisabled() {
      //Disable if is different from other
      const notOther = this.$store.state.formDialog.inquiry.type !== "other";
      return notOther;
    },

    //%Btn classes
    cancelBtnClass() {
      return {
        "red darken-1 white--text": !this.$vuetify.theme.dark,
        "red darken-4 white--text": this.$vuetify.theme.dark,
      };
    },

    saveBtnClass() {
      return {
        "green darken-1 white--text": !this.$vuetify.theme.dark,
        "green darken-4 white--text": this.$vuetify.theme.dark,
      };
    },

    //% Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },

  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("submit");

      const verifiedRes = await axios({
        method: "post",
        url: `http://localhost:8080/recaptcha/api/siteverify?secret=${process.env.VUE_APP_CAPTCHA_V3_SERVER_SIDE}&response=${token}`,
      });

      if (verifiedRes.data.success) {
        this.handleSubmit();
      }
    },

    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    async handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };

      this.saveLoading = true;

      try {
        await axios.post(
          "/home",
          this.encode({
            "form-name": "contact-dialog-form",
            ...this.completeForm,
          }),
          axiosConfig
        );

        this.closeAndResetForm();

        this.$store.commit({
          type: mainStoreMutations.DISPLAY_SNACKBAR,
          value: true,
        });
      } catch (e) {
        console.error(`${e.name}:${e.message}`);
      } finally {
        this.saveLoading = false;
      }
    },

    closeAndResetForm() {
      //Set isOpen on formDialog in Vuex
      this.$store.commit({
        type: `${formDialogModule.name}/${formDialogMutations.CLOSE_DIALOG}`,
      });

      //Reset local form state
      this.$refs[this.htmlTagsRefs.main].reset();

      //Reset validation obs
      this.$refs[this.htmlTagsRefs.observer].reset();
    },
  },
};
</script>
