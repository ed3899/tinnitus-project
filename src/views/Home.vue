<template>
  <v-container
    v-if="exactRouteIsHome"
    ref="home-view"
    fluid
    class="temp-border mt-n6 pa-0"
  >
    <!-- 1st Row -->
    <v-row class>
      <Carousel :height="'70vh'" />
    </v-row>

    <!-- 2nd Row -->
    <v-row
      no-gutters
      class="ma-1 pa-1"
      :class="[weAreOnDevMode ? tempBorder : '']"
    >
      <v-row no-gutters class="temp-border mb-1">
        <h1 class="text-capitalize">All you need to know about tinnitus</h1>
      </v-row>
      <v-col cols="12" class="temp-border__item">
        <NewsSlider :width="'100%'" :cards="cards" />
      </v-col>
    </v-row>

    <!-- 3rd Row -->
    <v-row no-gutters class="temp-border ma-1 pa-1">
      <v-row no-gutters class="temp-border mb-1">
        <h1 class="text-capitalize">Latest news</h1>
      </v-row>

      <v-col cols="12" class="temp-border__item">
        <NewsSlider :width="'100%'" :cards="news" />
      </v-col>
    </v-row>

    <!-- 4th Row -->
    <v-row no-gutters class="temp-border ma-1 pa-1" justify="space-around">
      <v-col
        v-for="{ title, body, btn, color } in extra"
        :key="body"
        cols="3"
        class="temp-border d-flex justify-center pa-1"
      >
        <v-card
          height="275"
          max-width="350"
          :color="color"
          class="d-flex flex-column justify-space-between"
        >
          <v-card-title
            v-text="title"
            class="white--text flex-grow-0 flex-shrink-0"
          ></v-card-title>

          <v-card-text
            v-text="body"
            class="card-format flex-grow-1 flex-shrink-0"
          ></v-card-text>

          <v-card-actions class="align-self-start flex-grow-0 flex-shrink-0">
            <v-btn
              v-text="btn"
              color="rgb(87, 195, 178)"
              class="white--text"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Scroll to top -->
    <v-row
      no-gutters
      class="temp-border ma-1 pa-1"
      justify="center"
      align-content="center"
    >
      <v-btn @click="scrollToTop" rounded class="primary text-uppercase">
        Back to top
      </v-btn>
    </v-row>
  </v-container>

  <!-- Home route children -->
  <v-fade-transition v-else mode="out-in">
    <router-view
      ref="home-view_router-view"
      class="temp-border__item mt-n6 pa-0"
    ></router-view>
  </v-fade-transition>
</template>

<script>
//%Vuex
import { mapState } from "vuex";
import { dummyDataModule } from "../store/modules/index";

//%Utils
import {
  scrollToTop as scrollToTopUtil,
  routeComparator as routeComparatorUtil,
  weAreOnDevMode,
  tempBorder,
  tempBorderItem,
} from "../utils/index";

//% Components
import Carousel from "../components/Carousel/CarouselChildren.vue";
import NewsSlider from "../components/NewsSlider/NewsSlider.vue";

export default {
  name: "HomeView",
  components: {
    Carousel,
    NewsSlider,
  },
  data: () => ({
    btns: {
      share: "Share",
      read: "Read More",
    },
    tempBorder,
    tempBorderItem,
  }),
  computed: {
    exactRouteIsHome() {
      return routeComparatorUtil(this, "home");
    },
    ...mapState(dummyDataModule.name, {
      cards: state => state.Home.mainView.cards,
      news: state => state.Home.mainView.news,
      extra: state => state.Home.mainView.extra,
    }),
    weAreOnDevMode,
  },
  mounted() {
    this.scrollToTop();
  },
  updated() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      if (this.exactRouteIsHome) {
        scrollToTopUtil(this, "home-view");
      } else {
        scrollToTopUtil(this, "home-view_router-view");
      }
    },
  },
};
</script>

<style lang="scss"></style>
