<template>
  <v-container class="temp-border mt-n6" fluid>
    <!-- About main content -->
    <v-container v-if="exactRouteIsAbout" fluid class="ma-0 pa-0">
      <!-- 1st row -->
      <v-row
        no-gutters
        class="temp-border__item mx-n5 mt-n5 pa-0"
        justify="center"
      >
        <v-img
          max-height="60vh"
          height="60vh"
          :aspect-ratio="16 / 9"
          src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          class="temp-border__item d-flex align-end"
        >
          <v-sheet
            color="sheet-format"
            elevation="8"
            height="14rem"
            width="100%"
            class="pa-3"
          >
            <v-row
              no-gutters
              class="temp-border__item pa-3"
              justify="space-around"
            >
              <v-col
                cols="7"
                class="temp-border__item pa-3 d-flex flex-column justify-center"
              >
                <h3
                  class="blue--text text--darken-1 text-h3 text-capitalize font-italic"
                >
                  About us
                </h3>
                <p class="white--text font-weight-light body-1">
                  The core purpose of the American Tinnitus Association is to
                  promote relief, prevent, and find cures for tinnitus,
                  evidenced by its core values of compassion, credibility, and
                  responsibility.
                </p>
              </v-col>

              <v-col cols="4" class="temp-border__item pa-3 mt-n16">
                <v-card
                  shaped
                  color="cyan darken-3 pa-3"
                  class="d-flex flex-column"
                >
                  <v-card-title class="text-h6 text-capitalize white--text"
                    >Join us
                  </v-card-title>

                  <v-card-text class="text-body-2 white--text">
                    Join ATA, the nation’s largest nonprofit organization for
                    tinnitus patients. Get valuable benefits and support our
                    mission to silence tinnitus.
                  </v-card-text>

                  <v-card-actions>
                    <v-btn class="rounded-tl-xl rounded-br-xl">Join now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-img>
      </v-row>
    </v-container>

    <!-- About route-children -->
    <v-row v-else>
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
import { routes } from "../router/routes";

export default {
  name: "AboutUsView",
  computed: {
    exactRouteIsAbout() {
      const [, { path: aboutPath1, alias: aboutPath2 }] = routes;
      switch (this.$route.path) {
        case aboutPath1:
        case aboutPath2: {
          return true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sheet-format {
  background-color: rgba(23, 25, 26, 0.5);
}
</style>
