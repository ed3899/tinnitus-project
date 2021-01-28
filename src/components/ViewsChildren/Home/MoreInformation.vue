<template>
  <v-container class="temp-border" fluid ref="more-information-top-container">
    <!-- 1st row -->
    <v-row no-gutters class="temp-border__item my-3" justify="center">
      <v-carousel
        height="300"
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        class="carousel-format"
        cycle
        interval="8000"
        progress
        progress-color="blue"
      >
        <template #prev="{on, attrs}">
          <v-btn color="success" v-bind="attrs" v-on="on">
            Previous slide
          </v-btn>
        </template>

        <template #next="{on, attrs}">
          <v-btn color="info" v-bind="attrs" v-on="on">
            Next slide
          </v-btn>
        </template>

        <v-carousel-item v-for="(slide, i) in slides" :key="i + slide">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3" v-text="slide"></div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <!-- 2nd row -->
    <v-row
      no-gutters
      justify="space-around"
      class="temp-border__item my-3 pa-3"
    >
      <!-- 1st col -->
      <v-col
        cols="7"
        class="temp-border__item pa-3 d-flex flex-wrap justify-space-around align-content-space-around"
      >
        <v-card
          v-for="{ title, body } in cards"
          :key="body"
          width="45%"
          height="20%"
          class="temp-border__item pa-3 ma-0 rounded-tl-xl d-flex flex-column justify-space-between align-left"
          elevation="13"
          hover
        >
          <v-img
            height="25%"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            class="flex-grow-0 flex-shrink-1"
          ></v-img>

          <v-card-title
            v-text="title"
            class="flex-grow-0 flex-shrink-0"
          ></v-card-title>

          <v-card-text v-text="body" class="flex-grow-1 flex-shrink-0">
          </v-card-text>

          <v-divider class="mx-4 purple"></v-divider>

          <v-card-actions class="card-actions-format flex-grow-0 flex-shrink-0">
            <template v-for="{ title } in btns">
              <v-btn
                v-if="title === 'Read More'"
                color="deep-purple lighten-2"
                text
                :key="title + 1"
                v-text="title"
              >
              </v-btn>
            </template>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- 2nd col -->
      <v-col
        cols="4"
        class="temp-border__item pa-3 d-flex flex-column align-center justify-space-around second-col-format"
      >
        <v-card
          width="65%"
          max-width="65%"
          height="40%"
          max-height="40%"
          class="temp-border__item"
          v-for="{ title, links } in cardsTwo"
          :key="title"
          elevation="13"
        >
          <v-card-title v-text="title"></v-card-title>

          <v-row no-gutters v-for="link in links" :key="link">
            <v-card-text v-text="link"></v-card-text>
            <v-divider class="mx-4 purple"></v-divider>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- 2rd row -->
    <v-row no-gutters class="temp-border__item my-3 pa-3" justify="center">
      <template v-for="{ title } in btns">
        <v-btn
          v-if="title === 'Back To Top'"
          :key="title"
          v-text="title"
          rounded
          class="primary"
          @click="scrollToTop"
        ></v-btn>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MoreInformation",
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: [
      "First slide",
      "Second slide",
      "Third slide",
      "Fourth slide",
      "Fifth slide",
    ],
    cards: [
      {
        title: "Ear wax removal and tinnitus",
        body: `Wax is an important natural secretion found in the ear. Find out
            what causes ear wax build up, how to deal with it and whether it has
            any effect on tinnitus.`,
      },
      {
        title: "2017 ATRR: Hyperacusis and misophonia",
        body: `Hyperacusis is attracting an increasing amount of interest. Want to learn more? Prof David Baguley talks about the latest research in this field.`,
      },
      {
        title: "Misophonia - Living with misophonia",
        body: `Misophonia is a condition consisting of an emotional and physical response to sounds. Lucy Partridge and David Scott discuss in further detail.`,
      },
      {
        title: "Misophonia",
        body: `Want to learn more about misophonia? David Scott and Lucy Partridge are here to help.`,
      },
      {
        title: "Otosclerosis and deafness",
        body: `Otosclerosis is the most common cause of progressive deafness in young adults. Learn more about it here.`,
      },
      {
        title: "Balance and tinnitus",
        body: `The control of balance in humans is quite complex. Learn more about how the human body balances and how it can sometimes go wrong.`,
      },
      {
        title: "Hyperacusis",
        body: `Find out more about what hyperacusis is, and how this sensitivity to everyday sound can be managed.`,
      },
      {
        title:
          "Tinnitus and disorders of the temporo-mandibular joint (TMJ) and neck",
        body: `Learn more about the jaw joint (temporo-mandibular joint or TMJ), and how problems with it or the neck may affect tinnitus.`,
      },
    ],
    btns: [{ title: "Read More" }, { title: "Back To Top" }],
    cardsTwo: [
      {
        title: "Latest",
        links: [
          "Molly's mammoth sponsored silence",
          "Audiological Science",
          "Hidden Hearing",
          "Anxiety Management for Tinnitus",
        ],
      },
      {
        title: "Most read",
        links: [
          "Ear wax removal and tinnitus",
          "All about tinnitus",
          "Pulsatile tinnitus",
          "Self help tinnitus",
          "Tinnitus and stress",
        ],
      },
    ],
  }),
  computed: {
    element() {
      return this.$refs["more-information-top-container"];
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
  methods: {
    scrollToTop() {
      this.$vuetify.goTo(this.element);
    },
  },
};
</script>

<style lang="scss" scoped>
.temp-border {
  @extend %temp-border;

  &__item {
    @extend %__first-item;
  }
}

.carousel-format {
  width: 80vw;
}

.card-actions-format {
  height: 10%;
  max-height: 10%;
}

.second-col-format {
  height: 60rem;
}
</style>
