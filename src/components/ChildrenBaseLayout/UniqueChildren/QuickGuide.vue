<template>
  <v-container ref="top-container" fluid class="temp-border">
    <!-- 1st row -->
    <v-row class="temp-border__item ma-3 pa-3" no-gutters justify="center">
      <v-col
        class="temp-border__item pa-3 d-flex justify-center"
        cols="8"
        align-self="center"
      >
        <v-img
          class="temp-border__item"
          src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1000&q=80&h=300"
          height="300"
          width="300"
          contain
        >
          <!-- Temporary placeholder -->
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <!-- Breadcrumbs -->
    <v-row no-gutters class="temp-border__item ma-3">
      <Breadcrumbs />
    </v-row>

    <!-- 2nd row -->
    <v-row
      no-gutters
      class="temp-border__item ma-3 pa-3"
      align="center"
      justify="space-around"
    >
      <v-col cols="5" class="temp-border__item pa-3">
        <h1 v-text="firstCol.heading" class="text-h1"></h1>
        <p v-text="firstCol.body" class="text-body-1"></p>
      </v-col>

      <v-col cols="5">
        <v-expansion-panels class="temp-border__item" popout mandatory>
          <v-expansion-panel
            v-for="({ header, body }, i) in secondCol"
            :key="i"
          >
            <v-expansion-panel-header class="text-h6"
              >{{ i + 1 }}. {{ header }}</v-expansion-panel-header
            >
            <v-expansion-panel-content class="text-body-2">
              {{ body }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <!-- 3th row -->
    <v-row class="temp-border__item ma-3" justify="center">
      <v-btn
        @click="scrollToTop"
        v-text="btnText"
        rounded
        color="primary"
        class="my-5"
      >
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
//Utils
import { scrollToTop as scrollToTopUtil } from "../../../utils/scrollToTop.js";

//Components
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.vue";

export default {
  name: "QuickGuide",
  components: {
    Breadcrumbs,
  },
  data: () => ({
    firstCol: {
      heading: "What is tinnitus?",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, rem
        sed hic deserunt mollitia animi perspiciatis est temporibus! Optio hic
        enim sed maxime ab error dolorum? Quasi soluta odit et? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Reiciendis neque excepturi
        in saepe modi. Molestiae eveniet provident laborum iste eius iusto
        aperiam reprehenderit numquam fugit cum. Dolores nemo quidem dolor?`,
    },
    secondCol: [
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
    btnText: "Back to top",
  }),
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, "top-container");
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
};
</script>

<style lang="scss" scoped></style>
