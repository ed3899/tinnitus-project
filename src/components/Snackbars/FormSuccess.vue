<template>
  <v-snackbar
    v-model="snackbar"
    color="green darken-3"
    timeout="13000"
    bottom
    app
    elevation="8"
    multi-line
  >
    <h5 class="text-h5">
      Yey! Your form has been submitted. We'll be answering you in between 2-3
      business days
    </h5>

    <template v-slot:action="{ attrs }">
      <v-btn
        v-bind="attrs"
        @click="snackbar = false"
        color="red"
        class="white--text"
        large
      >
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
        this.$store.commit({
          type: mainStoreMutations.DISPLAY_SNACKBAR,
          value,
        });
      },
    },
  },
};
</script>
