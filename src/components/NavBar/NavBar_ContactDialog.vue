<template>
  <v-dialog
    :value="isOpen"
    persistent
    max-width="600px"
    :fullscreen="$vuetify.breakpoint.smAndDown"
  >
    <!-- Activator btn -->
    <template #activator="{ on, attrs }">
      <v-btn
        v-on="on"
        v-bind="attrs"
        :small="$vuetify.breakpoint.smAndDown ? true : false"
        @click="openDialog"
        rounded
        outlined
        :class="activatorBtnClass"
        class="ml-5"
        >contact us</v-btn
      >
    </template>

    <!-- Pop-up form -->
    <NavBarContactDialogForm />
  </v-dialog>
</template>

<script>
//% Vuex
import { mapState, mapMutations } from "vuex";
//Mutations
import { formDialogMutations } from "../../store/mutations/index";
//Modules
import { formDialogModule } from "../../store/modules/index";

//% Components
import NavBarContactDialogForm from "./NavBar_ContactDialog_Form.vue";

export default {
  name: "NavBarContactDialog",
  components: { NavBarContactDialogForm },
  computed: {
    ...mapState(`${formDialogModule.name}`, {
      isOpen: state => state.isOpen,
    }),

    activatorBtnClass() {
      return {
        "black--text": !this.$vuetify.theme.dark,
        "white--text": this.$vuetify.theme.dark,
      };
    },
  },
  methods: {
    ...mapMutations(formDialogModule.name, {
      openDialog: formDialogMutations.OPEN_DIALOG,
    }),
  },
};
</script>
