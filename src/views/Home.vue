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
        <v-col class="mt-5 d-flex justify-space-around">
          <v-card
            max-width="300"
            v-for="{ title, text } in cards"
            :key="title"
            class="d-flex flex-column"
          >
            <v-img
              class="white--text"
              max-height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title v-text="title"></v-card-title>
            </v-img>

            <v-card-text v-text="text" style="height: 150px;"></v-card-text>

            <v-card-actions>
              <v-btn
                v-for="btn in btns"
                :key="btn"
                color="orange"
                text
                v-text="btn"
              ></v-btn>
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
  data: () => ({
    cards: [
      {
        title: "What is tinnitus?",
        text: `Here are some answers to commonly asked questions about tinnitus.
              Tinnitus is often called ringing in the ears, but it can be
              buzzing, hissing, whistling or any sound!`,
      },
      {
        title: "What can I do about it?",
        text: `There are several strategies that can be very helpful in managing tinnitus. Learn more about them here.`,
      },
      {
        title: "How do I prevent it?",
        text: `Tinnitus can occur for different reasons, but sometimes it is preventable. Read on to find out what prevention measures you can take.`,
      },
      {
        title: "Covid-19, the BTA & you",
        text: `We’re all following the news and have concerns re: Covid-19. This is what we're doing at the BTA to continue to support you.`,
      },
    ],
    btns: {
      share: "Share",
      read: "Read More",
    },
  }),
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
