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
    <v-row no-gutters class="mt-n1">
      <Carousel :height="$vuetify.breakpoint.smAndDown ? '50vh' : '70vh'" />
    </v-row>

    <!-- First news -->
    <v-row
      no-gutters
      class="ma-1 pa-1 hidden-sm-and-down"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-row
        no-gutters
        class="mb-1"
        :style="[weAreOnDevMode ? greenBorder : '']"
      >
        <h3 class="text-h3 text-capitalize">
          All you need to know about tinnitus
        </h3>
      </v-row>

      <v-col cols="12" :style="[weAreOnDevMode ? greenBorder : '']">
        <NewsSlider :width="'100%'" :cards="cards" />
      </v-col>
    </v-row>

    <!-- Second news -->
    <v-lazy
      v-model="areNewsLoaded2"
      :options="lazy.options"
      :transition="lazy.transition"
    >
      <v-row
        no-gutters
        class="ma-1 pa-1 hidden-sm-and-down"
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
          <NewsSlider :width="'100%'" :cards="news" />
        </v-col>
      </v-row>
    </v-lazy>

    <!-- Extras -->
    <v-lazy
      v-model="areExtrasLoaded"
      :options="lazy.options"
      :transition="lazy.transition"
    >
      <v-row
        no-gutters
        class="ma-1 pa-1"
        justify="space-around"
        align-content="space-around"
        :style="[weAreOnDevMode ? brownBorder : '']"
      >
        <v-col
          v-for="{ title, body, btn, color } in extra"
          :key="body + title"
          cols="12"
          sm="12"
          md="3"
          lg="3"
          xl="3"
          :class="[
            { 'my-3': $vuetify.breakpoint.smAndDown },
            'd-flex justify-center pa-1',
          ]"
          :style="[weAreOnDevMode ? greenBorder : '']"
        >
          <v-card
            height="275"
            :width="$vuetify.breakpoint.smAndDown ? '100%' : ''"
            :color="color"
            class="d-flex flex-column justify-space-between"
          >
            <v-card-title
              v-text="title"
              :class="[
                $vuetify.breakpoint.smAndDown
                  ? ''
                  : 'white--text flex-grow-0 flex-shrink-0',
              ]"
            ></v-card-title>

            <v-card-text
              v-text="body"
              :class="[
                $vuetify.breakpoint.smAndDown
                  ? ''
                  : 'flex-grow-1 flex-shrink-0',
              ]"
            ></v-card-text>

            <v-card-actions
              :class="[
                $vuetify.breakpoint.smAndDown
                  ? ''
                  : ' align-self-start flex-grow-0 flex-shrink-0',
              ]"
            >
              <v-btn
                v-text="btn"
                :color="darkModeIsOn ? 'teal darken-2' : 'teal lighten-1'"
                class="white--text"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-lazy>

    <!-- Scroll to top -->
    <v-lazy
      v-model="isBackToTopLoaded"
      :options="lazy.options"
      :transition="lazy.transition"
    >
      <v-row
        no-gutters
        class="ma-1 pa-1"
        justify="center"
        align-content="center"
        :style="[weAreOnDevMode ? brownBorder : '']"
      >
        <v-btn
          @click="scrollToTop"
          rounded
          :class="darkModeIsOn ? 'teal darken-3' : 'teal lighten-1 white--text'"
          class="text-uppercase"
        >
          Back to top
        </v-btn>
      </v-row>
    </v-lazy>

    <!-- Will only show based on a cookie -->
    <NewsletterPopUp :isVisible="isNewsletterVisible" />
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
  checkCookie as checkCookieUtil,
  weAreOnDevMode,
  brownBorder,
  greenBorder,
} from "../utils/index";

//% Components
import Carousel from "../components/Carousel/CarouselChildren.vue";
import NewsSlider from "../components/NewsSlider/NewsSlider.vue";
import NewsletterPopUp from "../components/NewsletterPopUp/NewsletterPopUp.vue";

export default {
  name: "HomeView",

  components: {
    Carousel,
    NewsSlider,
    NewsletterPopUp,
  },

  data: () => ({
    //These trigger an update(). Lazy load
    areNewsLoaded1: false,
    areNewsLoaded2: false,
    areExtrasLoaded: false,
    isBackToTopLoaded: false,

    //Newsletter pop up
    isNewsletterVisible: false,

    htmlRefs: {
      main_view: "home-view",
      router_view: "home-view_router-view",
    },
  }),

  computed: {
    exactRouteIsHome() {
      return routeComparatorUtil(this, "home");
    },

    //% Vuex
    ...mapState(dummyDataModule.name, {
      cards: state => state.Home.mainView.cards,
      news: state => state.Home.mainView.news,
      extra: state => state.Home.mainView.extra,
    }),

    ...mapState({
      lazy: state => state.lazy,
    }),

    //%Dark mode
    darkModeIsOn() {
      return this.$vuetify.theme.dark;
    },

    //% Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },

  mounted() {
    this.$nextTick(() => {
      const thereANewsletterCookie = checkCookieUtil(
        process.env.VUE_APP_NEWSLETTER_COOKIE_NAME
      );

      if (!thereANewsletterCookie) {
        setTimeout(() => {
          this.isNewsletterVisible = true;
        }, 3000);
      }
    });
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

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$nextTick(() => vm.scrollToTop());
    });
  },
};
</script>
