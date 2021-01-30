<template>
  <v-footer class="temp-border pa-3" height="100px">
    <!-- 1stRow -->
    <v-row no-gutters class="temp-border pa-3" justify="space-around">
      <v-col cols="8" class="d-flex justify-space-around">
        <v-card
          elevation="13"
          width="35%"
          shaped
          class="d-flex flex-column pa-3"
        >
          <v-card-title>Contact us</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-deskphone</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>(650) 555-1234</v-list-item-title>
                <v-list-item-subtitle>Helpline</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card elevation="13" width="35%" shaped>
          <v-card-title>Useful links</v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">Text</v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FooterMain",
  data: () => ({
    contactCard: {
      title: "Contact us",
      items: [
        {
          icon: "mdi-deskphone",
          title: "(650) 555-1234",
          subtitle: "Helpline",
        },
      ],
    },
    firstRow: {
      firstCol: {
        vCardTitle: "Contact Us",
        vCardContent: [
          { text: "Helpline: 0800 018 0527" },
          {
            text: "example@tinnitus.org",
          },
          {
            text: "Office: 0114 250 9933",
          },
          {
            text: "Text/SMS: 07537 416841",
          },
        ],
        vCardRevealContent: {
          header: "Tinnitus",
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium blanditiis accusamus aut dolores incidunt a fuga eos
              veniam esse aspernatur quibusdam consequuntur, quas harum pariatur
              iusto dicta. Quos, fugit magnam?`,
        },
        vCardButtons: {
          learn: "Learn More",
          close: "Close",
        },
      },
      secondCol: {
        vCardItems: [
          {
            text: "Sitemap",
            link: "https://www.google.com",
          },
          {
            text: "Accessibility",
            link: "example.com",
          },
          {
            text: "Terms and conditions",
            link: "example.com",
          },
          {
            text: "Policies and procedures",
            link: "example.com",
          },
          {
            text: "Information library",
            link: "example.com",
          },
          {
            text: "Forum",
            link: "example.com",
          },
          {
            text: "Your contact preferences",
            link: "example.com",
          },
          {
            text: "Press contact",
            link: "example.com",
          },
        ],
      },
      thirdCol: {
        card1: {
          vCardText: `Material on this site is for information purposes only and is not a substitute for medical advice - you should always see your doctor and/or medical professional.`,
        },
        card2: {
          text: `The British Tinnitus Association is a registered charity. Registered charity number 1011145.
          The British Tinnitus Association is a company limited by guarantee, registered in England and Wales, under registration number 2709302.
          British Tinnitus Association, Unit 5 Acorn Business Park, Woodseats Close, Sheffield, S8 0TB.`,
          subtitle: "Tinnitus Project",
        },
      },
    },
  }),
  computed: {
    actualYear() {
      return new Date().getFullYear();
    },
    ...mapState({
      socialMediaIcons: state => state.socialMediaIcons,
    }),
  },
  methods: {
    revealCardToggle() {
      this.reveal = !this.reveal;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
