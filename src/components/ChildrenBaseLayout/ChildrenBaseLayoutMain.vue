<template>
  <v-container fluid>
    <v-row
      v-if="actualRouteIsHomeChild"
      no-gutters
      class="temp-border__item ma-2"
    >
      <v-carousel
        cycle
        height="45vh"
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        class="pa-0"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row v-else no-gutters class="temp-border__item ma-2 pa-2">
      <v-img
        height="40vh"
        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ></v-img>
    </v-row>
  </v-container>
</template>

<script>
import { routeComparator as routeComparatorUtil } from "../../utils/routeComparator.js";

export default {
  name: "ChildrenBaseLayoutMain",
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
  }),
  computed: {
    actualRouteIsSupport_WhereCanIGetHelp() {
      return routeComparatorUtil(this, "support", "whereCanIGetHelp");
    },
    actualRouteIsSupport_YourStories() {
      return routeComparatorUtil(this, "support", "yourStories");
    },
    actualRouteIsSupportChild() {
      return (
        this.actualRouteIsSupport_WhereCanIGetHelp ||
        this.actualRouteIsSupport_YourStories
      );
    },
    actualRouteIsHome_OvercomingIt() {
      return routeComparatorUtil(this, "home", "overcomingIt");
    },
    actualRouteIsHome_Info() {
      return routeComparatorUtil(this, "home", "info");
    },
    actualRouteIsHomeChild() {
      return this.actualRouteIsHome_OvercomingIt || this.actualRouteIsHome_Info;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
