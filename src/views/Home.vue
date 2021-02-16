<template>
  <!-- Main view -->
  <v-container
    v-if="exactRouteIsHome"
    :ref="htmlRefs.main_view"
    fluid
    class="mt-n6 pa-0"
    :style="[weAreOnDevMode ? brownBorder : '']"
  >
    <!-- Carousel -->
    <v-row class>
      <Carousel :height="'70vh'" />
    </v-row>

    <!-- First news -->
    <v-row
      no-gutters
      class="ma-1 pa-1"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-row
        no-gutters
        class="mb-1"
        :style="[weAreOnDevMode ? greenBorder : '']"
      >
        <h1 class="text-capitalize">All you need to know about tinnitus</h1>
      </v-row>
      <v-col cols="12" :style="[weAreOnDevMode ? greenBorder : '']">
        <v-lazy
          v-model="areNewsLoaded"
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <NewsSlider :width="'100%'" :cards="cards" />
        </v-lazy>
      </v-col>
    </v-row>

    <!-- 3rd Row -->
    <v-row
      no-gutters
      class="ma-1 pa-1"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-row
        no-gutters
        class="mb-1"
        :style="[weAreOnDevMode ? greenBorder : '']"
      >
        <h1 class="text-capitalize">Latest news</h1>
      </v-row>

      <v-col cols="12" :style="[weAreOnDevMode ? greenBorder : '']">
        <v-lazy
          v-model="areNewsLoaded"
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <NewsSlider :width="'100%'" :cards="news" />
        </v-lazy>
      </v-col>
    </v-row>

    <!-- Extras -->
    <v-row
      no-gutters
      class="ma-1 pa-1"
      justify="space-around"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-col
        v-for="{ title, body, btn, color } in extra"
        :key="body"
        cols="3"
        class="d-flex justify-center pa-1"
        :style="[weAreOnDevMode ? greenBorder : '']"
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
      class="ma-1 pa-1"
      justify="center"
      align-content="center"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-btn @click="scrollToTop" rounded class="primary text-uppercase">
        Back to top
      </v-btn>
    </v-row>
  </v-container>

  <!-- Router view -->
  <v-fade-transition v-else mode="out-in">
    <router-view
      :ref="htmlRefs.router_view"
      class="mt-n6 pa-0"
      :style="[weAreOnDevMode ? brownBorder : '']"
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
  brownBorder,
  greenBorder,
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
    areNewsLoaded: false,
    areExtrasLoaded: false,

    htmlRefs: {
      main_view: "home-view",
      router_view: "home-view_router-view",
    },
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
    brownBorder,
    greenBorder,
  },
  mounted() {
    this.scrollToTop();
  },
  updated() {
    console.log("Updated");
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      if (this.exactRouteIsHome) {
        scrollToTopUtil(this, this.htmlRefs.main_view);
      } else {
        scrollToTopUtil(this, this.htmlRefs.router_view);
      }
    },
  },
};
</script>
