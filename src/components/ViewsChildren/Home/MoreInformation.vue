<template>
  <v-container class="temp-border" fluid>
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
    <v-row no-gutters class="temp-border__item my-3 pa-3">
      <v-col cols="8" class="temp-border__item pa-3">
        <v-card
          v-for="{ title, body } in cards"
          :key="body"
          max-width="35%"
          max-height="50rem"
          class="pa-3"
        >
          <v-img
            height="25%"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title v-text="title"></v-card-title>

          <v-card-text v-text="body"> </v-card-text>

          <v-divider class="mx-4 purple"></v-divider>

          <v-card-actions>
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
      <v-col cols="4"></v-col>
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
    btns: [{ title: "Read More" }],
  }),
  computed: {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
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
</style>
