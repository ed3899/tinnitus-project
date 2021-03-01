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
                :value.sync="firstName"
                :rules="{ required: true, minmax: { min: 2, max: 25 } }"
                :label="'First Name*'"
                :name="'First Name'"
                :netlify-form-input-name="'first-name'"
              />
            </v-col>

            <!-- Middle name -->
            <v-col cols="12" sm="6" md="4">
              <TextField
                :value.sync="middleName"
                :rules="{ minmax: { min: 2, max: 25 } }"
                :label="'Middle Name'"
                :required="false"
                :successMsgActive="false"
                :name="'Middle Name'"
                :netlify-form-input-name="'middle-name'"
              />
            </v-col>

            <!-- Last name -->
            <v-col cols="12" sm="6" md="4">
              <TextField
                :value.sync="lastName"
                :rules="{ minmax: { min: 2, max: 25 } }"
                :label="'Last Name'"
                :name="'Last Name'"
                :required="false"
                :successMsgActive="false"
                :netlify-form-input-name="'last-name'"
              />
            </v-col>

            <!-- Email -->
            <v-col cols="12">
              <TextField
                :value.sync="email"
                :rules="{ required: true, email: true }"
                :label="'Email*'"
                :name="'Email'"
                :type="'email'"
                :netlify-form-input-name="'email'"
              />
            </v-col>

            <!-- Age -->
            <v-col cols="12">
              <Select
                :value.sync="selectedAgeRange"
                :items="['0-17', '18-29', '30-54', '54+']"
                :name="'Age Range'"
                :label="'Age Range*'"
                :rules="{ required: true }"
                :netlify-form-input-name="'selected-age-range'"
              />
            </v-col>

            <!-- Inquiry type -->
            <v-col cols="12" class="py-0">
              <RadioGroup
                :value="inquiryType"
                @update:inquiry-type="inquiryType = $event"
                @update:inquiry-subject="inquirySubject = $event"
                :name="'Inquiry Type'"
                :label="'Select your inquiry type*:'"
                :radio-options="[
                  { option: 'business' },
                  {
                    option: 'just saying thank you!',
                  },
                  { option: 'other' },
                ]"
                :rules="{ required: true }"
                :netlify-form-input-radio-name="'inquiry-type'"
                :netlify-form-input-text-name="'inquiry-subject'"
              />
            </v-col>

            <!-- Textarea -->
            <v-col cols="12 my-2 py-0">
              <TextArea
                :value.sync="textArea"
                :name="'Message'"
                :label="'How can we help you?*'"
                :rules="{ required: true, minmax: { min: 50, max: 1000 } }"
                :netlify-input-name="'message'"
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
                name="subscribe-to-newsletter"
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

    <!-- Snackbar failure -->
    <FormFailure />
  </v-card>
</template>

<script>
//% Vuex
//Mutations
import {
  formDialogMutations,
  mainStoreMutations,
} from "../../store/mutations/index";

//Actions
import { formDialogActions } from "../../store/actions/index";

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
import FormFailure from "../Snackbars/FormFailure.vue";

export default {
  name: "NavBarContactDialogForm",

  components: {
    TextField,
    Select,
    RadioGroup,
    TextArea,
    FormFailure,
  },

  data: () => ({
    htmlTagsRefs: {
      main: "popup-form",
      observer: "popup-form-validation-observer",
    },

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
  //
  methods: {
    async recaptcha() {
      this.saveLoading = true;

      try {
        // (optional) Wait until recaptcha has been loaded.
        await this.$recaptchaLoaded();

        // Execute reCAPTCHA with action
        const token = await this.$recaptcha("submit");

        const {
          data: { isHuman },
        } = await axios({
          method: "post",
          url: `/.netlify/functions/recaptchav3`,
          data: {
            token,
          },
        });

        if (isHuman) this.submitForm();
      } catch (error) {
        console.error(`${error.name}:${error.message}`);
      } finally {
        this.saveLoading = false;
      }
    },

    async submitForm() {
      try {
        const res = await this.$store.dispatch({
          type: `${formDialogModule.name}/${formDialogActions.POST_FORM}`,
        });

        if (res instanceof Error) {
          this.$store.commit({
            type: mainStoreMutations.DISPLAY_FAILURE_SNACKBAR,
            value: true,
          });
          throw new Error(res.message);
        }

        this.closeAndResetForm();

        this.$store.commit({
          type: mainStoreMutations.DISPLAY_SNACKBAR,
          value: true,
        });
      } catch (error) {
        console.error(`${error.name}:${error.message}`);
      }
    },

    closeAndResetForm() {
      //Set isOpen on formDialog in Vuex
      this.$store.commit({
        type: `${formDialogModule.name}/${formDialogMutations.CLOSE_DIALOG}`,
      });

      //Reset local form state
      this.$refs[this.htmlTagsRefs.main].reset();

      //Reset validation observer
      this.$refs[this.htmlTagsRefs.observer].reset();
    },
  },
};
</script>
