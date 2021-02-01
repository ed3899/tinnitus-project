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
            height="12rem"
            width="100%"
            class="pa-3"
          >
            <v-row no-gutters class="temp-border__item pa-3">
              <v-col cols="8" class="temp-border__item pa-3">
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

              <v-col cols="2" class="temp-border__item"></v-col>
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
