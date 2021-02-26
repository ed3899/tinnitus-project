<template>
  <v-snackbar
    v-model="snackbarFailure"
    bottom
    app
    elevation="8"
    timeout="13000"
    color="red darken-4"
    multi-line
  >
    <h5 class="text-h6">
      Opss, there was a problem submitting your form. Try again and if the
      problem persist, send us an email to
      <a href="mailto:example@example.com" target="_blank"
        >example@example.com</a
      >
    </h5>

    <template v-slot:action="{ attrs }">
      <v-btn
        outlined
        color="white"
        text
        v-bind="attrs"
        large
        @click="snackbarFailure = false"
      >
        close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
//% Vuex
import { mainStoreMutations } from "../../store/mutations/index";

export default {
  name: "FormFailure",

  computed: {
    snackbarFailure: {
      get() {
        return this.$store.state.isSnackbarFailureVisible;
      },

      set(value) {
        this.$store.commit({
          type: mainStoreMutations.DISPLAY_FAILURE_SNACKBAR,
          value,
        });
      },
    },
  },
};
</script>
