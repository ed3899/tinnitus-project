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
