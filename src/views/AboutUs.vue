<template>
  <v-container ref="about-main-container" fluid class="temp-border mt-n6">
    <!-- About main content -->
    <v-container v-if="exactRouteIsAbout" fluid class="ma-0 pa-0">
      <!-- 1st row -->
      <v-row
        no-gutters
        class="temp-border__item mx-n5 mt-n5 mb-3 pa-0"
        justify="center"
      >
        <v-img
          max-height="60vh"
          height="60vh"
          :aspect-ratio="16 / 9"
          src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          class="temp-border__item d-flex align-end"
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
              class="temp-border__item pa-3"
              justify="space-around"
            >
              <v-col
                cols="7"
                class="temp-border__item pa-3 d-flex flex-column justify-center"
              >
                <h3
                  class="blue--text text--darken-1 text-h3 text-capitalize font-italic"
                  v-text="firstRow.hero.title"
                ></h3>
                <p
                  v-text="firstRow.hero.body"
                  class="white--text font-weight-light body-1"
                ></p>
              </v-col>

              <v-col cols="4" class="temp-border__item pa-3 mt-n16">
                <v-card
                  shaped
                  color="cyan darken-3 pa-3"
                  class="d-flex flex-column"
                >
                  <v-card-title
                    v-text="firstRow.card.title"
                    class="text-h6 text-capitalize white--text"
                  >
                  </v-card-title>

                  <v-card-text
                    v-text="firstRow.card.text"
                    class="text-body-2 white--text"
                  >
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      v-text="firstRow.card.btn"
                      class="rounded-tl-xl rounded-br-xl"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-img>
      </v-row>

      <!-- 2nd row -->
      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <p class="text-body-1">
          ATA is the nation’s foremost and trusted organization committed to
          finding cures for tinnitus and hyperacusis. Our commitment demands
          focus, determination, strategy and resources. ATA promotes synergy
          between dedicated medical professionals and researchers who work with
          and within the tinnitus community. The battle for a cure is real, and
          will be won through advances in technology and medicine, areas where
          we have often been a conduit to new discoveries. We fulfill our
          mission by: (1) funding targeted research projects; (2) providing
          education, hope and support for the tinnitus community; (3) advocating
          for effective public policies focused on advancing science towards
          cures for tinnitus and hyperacusis; and (4) collaborating with others
          to promote awareness, encourage prevention and to ultimately silence
          tinnitus.
        </p>

        <p class="text-body-1">
          Since 1971, the American Tinnitus Association has been a global leader
          in the effort to find a cure for tinnitus. ATA brings together
          patients, researchers, healthcare professionals, industry partners,
          and lawmakers to advance public understanding of tinnitus and fund
          vital tinnitus research.
        </p>

        <p class="text-body-1">
          As a registered 501(c)(3) non-profit association, ATA is driven to
          support the 45 million Americans struggling with tinnitus. We know
          that tinnitus can be a burdensome, confusing, and upsetting condition.
          We also know that patients face many challenges in finding quality
          healthcare to manage their tinnitus. ATA aims to improve the tinnitus
          patient experience through compassion, education, empowerment, and
          advocacy. Our goal is simple: we want to help patients quiet tinnitus
          today by improving access to the most-validated management tools, and
          to silence tinnitus in the near future by funding advanced research.
        </p>
      </v-row>

      <!-- 3rd row -->
      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <v-col cols="12" class="d-flex flex-column justify-start">
          <h2 v-text="thirdRowTitle" class="text-h2"></h2>

          <v-timeline>
            <v-timeline-item
              v-for="{ year, info } in history"
              :key="info"
              color="blue"
              small
            >
              <template #opposite>
                <div>
                  <p class="ma-0" v-text="year"></p>
                </div>
              </template>

              <v-card class="d-flex align-center pa-3">
                <p v-text="info" class="ma-0"></p>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>

      <!-- 4th row -->
      <v-row no-gutters class="temp-border__item ma-3 pa-3" justify="center">
        <v-btn
          v-text="localBtns.backToTop"
          rounded
          class="primary"
          @click="scrollToTop"
        ></v-btn>
      </v-row>
    </v-container>

    <!-- About route-children -->
    <router-view v-else></router-view>
  </v-container>
</template>

<script>
//Utils
import { routeComparator as routeComparatorUtil } from "../utils/routeComparator.js";
import { scrollToTop as scrollToTopUtil } from "../utils/scrollToTop.js";

export default {
  name: "AboutUsView",
  data: () => ({
    firstRow: {
      hero: {
        title: "About us",
        body: `The core purpose of the American Tinnitus Association is to
                  promote relief, prevent, and find cures for tinnitus,
                  evidenced by its core values of compassion, credibility, and
                  responsibility.`,
      },
      card: {
        title: "Join us",
        text: `Join ATA, the nation’s largest nonprofit organization for
                    tinnitus patients. Get valuable benefits and support our
                    mission to silence tinnitus.`,
        btn: "Join now",
      },
    },
    reverseHistory: true,
    thirdRowTitle: "History",
    history: [
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
    localBtns: {
      backToTop: "Back to top",
    },
  }),
  computed: {
    exactRouteIsAbout() {
      return routeComparatorUtil(this, "about");
    },
  },
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, "about-main-container");
    },
  },
  mounted() {
    this.scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
.sheet-format {
  background-color: rgba(23, 25, 26, 0.5);
}

.row-format {
  background-color: rgba(23, 25, 26, 0.5);
}
</style>
