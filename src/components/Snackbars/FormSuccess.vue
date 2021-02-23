<template>
  <v-snackbar v-model="snackbar" timeout="2000">
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
export default {
  name: "FormSuccess",

  props: {
    snackbarDisplay: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    snackbar: false,
  }),

  watch: {
    snackbarDisplay(newVal) {
      console.log("snack");
      if (newVal) this.snackbar = true;
    },
  },
};
</script>
