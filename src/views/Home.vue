<template>
  <v-container
    v-if="exactRouteIsHome"
    ref="home-view"
    class="temp-border mt-n6 pa-0"
    fluid
  >
    <!-- 1st Row -->
    <v-row class>
      <CarouselMain :height="'70vh'" />
    </v-row>

    <!-- 2nd Row -->
    <v-row no-gutters class="temp-border ma-1 pa-1">
      <v-row no-gutters class="temp-border">
        <h1 class="text-capitalize">All you need to know about tinnitus</h1>
      </v-row>

      <v-row no-gutters justify="space-between" class="temp-border my-1 pa-1">
        <v-col
          v-for="{ title, text } in cards"
          cols="3"
          :key="title"
          class="temp-border d-flex justify-center"
        >
          <v-card width="90%" elevation="13">
            <v-img
              class="white--text"
              max-height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title v-text="title"></v-card-title>
            </v-img>

            <v-card-text v-text="text" style="height: 150px;"></v-card-text>

            <v-card-actions>
              <v-btn
                v-for="btn in btns"
                :key="btn"
                color="orange"
                text
                v-text="btn"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-row>

    <!-- 3rd Row -->
    <v-row no-gutters class="temp-border ma-1 pa-1">
      <v-row no-gutters class="temp-border">
        <h1 class="text-capitalize">Latest news</h1>
      </v-row>

      <v-row no-gutters justify="space-between" class="temp-border my-1 pa-1">
        <v-col
          v-for="{ title, body } in news"
          cols="4"
          :key="title"
          class="temp-border d-flex justify-center"
        >
          <v-card width="90%">
            <v-img
              max-height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            </v-img>

            <v-card-title
              v-text="title"
              class="text-justify text-h5"
            ></v-card-title>

            <v-card-text v-text="body" style="height: 150px;"></v-card-text>

            <v-card-actions>
              <v-btn
                v-for="btn in btns"
                :key="btn"
                color="orange"
                text
                v-text="btn"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-row>

    <!-- 4th Row -->
    <v-row no-gutters class="temp-border ma-1 pa-1" justify="space-around">
      <v-col
        v-for="{ title, body, btn, color } in extra"
        :key="body"
        cols="4"
        class="temp-border d-flex justify-center"
      >
        <v-card
          height="275"
          max-width="350"
          :color="color"
          class="d-flex flex-column justify-space-around"
        >
          <v-card-title v-text="title" class="white--text"></v-card-title>

          <v-card-text v-text="body" class="card-format"></v-card-text>

          <v-card-actions class="align-self-start">
            <v-btn
              v-text="btn"
              color="rgb(87, 195, 178)"
              class="white--text"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row
      no-gutters
      class="temp-border ma-1 pa-1"
      justify="center"
      align="center"
    >
      <v-col cols="12" class="temp-border__item">
        <NewsScroller />
      </v-col>
    </v-row>
    <!-- Add a button with scroll to top functionality -->
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
} from "../utils/index";

//% Components
import CarouselMain from "../components/Carousel/CarouselChildren.vue";
import NewsScroller from "../components/NewsScroller/NewsScroller.vue";

export default {
  name: "HomeView",
  components: {
    CarouselMain,
    NewsScroller,
  },
  data: () => ({
    btns: {
      share: "Share",
      read: "Read More",
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

<style lang="scss" scoped>
.card-format {
  @extend %card-format;
}
</style>
