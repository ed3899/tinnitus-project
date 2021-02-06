<template>
  <v-container
    v-if="exactRouteIsGetSupport"
    class="temp-border mt-n6 pa-2"
    fluid
    ref="main-get-support-container"
  >
    <!-- 1st Row -->
    <v-row
      no-gutters
      class="temp-border__item ma-2 pa-2"
      justify="space-around"
      align-content="start"
    >
      <v-col cols="7" class="temp-border__item">
        <!-- 1st row -->
        <v-row no-gutters class="temp-border__item ma-3 pa-3">
          <v-row no-gutters class="temp-border__item ma-3 pa-3">
            <h2 v-text="firstRow.title" class="text-h2"></h2>
          </v-row>

          <v-row no-gutters class="temp-border__item ma-3 pa-3">
            <p v-text="firstRow.p1" class="text-body-2"></p>

            <p v-text="firstRow.p2" class="text-body-2"></p>
          </v-row>
        </v-row>

        <!-- 2nd row -->
        <v-row no-gutters class="temp-border__item ma-3 pa-3">
          <v-row no-gutters class="temp-border__item ma-3 pa-3">
            <h2 v-text="secondRow.title" class="text-h2"></h2>
          </v-row>

          <v-row no-gutters class="temp-border__item ma-3 pa-3">
            <p v-text="secondRow.p1" class="text-body-2"></p>

            <p v-text="secondRow.p2" class="text-body-2"></p>

            <p v-text="secondRow.p3" class="text-body-2"></p>
          </v-row>
        </v-row>

        <!-- 3rd row -->
        <v-row no-gutters class="temp-border__item ma-3 pa-3">
          <v-row no-gutters class="temp-border__item ma-3 pa-3">
            <h2 v-text="thirdRow.title" class="text-h2"></h2>
          </v-row>

          <v-row no-gutters class="temp-border__item ma-3 pa-3">
            <p v-text="thirdRow.p1" class="text-body-1"></p>
          </v-row>

          <v-row no-gutters class="temp-border__item ma-3 pa-3">
            <v-data-table
              :headers="headers"
              :items="items"
              :items-per-page="5"
              dense
              class="elevation-8"
            >
            </v-data-table>
          </v-row>
        </v-row>
      </v-col>

      <v-col
        cols="4"
        class="temp-border__item pa-1 d-flex flex-column justify-space-around align-center"
      >
      </v-col>
    </v-row>

    <!-- 2nd Row -->
    <v-row
      no-gutters
      class="temp-border__item ma-2 pa-2"
      justify="center"
      align-content="center"
    >
      <v-btn
        v-text="btns.scrollToTop"
        rounded
        class="primary text-uppercase"
        @click="scrollToTop"
      ></v-btn>
    </v-row>
  </v-container>

  <!-- Route children -->
  <router-view
    v-else
    ref="get-support_route-children"
    class="temp-border mt-n6 pa-0"
  ></router-view>
</template>

<script>
import { default as LatestNewsCards } from "../components/LatestNews/LatestNews.vue";
import { default as DonateNowCard } from "../components/DonateNow/DonateNowMain.vue";

import { routes, routePaths } from "../router/routes.js";
import { mapState } from "vuex";

import { scrollToTop as scrollToTopUtil } from "../utils/scrollToTop.js";

export default {
  name: "GetSupportView",
  components: { LatestNewsCards, DonateNowCard },
  data: () => ({
    headers: [
      {
        text: "Decibel",
        align: "start",
        sortable: false,
        value: "decibels",
      },
      {
        text: "Source",
        value: "source",
      },
      {
        text: "Recommended exposure time",
        value: "hours",
      },
    ],
    items: [
      {
        decibels: "85db",
        source: "Kitchen blender",
        hours: "8 hours",
      },
      {
        decibels: "88dB",
        source: "Forklift truck",
        hours: "4 hours",
      },
      {
        decibels: "91dB",
        source: "Tube train",
        hours: "2 hours",
      },
      {
        decibels: "94dB",
        source: "Lawnmower",
        hours: "1 hours",
      },
      {
        decibels: "97dB",
        source: "Industrial fire alarm",
        hours: "0.5 hours or '30 mins'",
      },
      {
        decibels: "100dB",
        source: "Handheld drill",
        hours: "0.25 hours or '15 min'",
      },
      {
        decibels: "103dB",
        source: "MP3 player max vol",
        hours: "0.125 hours or '7.5 mins'",
      },
      {
        decibels: "106dB",
        source: "Motorbike",
        hours: "0.0625 hours or '3.75 mins'",
      },
      {
        decibels: "109dB",
        source: "Crying baby",
        hours: "0.03 hours or '112 secs'",
      },
      {
        decibels: "112dB",
        source: "Live rock band",
        hours: "0.01 hours or '66 secs'",
      },
    ],
    firstRow: {
      title: "How loud is loud?",
      p1: `If you are trying to understand how loud sounds are, and what is and
          isn’t safe then this information should help.`,
      p2: `When thinking about sound levels you also need to be aware of exposure
          times, so how long sounds are safe for, this will help you understand
          when and how to protect yourself.`,
    },
    secondRow: {
      title: "What is a decibel?",
      p1: `A decibel dB is the unit used to measure the intensity of a sound –
          85dB and above is the level at which noise becomes unsafe without the
          use of hearing protection. 85dB and over hearing protection should be
          provided.`,
      p2: `For sounds under 85dB, there should be no need for hearing protection.
          Although if you work in a noisy environment, up to 80dB, you should be
          trained and educated to understand the risks and hearing protection
          should be made available.`,
      p3: `These rules do not relate to social noise, and that’s where you need
          to make sure you protect yourself.`,
    },
    thirdRow: {
      title: "Sound levels and exposure times",
      p1: `Here are some examples of sound levels and maximum exposure times,
          after which hearing protection is required. These examples should give
          you a gauge for sound levels, some sounds are unavoidable and we
          aren't saying avoid the below sounds - for example, you can't avoid a
          crying baby, but it's good to know how to understand what`,
    },
    btns: {
      scrollToTop: "Back to top",
    },
  }),
  computed: {
    exactRouteIsGetSupport() {
      const [, , { path: getSupportPath }] = routes;
      switch (this.$route.path) {
        case getSupportPath:
          return true;
        default:
          return false;
      }
    },
    ...mapState({
      latestNews: state => state.latestNews,
    }),
  },
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, "main-get-support-container");
    },
  },
  beforeMount() {
    this.$store.dispatch("getLatestNews");
  },
  mounted() {
    const {
      support: { path: supportPath },
      support: {
        children: {
          whereCanIGetHelp: whereCanIGetHelpPath,
          yourStories: yourStoriesPath,
        },
      },
    } = routePaths;

    const weAreInSupportPath = this.$route.path === supportPath;

    if (weAreInSupportPath) {
      scrollToTopUtil(this, "main-get-support-container");
    } else {
      scrollToTopUtil(this, "get-support_route-children");
    }
  },
};
</script>

<style lang="scss" scoped></style>
