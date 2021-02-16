<template>
  <v-footer
    color="teal lighten-3"
    elevation="13"
    :style="[weAreOnDevMode ? brownBorder : '']"
    class="pa-1 justify-space-around align-start"
  >
    <!-- Contact -->
    <v-card elevation="13" width="30%" shaped class="d-flex flex-column pa-3">
      <v-card-title>Contact us</v-card-title>

      <v-list
        v-for="{ icon, title, subtitle } in contactItems"
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

    <!-- Useful links -->
    <v-card
      elevation="13"
      width="30%"
      shaped
      class="d-flex flex-column justify-space-around pa-3"
    >
      <v-card-title>Useful links</v-card-title>
      <v-list dense rounded>
        <v-list-item-group color="primary">
          <v-hover
            v-for="(item, i) in usefulLinks"
            :key="item + i"
            v-slot="{ hover }"
          >
            <v-list-item :class="{ 'blue-grey lighten-2 elevation-8': hover }">
              <v-list-item-content>
                <v-list-item-title v-text="item"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-hover>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-card elevation="13" width="30%" shaped class="d-flex flex-column pa-3">
      <v-card-text>
        Material on this site is for information purposes only and is not a
        substitute for medical advice - you should always see your doctor and/or
        medical professional.
      </v-card-text>

      <v-divider
        color="grey"
        style="width: 95%;"
        class="align-self-center"
      ></v-divider>

      <v-card-text>
        The British Tinnitus Association is a registered charity. Registered
        charity number 1011145. The British Tinnitus Association is a company
        limited by guarantee, registered in England and Wales, under
        registration number 2709302. British Tinnitus Association, Unit 5 Acorn
        Business Park, Woodseats Close, Sheffield, S8 0TB.
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn
          v-for="{ icon } in socialMediaIcons"
          :key="icon"
          icon
          color="blue"
        >
          <v-icon v-text="icon"></v-icon>
        </v-btn>
      </v-card-actions>

      <v-card-subtitle
        class="text-capitalize align-self-center"
        v-text="actualYear"
      ></v-card-subtitle>
    </v-card>
  </v-footer>
</template>

<script>
//% Vuex
import { mapState } from "vuex";

//% Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

export default {
  name: "FooterMain",
  data: () => ({
    contactItems: [
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
    usefulLinks: [
      "Sitemap",
      "Accesibility",
      "Terms and conditions",
      "Policies and procedures",
      "Information library",
      "Forum",
      "Your contact preferences",
      "Press contact",
    ],
  }),
  computed: {
    actualYear() {
      return `${new Date().getFullYear()} - Tinnitus project`;
    },
    ...mapState({
      socialMediaIcons: state => state.socialMediaIcons,
    }),

    //% Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
};
</script>
