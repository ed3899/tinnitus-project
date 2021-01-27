<template>
  <v-container class="temp-container-border mt-n6" fluid>
    <v-row>
      <v-breadcrumbs :items="breadcrumbItems">
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>

    <v-container v-if="exactRouteIsHome" fluid class="ma-0 pa-0">
      <v-row>
        <CarouselMain />
      </v-row>
      <v-row
        no-gutters
        align-content="space-between"
        class="d-flex flex-column"
      >
        <v-col class="mt-5">
          <h1>ALL YOU NEED TO KNOW ABOUT TINNITUS</h1>
        </v-col>
        <v-col class="mt-5">
          <v-card max-width="300">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>What is tinnitus?</v-card-title>
            </v-img>
            <v-card-text
              >Here are some answers to commonly asked questions about tinnitus.
              Tinnitus is often called ringing in the ears, but it can be
              buzzing, hissing, whistling or any sound!</v-card-text
            >
            <v-card-actions>
              <v-btn color="orange" text>
                Read More
              </v-btn>

              <v-btn color="orange" text>
                Share
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-row v-else>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-row>
  </v-container>
</template>

<script>
import CarouselMain from "../components/Carousel/CarouselMain.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    CarouselMain,
  },
  data: () => ({}),
  computed: {
    exactRouteIsHome() {
      const [homePath1, homePath2] = ["/", "/home"];
      switch (this.$route.path) {
        case homePath1:
        case homePath2: {
          return true;
        }
      }
    },
    ...mapState({
      breadcrumbItems: state => state.CentralState.currentBreadcrumbs,
    }),
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
};
</script>

<style lang="scss" scoped>
.temp-container-border {
  border: 1px solid blue;
}
</style>
