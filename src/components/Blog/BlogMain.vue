<template>
  <v-container class="temp-border" fluid ref="more-information-top-container">
    <!-- 1st Row -->
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

        <v-carousel-item v-for="(slide, i) in slides" :key="i + slide">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3" v-text="slide"></div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
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
  }),
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
