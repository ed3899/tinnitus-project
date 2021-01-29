<template>
  <v-container class="temp-border" fluid ref="blog-main-top-container">
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
          <v-btn
            color="success"
            v-bind="attrs"
            v-on="on"
            v-text="carousel.arrows.prev"
            class="text-capitalize"
          >
          </v-btn>
        </template>

        <template #next="{on, attrs}">
          <v-btn
            color="info"
            v-bind="attrs"
            v-on="on"
            v-text="carousel.arrows.next"
            class="text-capitalize"
          >
          </v-btn>
        </template>

        <v-carousel-item v-for="(slide, i) in imported.slides" :key="i + slide">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3" v-text="slide"></div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <!-- 2nd row -->
    <v-row justify="space-around" class="temp-border__item my-3 pa-3">
      <!-- 1st col -->
      <v-col
        cols="7"
        class="temp-border__item pa-3 d-flex flex-wrap justify-space-around align-content-space-around"
      ></v-col>

      <!-- 2nd col -->
      <v-col
        cols="4"
        class="temp-border__item pa-3 d-flex flex-column align-center justify-space-around second-col-format"
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { scrollToTop as scrollToTopUtil } from "../../utils/scrollToTop.js";

export default {
  name: "BlogMain",
  data: () => ({
    carousel: {
      arrows: { prev: "previous slide", next: "next slide" },
    },
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
    imported: {},
  }),
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, "blog-main-top-container");
    },
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      const data = await vm.$route.meta.dummyData();
      vm.$data.imported = { ...data };
      console.log(vm.$data);
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
</style>
