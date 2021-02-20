<template>
  <v-container
    v-if="exactRouteIsAbout"
    :ref="htmlTagRefs.mainView"
    fluid
    class="mt-n6"
  >
    <!-- Hero -->
    <v-row
      justify="center"
      :style="[weAreOnDevMode ? brownBorder : '']"
      class="mt-n5 mb-3 pa-0"
    >
      <v-img
        max-height="60vh"
        height="60vh"
        :aspect-ratio="16 / 9"
        src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="d-flex align-end"
      >
        <v-sheet
          color="sheet-format"
          elevation="8"
          height="14rem"
          width="100%"
          class="pa-3"
        >
          <v-row
            no-gutters
            justify="space-around"
            :style="weAreOnDevMode ? greenBorder : ''"
            class="pa-3"
          >
            <v-col
              cols="7"
              :style="weAreOnDevMode ? greenBorder : ''"
              :class="[
                $vuetify.breakpoint.smAndDown
                  ? 'd-none'
                  : 'pa-3 d-flex flex-column justify-center',
              ]"
            >
              <h3
                class="blue--text text--darken-1 text-h3 text-capitalize font-italic"
              >
                About us
              </h3>
              <p class="white--text font-weight-light body-1">
                The core purpose of the American Tinnitus Association is to
                promote relief, prevent, and find cures for tinnitus, evidenced
                by its core values of compassion, credibility, and
                responsibility.
              </p>
            </v-col>

            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
              :style="weAreOnDevMode ? greenBorder : ''"
              class="pa-3 mt-n16"
            >
              <v-card
                shaped
                :color="
                  $vuetify.breakpoint.smAndDown
                    ? 'rgba(11, 136, 199, 0.4)'
                    : 'cyan darken-3 pa-3'
                "
                class="d-flex flex-column"
              >
                <v-card-title class="text-h6 text-capitalize white--text">
                  Join us
                </v-card-title>

                <v-card-text class="text-body-2 white--text">
                  Join ATA, the nation’s largest nonprofit organization for
                  tinnitus patients. Get valuable benefits and support our
                  mission to silence tinnitus.
                </v-card-text>

                <v-card-actions>
                  <v-btn class="rounded-tl-xl rounded-br-xl green accent-4">
                    Join now</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-img>
    </v-row>

    <!-- Text -->
    <v-row no-gutters class="pa-1" :style="[weAreOnDevMode ? greenBorder : '']">
      <p class="text-body-1">
        ATA is the nation’s foremost and trusted organization committed to
        finding cures for tinnitus and hyperacusis. Our commitment demands
        focus, determination, strategy and resources. ATA promotes synergy
        between dedicated medical professionals and researchers who work with
        and within the tinnitus community. The battle for a cure is real, and
        will be won through advances in technology and medicine, areas where we
        have often been a conduit to new discoveries. We fulfill our mission by:
        (1) funding targeted research projects; (2) providing education, hope
        and support for the tinnitus community; (3) advocating for effective
        public policies focused on advancing science towards cures for tinnitus
        and hyperacusis; and (4) collaborating with others to promote awareness,
        encourage prevention and to ultimately silence tinnitus.
      </p>

      <p class="text-body-1">
        Since 1971, the American Tinnitus Association has been a global leader
        in the effort to find a cure for tinnitus. ATA brings together patients,
        researchers, healthcare professionals, industry partners, and lawmakers
        to advance public understanding of tinnitus and fund vital tinnitus
        research.
      </p>

      <p class="text-body-1">
        As a registered 501(c)(3) non-profit association, ATA is driven to
        support the 45 million Americans struggling with tinnitus. We know that
        tinnitus can be a burdensome, confusing, and upsetting condition. We
        also know that patients face many challenges in finding quality
        healthcare to manage their tinnitus. ATA aims to improve the tinnitus
        patient experience through compassion, education, empowerment, and
        advocacy. Our goal is simple: we want to help patients quiet tinnitus
        today by improving access to the most-validated management tools, and to
        silence tinnitus in the near future by funding advanced research.
      </p>
    </v-row>

    <!-- Timeline -->
    <v-lazy
      v-model="isTimelineLoaded"
      :options="lazy.options"
      :transition="lazy.transition"
      class="hidden-sm-and-down"
    >
      <v-row
        no-gutters
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="my-1 pa-1"
      >
        <v-col cols="12" class="d-flex flex-column justify-start">
          <h2 class="text-h2">History</h2>

          <v-timeline>
            <v-timeline-item
              v-for="{ year, info } in timeline"
              :key="info"
              color="blue"
              small
            >
              <template #opposite>
                <div>
                  <p v-text="year" class="ma-0"></p>
                </div>
              </template>

              <v-card class="d-flex align-center pa-3">
                <p v-text="info" class="ma-0"></p>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-lazy>

    <!-- Back to top btn -->
    <v-lazy
      v-model="isBackToTopLoaded"
      :options="lazy.options"
      :transition="lazy.transition"
    >
      <v-row
        no-gutters
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="mt-1 pa-1"
        justify="center"
      >
        <v-btn @click="scrollToTop" rounded class="primary text-uppercase"
          >back to top</v-btn
        >
      </v-row>
    </v-lazy>
  </v-container>

  <!-- About route-children -->
  <v-fade-transition v-else mode="out-in">
    <router-view
      :ref="htmlTagRefs.routerView"
      :style="[weAreOnDevMode ? brownBorder : '']"
      class="mt-n6 pa-0"
    ></router-view>
  </v-fade-transition>
</template>

<script>
//% Utils
import {
  routeComparator as routeComparatorUtil,
  scrollToTop as scrollToTopUtil,
  weAreOnDevMode,
  brownBorder,
  greenBorder,
} from "../utils/index";

import { mapState } from "vuex";

export default {
  name: "AboutUsView",
  data: () => ({
    timeline: [
      {
        year: "1971",
        info: `ATA came about through the efforts of Charles Unice, M.D.`,
      },
      {
        year: "1975",
        info: `The first ATA newsletter is sent out to members in April. The newsletter notes that, “There are about 95 members of ATA.”`,
      },
      {
        year: "1976",
        info: `ATA forms a Scientific Advisory Committee to guide the association in all areas of tinnitus science and research. This committee is comprised of leading specialists in tinnitus and other auditory disorders.`,
      },
      {
        year: "1977",
        info: `ATA coordinates nationwide educational workshops on tinnitus, providing information to more than 1,200 hearing health professionals.`,
      },
      {
        year: "1980",
        info: `ATA awards its first tinnitus research grant to Mary B. Meikle, Ph.D., who uses the money to start the first-ever registry of tinnitus patients. The project eventually attracts funding from the National Institutes of Health (NIH) and grows into a valuable tool for tinnitus researchers.`,
      },
      {
        year: "1982",
        info: `ATA establishes a nationwide support group network, helping tinnitus patients connect with each other and learn from shared experience.`,
      },
      {
        year: "1986",
        info: `Jack A. Vernon, Ph.D., and Gloria Reich, Ph.D., former Executive Director appear on the MacNeil/Lehrer Newshour.`,
      },
      {
        year: "1988",
        info: `ATA's newsletter, published since 1975, becomes Tinnitus Today, a regular magazine focused on the needs of tinnitus patients.`,
      },
      {
        year: "1995",
        info: `ATA hosts the Fifth International Tinnitus Seminar in Portland, Oregon. Scientists from 25 countries appear and present papers about tinnitus.`,
      },
      {
        year: "2004",
        info: `Thanks to a generous donation from an anonymous donor ATA creates The FDL Tinnitus Assistance Fund to financially assist in-need tinnitus patients with hearing evaluations and treatments.`,
      },
      {
        year: "2005",
        info: `ATA develops the Roadmap to a Cure, an innovative guide that identifies what researchers now know about tinnitus and what information is needed to develop a cure.`,
      },
      {
        year: "2007",
        info: `ATA adopts a more focused mission to fund resources to advance research that will lead to a tinnitus cure.`,
      },
      {
        year: "2008",
        info: `Awards a record high $595,462 in annual research grants.`,
      },
      {
        year: "2009",
        info: `Tinnitus becomes the leading service-connected disability for veterans from all periods of service helping to raise the urgency for tinnitus solutions.  `,
      },
      {
        year: "2010",
        info: `The first ATA Walk to Silence Tinnitus is held in Portland. This event goes on to become an annual tradition, raising valuable resources for tinnitus research and support programs.`,
      },
    ],

    htmlTagRefs: {
      mainView: "about-view",
      routerView: "about-view_router-view",
    },

    // Lazy
    isTimelineLoaded: false,
    isBackToTopLoaded: false,
  }),
  computed: {
    exactRouteIsAbout() {
      return routeComparatorUtil(this, "about");
    },

    //% Vuex
    ...mapState({
      lazy: state => state.lazy,
    }),

    //% Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
  methods: {
    scrollToTop() {
      if (this.exactRouteIsAbout) {
        scrollToTopUtil(this, this.htmlTagRefs.mainView);
      } else {
        scrollToTopUtil(this, this.htmlTagRefs.routerView);
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

<style lang="scss" scoped>
.sheet-format {
  background-color: rgba(23, 25, 26, 0.5);
}

.card-mobile-color {
  background-color: rgba(11, 136, 199, 0.5);
}
</style>
