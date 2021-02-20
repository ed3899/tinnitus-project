<template>
  <v-overlay :value="overlay">
    <v-card
      color="green"
      elevation="21"
      :width="$vuetify.breakpoint.smAndDown ? '80vw' : '50vw'"
      :height="$vuetify.breakpoint.smAndDown ? '55vh' : '50vh'"
      class="d-flex flex-column justify-space-around"
    >
      <v-btn
        @click="closePopUp"
        fab
        x-small
        color="error"
        class="align-self-end mr-2 "
      >
        <v-icon>mdi-close </v-icon>
      </v-btn>

      <v-card-title class="text-h2 d-flex justify-center">
        <h4
          :class="[
            {
              'text-center newletter-title-fix': $vuetify.breakpoint.smAndDown,
            },
            'text-h4',
          ]"
        >
          Join our newsletter!
        </h4>
      </v-card-title>

      <v-card-text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quos
        recusandae fuga vero. Architecto sequi quisquam itaque cum veritatis
        provident tenetur ut magni. Placeat doloremque nesciunt fuga numquam
        dicta voluptates?
      </v-card-text>

      <v-card-actions class="d-flex flex-column">
        <v-btn @click.stop="closePopUp" block rounded raised x-large>
          Count me in!
        </v-btn>
        <span class="text-caption"
          ><a @click.prevent="closePopUp" href="#">Maybe another day</a></span
        >
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: "NewsletterPopUp",

  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    overlay: false,
  }),

  watch: {
    isVisible(newVal) {
      if (newVal) {
        this.overlay = true;
      }
    },
  },

  methods: {
    closePopUp() {
      this.overlay = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.newletter-title-fix {
  word-break: normal !important;
}
</style>
