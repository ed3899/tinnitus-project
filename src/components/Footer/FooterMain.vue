<template>
  <v-footer class="temp-border pa-3 justify-space-around">
    <!-- 1stRow -->
    <v-col cols="7" class="temp-border__item d-flex justify-space-around">
      <v-card elevation="13" width="40%" shaped class="d-flex flex-column pa-3">
        <v-card-title v-text="contactCard.title"></v-card-title>

        <v-list
          v-for="{ icon, title, subtitle } in contactCard.items"
          :key="icon + title + subtitle"
          two-line
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="title"></v-list-item-title>
              <v-list-item-subtitle v-text="subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card
        elevation="13"
        width="35%"
        shaped
        class="d-flex flex-column justify-space-around"
      >
        <v-card-title>Useful links</v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-btn class="text-left" rounded text>Sitemap</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="4" class="temp-border__item">Text</v-col>
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
          icon: "mdi-account-supervisor",
          title: "(650) 555-1234",
          subtitle: "Helpline",
        },
        {
          icon: "mdi-email",
          title: "example@example.com",
          subtitle: "Email",
        },
        {
          icon: "mdi-deskphone",
          title: "0114 250 9933",
          subtitle: "Office",
        },
        {
          icon: "mdi-android-messages",
          title: "07537 416841",
          subtitle: "Text/SMS",
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

<style lang="scss" scoped></style>
