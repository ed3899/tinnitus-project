<template>
  <v-dialog :value="isOpen" persistent max-width="600px">
    <!-- Activator btn -->
    <template #activator="{ on, attrs }">
      <v-btn
        v-text="btns.contact"
        v-on="on"
        v-bind="attrs"
        @click="openDialog"
        rounded
        outlined
        color="black"
        class="ml-5"
      ></v-btn>
    </template>

    <!-- Pop-up form -->
    <!-- <v-card>
      <v-form :ref="refs.form">
        <v-card-title>
          <span
            v-text="popUpCard.title"
            class="headline text-capitalize"
          ></span>
        </v-card-title>

        <v-card-text>
          <v-row>
            
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

            
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="middleName"
                counter
                maxlength="25"
                label="Middle Name"
              ></v-text-field>
            </v-col>

            
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

           
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="formRules.email"
                label="Email*"
                required
              ></v-text-field>
            </v-col>

           
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
            @click="updateToggleValue"
          >
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card> -->
    <NavBarContactDialogForm />
  </v-dialog>
</template>

<script>
//Vuex
import { mapState, mapMutations } from "vuex";
//Mutations
import { formDialogMutations } from "../../store/mutations/index";
//Modules
import { formDialogModule } from "../../store/modules/index";

import NavBarContactDialogForm from "./NavBar_ContactDialog_Form.vue";

export default {
  name: "NavBarContactDialog",
  components: { NavBarContactDialogForm },
  emits: ["update:modelValue"],
  data: () => ({
    btns: {
      contact: "contact us",
    },
  }),
  computed: {
    ...mapState(`${formDialogModule.name}`, {
      isOpen: state => state.isOpen,
    }),
  },
  methods: {
    ...mapMutations(formDialogModule.name, {
      openDialog: formDialogMutations.OPEN_DIALOG,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
