<template>
  <v-container class="temp-border" fluid ref="blog-main-top-container">
    <!-- 1st row -->
    <v-row no-gutters class="temp-border__item mb-3" justify="center">
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
          <v-sheet :color="imported.colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3" v-text="slide"></div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <!-- Breadcrumbs -->
    <v-row no-gutters class="temp-border__item my-3">
      <v-breadcrumbs :items="breadcrumbItems">
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
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
          v-for="{ title, body } in imported.cards"
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
            <template v-for="{ title } in imported.btns">
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
          v-for="{ title, links } in imported.cardsTwo"
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

    <!-- 3rd row -->
    <v-row no-gutters class="temp-border__item my-3 pa-3" justify="center">
      <template v-for="{ title } in imported.btns">
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
import { scrollToTop as scrollToTopUtil } from "../../utils/scrollToTop.js";
import { mapState } from "vuex";

export default {
  name: "BlogMain",
  data: () => ({
    carousel: {
      arrows: { prev: "previous slide", next: "next slide" },
    },
    imported: {},
  }),
  computed: {
    ...mapState({
      breadcrumbItems: state => state.CentralState.currentBreadcrumbs,
    }),
  },
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, "blog-main-top-container");
    },
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.scrollToTop();
      const data = await vm.$route.meta.dummyData();
      vm.$data.imported = await { ...data };
      await vm.$store.commit({ type: "createBreadcrumbs", component: vm });
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

.card-actions-format {
  height: 10%;
}

.second-col-format {
  height: 60rem;
}
</style>
