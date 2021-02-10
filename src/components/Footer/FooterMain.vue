<template>
  <v-footer
    color="teal lighten-3"
    elevation="13"
    class="temp-border pa-3 justify-space-around align-start"
  >
    <v-card elevation="13" width="30%" shaped class="d-flex flex-column pa-3">
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
      width="30%"
      shaped
      class="d-flex flex-column justify-space-around pa-3"
    >
      <v-card-title v-text="usefulLinksCard.title"></v-card-title>
      <v-list dense rounded>
        <v-list-item-group color="primary">
          <v-hover
            v-for="(item, i) in usefulLinksCard.items"
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
      <v-card-text v-text="materialsCard.textOne"></v-card-text>

      <v-divider
        color="grey"
        style="width: 95%;"
        class="align-self-center"
      ></v-divider>

      <v-card-text v-text="materialsCard.textTwo"></v-card-text>

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
        v-text="projectYear"
      ></v-card-subtitle>
    </v-card>
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
    usefulLinksCard: {
      title: "Useful links",
      items: [
        "Sitemap",
        "Accesibility",
        "Terms and conditions",
        "Policies and procedures",
        "Information library",
        "Forum",
        "Your contact preferences",
        "Press contact",
      ],
    },
    materialsCard: {
      textOne: `Material on this site is for information purposes only and is not a
        substitute for medical advice - you should always see your doctor and/or
        medical professional.`,
      textTwo: `The British Tinnitus Association is a registered charity. Registered
        charity number 1011145. The British Tinnitus Association is a company
        limited by guarantee, registered in England and Wales, under
        registration number 2709302. British Tinnitus Association, Unit 5 Acorn
        Business Park, Woodseats Close, Sheffield, S8 0TB.`,
      subtitle: `Tinnitus project`,
    },
    projectYear: "",
  }),
  computed: {
    actualYearSetter: {
      get() {
        return new Date().getFullYear();
      },
      set(newValue) {
        const actualYear = new Date().getFullYear();
        this.projectYear = `${actualYear} - ${newValue}`;
      },
    },
    ...mapState({
      socialMediaIcons: state => state.socialMediaIcons,
    }),
  },
  beforeMount() {
    this.actualYearSetter = this.materialsCard.subtitle;
  },
};
</script>

<style lang="scss" scoped></style>
