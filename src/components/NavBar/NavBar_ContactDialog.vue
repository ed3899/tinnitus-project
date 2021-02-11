<template>
  <v-dialog :value="modelValue" persistent max-width="600px">
    <!-- Activator btn -->
    <template #activator="{ on, attrs }">
      <v-btn
        v-text="btns.contact"
        v-on="on"
        v-bind="attrs"
        @click="updateToggleValue"
        rounded
        outlined
        color="black"
        class="ml-5"
      ></v-btn>
    </template>

    <!-- Pop-up card -->
    <v-card>
      <v-card-title>
        <span v-text="popUpCard.title" class="headline text-capitalize"></span>
      </v-card-title>

      <v-card-text>
        <v-row>
          <!-- Name -->
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="firstName"
              :rules="formRules.firstName"
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
              :rules="formRules.lastName"
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
              :rules="formRules.email"
              label="Email*"
              required
            ></v-text-field>
          </v-col>

          <!-- Password -->
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :rules="formRules.password"
              counter
              minlength="8"
              label="Password*"
              type="password"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age*"
              required
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="[
                'Skiing',
                'Ice hockey',
                'Soccer',
                'Basketball',
                'Hockey',
                'Reading',
                'Writing',
                'Coding',
                'Basejump',
              ]"
              label="Interests"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>

        <small>*indicates required field</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          v-text="btns.close"
          color="blue darken-1"
          text
          @click="updateToggleValue"
        >
        </v-btn>

        <v-btn
          v-text="btns.save"
          color="blue darken-1"
          text
          @click="updateToggleValue"
        >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
//Vuex
//Mutations
import { formDialogMutations } from "../../store/mutations/index";
//Modules
import { formDialogModule } from "../../store/modules/index";

export default {
  name: "NavBarContactDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  data: () => ({
    btns: {
      contact: "contact us",
      close: "close",
      save: "save",
    },
    popUpCard: {
      title: "user profile",
    },
    formRules: {
      firstName: [v => !!v || "Name is required"],
      lastName: [v => !!v || "Last name is required"],
      email: [v => !!v || "Email is required"],
      password: [
        v => !!v || "Password is required",
        v => (v || "").length >= 8 || "At least 8 characters",
      ],
    },
  }),
  computed: {
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
        this.$store.state.formDialog.middleName;
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
        this.$store.state.formDialog.lastName;
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
        this.$store.state.formDialog.email;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_EMAIL}`,
          value,
        });
      },
    },
    password: {
      get() {
        this.$store.state.formDialog.password;
      },
      set(value) {
        this.$store.commit({
          type: `${formDialogModule.name}/${formDialogMutations.SET_PASSWORD}`,
          value,
        });
      },
    },
  },
  methods: {
    updateToggleValue() {
      this.$emit("update:model-value");
    },
  },
};
</script>

<style lang="scss" scoped></style>
