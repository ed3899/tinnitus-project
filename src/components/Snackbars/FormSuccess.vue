<template>
  <v-snackbar v-model="snackbar" :timeout="3000">
    <h5 class="text-h5">
      Yey! Your form has been submitted. Well be answering you in between 2-3
      business days
    </h5>

    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
//% Vuex
import { mainStoreMutations } from "../../store/mutations/index";

export default {
  name: "FormSuccess",

  computed: {
    snackbar: {
      get() {
        return this.$store.state.isSnackbarVisible;
      },
      set(value) {
        this.$store.commit(mainStoreMutations.DISPLAY_SNACKBAR, value);
      },
    },
  },
};
</script>
