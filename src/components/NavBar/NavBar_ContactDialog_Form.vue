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
                :rules="{ required: true, max: 25 }"
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
              <v-text-field
                v-model="lastName"
                :rules="rules.lastName"
                counter
                maxlength="25"
                label="Last name*"
                required
              ></v-text-field>
            </v-col>

            <!-- Email -->
            <v-col cols="12">
              <v-text-field
                v-model="email"
                type="email"
                :rules="rules.email"
                label="Email*"
                required
              ></v-text-field>
            </v-col>

            <!-- Age -->
            <v-col cols="12">
              <v-select
                v-model="selectedAgeRange"
                :items="ages"
                :rules="rules.age"
                label="Age*"
                required
              ></v-select>
            </v-col>

            <!-- Inquiry type -->
            <v-col cols="12" class="py-0">
              <v-radio-group
                v-model="inquiryType"
                :rules="rules.inquiryType"
                label="Select your inquiry type:"
              >
                <template v-for="{ option } in radioOptions">
                  <!-- The rest -->
                  <v-row
                    no-gutters
                    v-if="option != 'other'"
                    :key="option"
                    align="center"
                    :style="[weAreOnDevMode ? greenBorder : '']"
                    class="my-1 text-capitalize"
                  >
                    <v-radio :label="option" :value="option"></v-radio>
                  </v-row>

                  <!-- Other -->
                  <v-row
                    no-gutters
                    v-else
                    :key="option"
                    align="center"
                    :style="[weAreOnDevMode ? greenBorder : '']"
                    class="my-1 text-capitalize"
                  >
                    <v-radio
                      :label="option"
                      :value="option"
                      class="mr-3"
                    ></v-radio>
                    <v-text-field
                      v-model="inquirySubject"
                      dense
                      single-line
                      clearable
                      :disabled="isOtherTextDisabled"
                      class="mr-3"
                    ></v-text-field>
                  </v-row>
                </template>
              </v-radio-group>
            </v-col>

            <!-- Textarea -->
            <v-col cols="12 py-0">
              <v-textarea
                v-model="textArea"
                :rules="rules.textArea"
                :counter="maxTextAreaCharacters"
                outlined
                filled
                auto-grow
                label="How can we help you?"
              ></v-textarea>
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

export default {
  name: "NavBarContactDialogForm",

  components: {
    TextField,
  },

  data: () => ({
    htmlTagsRefs: {
      main: "popup-form",
      observer: "popup-form-validation-observer",
    },

    rules: {
      firstName: [v => !!v || "Name is required"],
      lastName: [v => !!v || "Last name is required"],
      email: [v => !!v || "Email is required"],
      age: [v => !!v || "Age is required"],
      inquiryType: [v => !!v || "Inquiry type is required"],
      textArea: [
        v => !!v || "Inquiry message is required",
        v =>
          (!!v && v.length) >= 50 || "Message has to be at least 50 characters",
      ],
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

    displaySuccessSnack: false,
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
    resetBtnClass() {
      return {
        "deep-purple darken-1 white--text": !this.$vuetify.theme.dark,
        "deep-purple darken-4 white--text": this.$vuetify.theme.dark,
      };
    },

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
