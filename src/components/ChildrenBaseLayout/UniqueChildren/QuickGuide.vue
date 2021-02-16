<template>
  <v-container :ref="htmlsTagRefs.main_component" fluid>
    <!-- 1st row - Image -->
    <v-row
      no-gutters
      justify="center"
      :style="[weAreOnDevMode ? brownBorder : '']"
      class="ma-1 pa-1"
    >
      <v-col
        cols="12"
        class="pa-1 d-flex justify-center"
        :style="[weAreOnDevMode ? greenBorder : '']"
      >
        <v-img
          src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1000&q=80&h=300"
          height="300"
          width="300"
          contain
          :style="[weAreOnDevMode ? greenBorder : '']"
        >
        </v-img>
      </v-col>
    </v-row>

    <!-- 2nd row - Breadcrumbs -->
    <v-row no-gutters :style="[weAreOnDevMode ? brownBorder : '']" class="ma-1">
      <Breadcrumbs />
    </v-row>

    <!-- 3rd row - Main -->
    <v-row
      no-gutters
      align="center"
      justify="space-around"
      class="ma-1 pa-1"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <!-- Heading -->
      <v-col cols="5" class="pa-1" :style="[weAreOnDevMode ? greenBorder : '']">
        <h1 class="text-h1 text-capitalize">What is tinnitus?</h1>
        <p class="text-body-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, rem
          sed hic deserunt mollitia animi perspiciatis est temporibus! Optio hic
          enim sed maxime ab error dolorum? Quasi soluta odit et? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Reiciendis neque
          excepturi in saepe modi. Molestiae eveniet provident laborum iste eius
          iusto aperiam reprehenderit numquam fugit cum. Dolores nemo quidem
          dolor?
        </p>
      </v-col>

      <!-- Expansion panels -->
      <v-col cols="5">
        <v-expansion-panels
          popout
          mandatory
          :style="[weAreOnDevMode ? greenBorder : '']"
        >
          <v-expansion-panel
            v-for="({ header, body }, i) in expansionPanels"
            :key="header + body + i"
          >
            <v-expansion-panel-header class="text-h6"
              >{{ i + 1 }}. {{ header }}</v-expansion-panel-header
            >
            <v-expansion-panel-content
              v-text="body"
              class="ml-5 mb-5 text-body-2"
            >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <!-- 4th row - Back to top btn -->
    <v-row
      justify="center"
      class="ma-1"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-btn
        @click="scrollToTop"
        v-text="btns.backToTop"
        rounded
        color="primary"
        class="my-1"
      >
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
// %Components
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.vue";

//% Utils
import {
  scrollToTop as scrollToTopUtil,
  weAreOnDevMode,
  brownBorder,
  greenBorder,
} from "../../../utils/index";

//% Vuex
import { mainStoreMutations } from "../../../store/mutations/index";

export default {
  name: "QuickGuide",
  components: {
    Breadcrumbs,
  },
  data: () => ({
    expansionPanels: [
      {
        header: "What does tinnitus sound like?",
        body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
      },
      {
        header: "Who gets tinnitus?",
        body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
      },
      {
        header: "What causes tinnitus?",
        body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
      },
      {
        header: "Why have I got tinnitus? - I have good hearing!",
        body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
      },
      {
        header: "What should I do?",
        body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
      },
      {
        header: "I'm hearing noises in my head, not my ears!",
        body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
      },
      {
        header: "Why am I hearing music when nothing is playing?",
        body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
      },
      {
        header: "Is there a cure for tinnitus?",
        body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
      },
    ],
    btns: {
      backToTop: "Back to top",
    },
    htmlsTagRefs: {
      main_component: "quick-guide",
    },
  }),
  computed: {
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, this.htmlsTagRefs.main_component);
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({
        type: mainStoreMutations.CREATE_BREADCRUMBS,
        component: vm,
      });
    });
  },
};
</script>
