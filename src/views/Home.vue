<template>
  <v-container class="temp-container-border mt-n6" fluid>
    <v-row v-if="exactRouteIsNotHome">
      <v-breadcrumbs :items="breadcrumbItems">
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>

    <v-container v-if="exactRouteIsHome" fluid class="ma-0 pa-0">
      <v-row class="mb-3">
        <CarouselMain />
      </v-row>

      <!-- 1st Row -->
      <v-row no-gutters class="my-3">
        <v-row no-gutters class="my-3">
          <h1 class="text-capitalize">All you need to know about tinnitus</h1>
        </v-row>

        <v-row no-gutters justify="space-between" class="my-3">
          <v-col v-for="{ title, text } in cards" cols="3" :key="title">
            <v-card max-width="300">
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
      </v-row>

      <!-- 2nd Row -->
      <v-row no-gutters class="my-3">
        <v-row no-gutters class="my-3">
          <h1 class="text-capitalize">Latest news</h1>
        </v-row>

        <v-row no-gutters justify="space-between" class="my-3">
          <v-col v-for="{ title, body } in news" cols="4" :key="title">
            <v-card max-width="400">
              <v-img
                max-height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
              </v-img>

              <v-card-title
                v-text="title"
                class="text-justify text-h5"
              ></v-card-title>

              <v-card-text v-text="body" style="height: 150px;"></v-card-text>

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
      </v-row>

      <!-- 3rd Row -->
      <v-row no-gutters class="my-3">
        <v-row no-gutters justify="space-between" class="my-3">
          <v-col
            v-for="{ title, body, btn, color } in extra"
            :key="body"
            cols="4"
          >
            <v-card
              height="275"
              max-width="350"
              :color="color"
              class="d-flex flex-column justify-space-around"
            >
              <v-card-title v-text="title" class="white--text"></v-card-title>

              <v-card-text v-text="body" class="card-format"></v-card-text>

              <v-card-actions class="align-self-start">
                <v-btn
                  v-text="btn"
                  color="rgb(87, 195, 178)"
                  class="white--text"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
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
    news: [
      {
        title: "Molly's mammoth sponsored silence",
        body: `Please support Molly in raising awareness and funds to provide support for people living with tinnitus right now and, ultimately, a cure.`,
      },
      {
        title: "We're investing a further £118k for research",
        body: `We've awarded £118,000 to a team from Macquarie University, Australia for a study that's using artificial intelligence to try and discover an objective measure of tinnitus.`,
      },
      {
        title: "Well done to our Christmas Raffle winners!",
        body: `Find out who our three lucky winners were in our Christmas Raffle!`,
      },
    ],
    extra: [
      {
        title: "Shop",
        body: `We have carefully chosen a selection of products to help you manage the buzzing and or ringing in your ears more effectively.`,
        btn: "Shop now",
        color: "rgb(55, 68, 81)",
      },
      {
        title: "Our corporate members",
        body: `By joining as a corporate member and signing our membership charter, our corporate members are sending a message to the tinnitus community that they are dedicated to helping those affected by tinnitus.`,
        btn: "Find out more",
        color: "rgb(136, 16, 32)",
      },
      {
        title: "Donate now",
        body: `As we receive no direct government funding the support we provide can only be offered with your help. 100% of our work relies on the generosity of our fundraisers and donors, people like you!`,
        btn: "Donate",
        color: "rgb(165, 135, 1)",
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
    exactRouteIsNotHome() {
      return !this.exactRouteIsHome;
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

.card-format {
  @extend %card-format;
}
</style>
