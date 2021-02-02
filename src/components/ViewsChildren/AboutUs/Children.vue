<template>
  <v-container ref="about-children-container" fluid class="temp-border">
    <!-- 1st row -->
    <v-row no-gutters class="temp-border__item ma-3 pa-3">
      <v-img
        :aspect-ratio="16 / 9"
        src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        height="50vh"
        position="center center"
        class="temp-border__item"
      >
      </v-img>
    </v-row>

    <!-- 2nd row -->
    <v-row no-gutters class="temp-border__item ma-3">
      <v-breadcrumbs :items="breadcrumbItems">
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>

    <!-- 3rd -->
    <v-row
      no-gutters
      justify="space-around"
      class="temp-border__item ma-3 pa-3"
    >
      <v-col cols="6" class="temp-border__item pa-3">
        <v-row no-gutters class="temp-border__item pa-3"> </v-row>
      </v-col>

      <v-col
        cols="4"
        class="d-flex flex-column align-center justify-space-around second-col-format temp-border__item pa-3"
      >
        <v-card
          width="65%"
          height="40%"
          class="temp-border__item"
          v-for="{ title, links } in imported.cards"
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
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { scrollToTop as scrollToTopUtil } from "../../../utils/scrollToTop.js";

export default {
  name: "AboutUsChildren",
  data: () => ({
    imported: {},
  }),
  computed: {
    ...mapState({
      breadcrumbItems: state => state.CentralState.currentBreadcrumbs,
    }),
  },
  methods: {
    scrollToTop() {
      scrollToTopUtil(this, "about-children-container");
    },
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      const data = await vm.$route.meta.dummyData();
      vm.$data.imported = await { ...data };
      await vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
};
</script>

<style lang="scss" scoped>
.second-col-format {
  height: 60rem;
}
</style>
