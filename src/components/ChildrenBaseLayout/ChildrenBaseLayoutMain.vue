<template>
  <v-container fluid :ref="htmlTagRef.main_component">
    <!-- Carousel -->
    <v-row
      v-if="actualRouteIsHomeChild || actualRouteIsSupport_YourStories"
      no-gutters
      class="ma-1"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <CarouselChildren :height="'45vh'" />
    </v-row>

    <!-- Img -->
    <v-row
      v-else
      no-gutters
      class="ma-1"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-img height="45vh" :src="currentImageSrc"></v-img>
    </v-row>

    <!-- Breadcrumbs -->
    <v-row no-gutters class="ma-1" :style="[weAreOnDevMode ? brownBorder : '']">
      <Breadcrumbs />
    </v-row>

    <!-- Main -->
    <v-row
      no-gutters
      justify="space-around"
      align-content="start"
      class="ma-1"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <!-- Conditional content based on routes -->
      <v-col
        cols="7"
        class="ma-1 pa-1"
        :style="[weAreOnDevMode ? greenBorder : '']"
      >
        <!-- Home -->
        <!-- OvercomingIt -->
        <CardIterator
          v-if="actualRouteIsHome_OvercomingIt"
          :itemsArray="home_overcomingItCards"
        />

        <!-- MoreInfo -->
        <CardIterator
          v-else-if="actualRouteIsHome_Info"
          :itemsArray="home_moreInfomationCards"
        />

        <!-- About -->
        <AboutOurVision v-else-if="actualRouteIsAbout_OurVision" />

        <ExpansionPanelIterator
          v-else-if="actualRouteIsAbout_OurTeam"
          :itemsArray="about_ourTeamData"
        />

        <AboutHowYourMoneyHelps
          v-else-if="actualRouteIsAbout_HowYourMoneyHelps"
        />

        <!-- Get Support -->
        <GetSupportWhereCanIGetHelp
          v-else-if="actualRouteIsSupport_WhereCanIGetHelp"
        />

        <GetSupportYourStories v-else-if="actualRouteIsSupport_YourStories" />
      </v-col>

      <!-- Fixed content -->
      <v-col
        cols="4"
        class="ma-1 d-flex flex-column justify-space-around align-center"
        :style="[weAreOnDevMode ? greenBorder : '']"
      >
        <DonateNowCard :height="'30%'" :width="'80%'" :elevation="13" />

        <LatestNewsCards
          v-for="{ title, links } in latestNews"
          :key="title"
          :title="title"
          :links="links"
          :width="'80%'"
          :height="'30%'"
          :elevation="13"
        />
      </v-col>
    </v-row>

    <!-- Scroll to top button -->
    <v-row
      no-gutters
      justify="space-around"
      align-content="start"
      class="ma-1 pa-1"
      :style="[weAreOnDevMode ? greenBorder : '']"
    >
      <v-btn
        v-text="btns.scrollToTop"
        rounded
        class="primary text-uppercase"
        @click="scrollToTop"
      ></v-btn
    ></v-row>
  </v-container>
</template>

<script>
//% Utils
import {
  routeComparator as routeComparatorUtil,
  scrollToTop as scrollToTopUtil,
  weAreOnDevMode,
  brownBorder,
  greenBorder,
} from "../../utils/index";

//% Vuex
import { mapState } from "vuex";
//Modules
import { dummyDataModule } from "../../store/modules/index";
//Mutations
import { mainStoreMutations } from "../../store/mutations/index";

//% Components
import CarouselChildren from "../Carousel/CarouselChildren.vue";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.vue";
import DonateNowCard from "../DonateNow/DonateNowMain.vue";
import LatestNewsCards from "../LatestNews/LatestNews.vue";

//% Route based components
//Home
//OvercomingIt & More information
import CardIterator from "../CardIterator/CardIteratorMain.vue";

// About
import AboutOurVision from "./About_OurVision.vue";
import ExpansionPanelIterator from "../ExpansionPanelIterator/ExpansionPanelIterator.vue";
import AboutHowYourMoneyHelps from "./About_HowYourMoneyHelps.vue";

// Get support
import GetSupportWhereCanIGetHelp from "./GetSupport_WhereCanIGetHelp.vue";
import GetSupportYourStories from "./GetSupport_YouStories.vue";

export default {
  name: "ChildrenBaseLayoutMain",
  components: {
    Breadcrumbs,
    CarouselChildren,
    DonateNowCard,
    LatestNewsCards,
    GetSupportWhereCanIGetHelp,
    GetSupportYourStories,
    CardIterator,
    AboutOurVision,
    ExpansionPanelIterator,
    AboutHowYourMoneyHelps,
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
    btns: {
      scrollToTop: "Back to top",
    },
    htmlTagRef: {
      main_component: "children-base-layout",
    },
  }),
  computed: {
    //% Home
    actualRouteIsHome_OvercomingIt() {
      //Needed in order to render specific content
      //Can it be done without strings?
      //It can but it defeats the purpose of having to import a module every time
      return routeComparatorUtil(this, "home", "overcomingIt");
    },
    actualRouteIsHome_Info() {
      return routeComparatorUtil(this, "home", "moreInformation");
    },
    actualRouteIsHomeChild() {
      return this.actualRouteIsHome_OvercomingIt || this.actualRouteIsHome_Info;
    },

    //%About
    actualRouteIsAbout_OurVision() {
      this.currentImageSrc = `https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`;
      return routeComparatorUtil(this, "about", "ourVision");
    },
    actualRouteIsAbout_OurTeam() {
      this.currentImageSrc = `https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80`;
      return routeComparatorUtil(this, "about", "team");
    },
    actualRouteIsAbout_HowYourMoneyHelps() {
      this.currentImageSrc = `https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`;
      return routeComparatorUtil(this, "about", "howYourMoneyHelps");
    },

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

    //%Vuex bindings
    ...mapState(dummyDataModule.name, {
      latestNews: state => state.General.latestNews,
      home_overcomingItCards: state => state.Home.OvercomingIt,
      home_moreInfomationCards: state => state.Home.MoreInformation,
      about_ourTeamData: state => state.About.OurTeam,
    }),

    //% Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, this.htmlTagRef.main_component);
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
