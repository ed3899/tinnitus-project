<template>
  <v-card>
    <v-form :ref="refs.form">
      <v-card-title>
        <span v-text="title" class="headline text-capitalize"></span>
      </v-card-title>

      <v-card-text>
        <v-row class="temp-border mb-1">
          <!-- Name -->
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="firstName"
              :rules="rules.firstName"
              maxlength="25"
              counter
              label="First Name*"
              clearable
              required
            >
            </v-text-field>
          </v-col>

          <!-- Middle name -->
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="middleName"
              counter
              maxlength="25"
              label="Middle Name"
            ></v-text-field>
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
                  class="temp-border my-1 text-capitalize"
                >
                  <v-radio :label="option" :value="option"></v-radio>
                </v-row>

                <!-- Other -->
                <v-row
                  no-gutters
                  v-else
                  :key="option"
                  align="center"
                  class="temp-border my-1 text-capitalize"
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
              name="input-7-4"
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
              :label="switches.subscribeToNewsletter"
              color="info"
              inset
            ></v-switch>
          </v-col>
        </v-row>

        <small>*indicates required field</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          v-text="btns.cancel"
          color="blue darken-1"
          text
          @click="cancelForm"
        >
        </v-btn>

        <v-btn
          v-text="btns.save"
          color="blue darken-1"
          text
          @click="cancelForm"
        >
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
//Vuex
//Mutations
import { formDialogMutations } from "../../store/mutations/index";
//Modules
import { formDialogModule } from "../../store/modules/index";

export default {
  name: "NavBarContactDialogForm",

  data: () => ({
    refs: {
      form: "popup-form",
    },
    title: "user profile",
    rules: {
      firstName: [v => !!v || "Name is required"],
      lastName: [v => !!v || "Last name is required"],
      email: [v => !!v || "Email is required"],
      age: [v => !!v || "Age is required"],
      inquiryType: [v => !!v || "Inquiry type is required"],
      textArea: [
        v => !!v || "Inquiry message is required",
        v => v.length >= 50 || "Message has to be at least 50 characters",
      ],
    },
    btns: {
      cancel: "cancel",
      save: "save",
    },
    switches: {
      subscribeToNewsletter: "Subscribe to our newsletter",
    },
    ages: ["0-17", "18-29", "30-54", "54+"],
    radioOptions: [
      {
        option: "business",
      },
      { option: "just saying thank you!" },
      { option: "other" },
    ],
    maxTextAreaCharacters: 50,
  }),
  computed: {
    //To Vuex
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
  },
  methods: {
    cancelForm() {
      //Set isOpen on formDialog in Vuex
      this.$store.commit({
        type: `${formDialogModule.name}/${formDialogMutations.CLOSE_DIALOG}`,
      });

      //Reset local form state
      this.$refs[this.refs.form].reset();
    },
  },
};
</script>

<style lang="scss" scoped></style>
