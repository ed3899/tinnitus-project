<template>
  <v-container fluid>
    <!-- Carousel -->
    <v-row
      v-if="actualRouteIsHomeChild || actualRouteIsSupport_YourStories"
      no-gutters
      class="temp-border__item ma-2"
    >
      <CarouselChildren :height="'45vh'" />
    </v-row>

    <!-- Img -->
    <v-row v-else no-gutters class="temp-border__item ma-2 pa-0">
      <v-img
        height="45vh"
        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ></v-img>
    </v-row>

    <!-- Breadcrumbs -->
    <v-row no-gutters class="temp-border__item ma-2 pa-0">
      <Breadcrumbs />
    </v-row>

    <!-- Main -->
    <v-row
      no-gutters
      justify="space-around"
      align-content="start"
      class="temp-border__item ma-2 pa-0"
    >
      <v-col cols="7" class="temp-border__item ma-2 pa-0">Test</v-col>
      <v-col
        cols="4"
        class="temp-border__item ma-2 pa-0 d-flex flex-column justify-space-around align-center"
      >
        <DonateNowCard :height="'80%'" :width="'80%'" />
        <h1 v-for="{ title } in latestNews" v-text="title" :key="title"></h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//Utils
import { routeComparator as routeComparatorUtil } from "../../utils/routeComparator.js";

//Vuex
import { mapState } from "vuex";

//Components
import CarouselChildren from "../Carousel/CarouselChildren.vue";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.vue";
import { default as DonateNowCard } from "../DonateNow/DonateNowMain.vue";
import { default as LatestNewsCards } from "../LatestNews/LatestNews.vue";

export default {
  name: "ChildrenBaseLayoutMain",
  components: {
    Breadcrumbs,
    CarouselChildren,
    DonateNowCard,
    LatestNewsCards,
  },
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    currentImageSrc: "",
  }),
  computed: {
    //% Support
    actualRouteIsSupport_WhereCanIGetHelp() {
      this.currentImageSrc = `https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`;
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
    //% Home
    actualRouteIsHome_OvercomingIt() {
      //Needed in order to render specific content
      return routeComparatorUtil(this, "home", "overcomingIt");
    },
    actualRouteIsHome_Info() {
      return routeComparatorUtil(this, "home", "info");
    },
    actualRouteIsHomeChild() {
      return this.actualRouteIsHome_OvercomingIt || this.actualRouteIsHome_Info;
    },
    ...mapState({
      latestNews: state => state.latestNews,
    }),
  },
  beforeMount() {
    this.$store.dispatch("getLatestNews");
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
};
</script>

<style lang="scss" scoped></style>
