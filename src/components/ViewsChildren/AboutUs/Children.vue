<template>
  <v-container ref="about-children-container" fluid class="temp-border">
    <!-- 1st row - Img -->
    <v-row no-gutters class="temp-border__item ma-3 pa-3">
      <v-img
        :aspect-ratio="16 / 9"
        :src="dynamicImagePerRoute"
        height="50vh"
        position="center center"
        class="temp-border__item"
      >
      </v-img>
    </v-row>

    <!-- 2nd row - Breadcrumbs -->
    <v-row no-gutters class="temp-border__item ma-3">
      <v-breadcrumbs :items="breadcrumbItems">
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>

    <!-- 3rd row - Main content -->
    <v-row
      no-gutters
      justify="space-around"
      class="temp-border__item ma-3 pa-3"
    >
      <v-col
        cols="6"
        class="temp-border__item pa-3 d-flex flex-column justify-space-around"
      >
        <!-- Conditional content -->

        <ChildrenOurVision v-if="actualRouteIsOurVision" />
        <ChildrenOurTeam
          v-else-if="actualRouteIsOurTeam"
          class="our-team-format"
        />
        <ChildrenHowYourMoneyHelps v-else-if="actualRouteIsMoney" />
      </v-col>

      <v-col
        cols="4"
        class="d-flex flex-column align-center justify-space-around second-col-format temp-border__item pa-3"
      >
        <!-- <v-card
          width="65%"
          height="40%"
          class="temp-border__item"
          v-for="{ title, links } in dummyCardData"
          :key="title"
          elevation="13"
        >
          <v-card-title v-text="title"></v-card-title>

          <v-row no-gutters v-for="link in links" :key="link">
            <v-card-text v-text="link"></v-card-text>
            <v-divider class="mx-4 purple"></v-divider>
          </v-row>
        </v-card> -->
      </v-col>
    </v-row>

    <v-row no-gutters class="temp-border__item ma-3 pa-3" justify="center">
      <v-btn
        @click="scrollToTop"
        v-text="btnText"
        rounded
        color="primary"
        class="text-uppercase"
      >
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { scrollToTop as scrollToTopUtil } from "../../../utils/scrollToTop.js";

import ChildrenOurVision from "../AboutUs/ChildrenOurVision.vue";
import ChildrenOurTeam from "../AboutUs/ChildrenOurTeam.vue";
import ChildrenHowYourMoneyHelps from "../AboutUs/ChildrenHowYourMoneyHelps.vue";

export default {
  name: "AboutUsChildren",
  components: { ChildrenOurVision, ChildrenOurTeam, ChildrenHowYourMoneyHelps },
  data: () => ({
    btnText: "back to top",
  }),
  computed: {
    ...mapState({
      breadcrumbItems: state => state.CentralState.currentBreadcrumbs,
      dummyCardData: state => state.dummyCardData,
      latestNews: state => state.latestNews,
    }),
    actualRouteIsOurVision() {
      return this.$route.path === "/about/vision";
    },
    actualRouteIsOurTeam() {
      return this.$route.path === "/about/team";
    },
    actualRouteIsMoney() {
      return this.$route.path === "/about/how-your-money-helps";
    },
    dynamicImagePerRoute() {
      switch (this.$route.path) {
        case "/about/vision":
          return `https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`;

        case "/about/team":
          return `https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80`;

        case "/about/how-your-money-helps":
          return `https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80`;
      }
    },
  },
  beforeUpdate() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, "about-children-container");
    },
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
};
</script>

<style lang="scss" scoped>
.second-col-format {
  height: 60rem;
}

.our-team-format {
  height: 60rem;
}
</style>
