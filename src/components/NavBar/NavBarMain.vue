<template>
  <v-container fluid>
    <!-- Nav Bar -->
    <v-app-bar app color="teal lighten-1" height="200" elevation="13">
      <v-container class="d-flex">
        <v-col cols="4">
          <v-toolbar-title>{{ appBar.title }}</v-toolbar-title>
        </v-col>
        <v-col cols="8">
          <v-row
            class="d-flex justify-end"
            align-content="center"
            align="center"
            no-gutters
          >
            <v-btn icon class="mr-10">
              <v-icon>{{ appBar.icons.magnify }}</v-icon>
            </v-btn>

            <v-btn
              icon
              v-for="({ icon, link }, i) in socialMediaIcons"
              :key="icon + i"
              :href="link"
            >
              <v-icon v-text="icon"></v-icon>
            </v-btn>
            <v-btn rounded color="success" class="ml-5">{{
              appBar.btns.donate
            }}</v-btn>
            <v-btn rounded outlined color="black" class="ml-5">{{
              appBar.btns.contact
            }}</v-btn>
          </v-row>
          <v-row class="d-flex flex-column align-end" no-gutters>
            <h1>{{ appBar.info.title }}</h1>
            <h5 v-for="({ text }, i) in appBar.info.body" :key="text + i" v-text="text"></h5>
          </v-row>
        </v-col>
      </v-container>

      <!-- NavTabs -->

      <template #extension>
        <v-tabs fixed-tabs slider-color="red" show-arrows>
          <!-- Nav Tab Menu -->
          <v-menu
            v-for="({ alias: parentAlias, name, children }, i) in routes"
            :key="i"
            open-on-hover
            offset-y
            rounded="0"
            close-on-content-click
            left
          >
            <template #activator="{ on, attrs }">
              <v-hover #default="{ hover }">
                <v-tab
                  :to="parentAlias"
                  exact-active-class="blue--text"
                  :class="{ 'blue darken-1 rounded-0 white--text': hover }"
                  v-text="name"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  class="ms-3"
                >
                </v-tab>
              </v-hover>
            </template>

            <v-list>
              <v-hover
                v-for="({ name, path: childrenPath }, i) in children"
                :key="i"
                #default="{ hover }"
              >
                <v-list-item
                  :class="{ 'blue darken-1 rounded-0 white--text': hover }"
                  class="align-self-center mr-4"
                  :to="`${parentAlias}/${childrenPath}`"
                >
                  <v-list-item-title v-text="name"></v-list-item-title>
                </v-list-item>
              </v-hover>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-container>
</template>

<script>
//% Vuex
import { mapMutations } from "vuex";
import { routes } from "../../router/routes.js";
import { mapState } from "vuex";

//% Components

export default {
  name: "NavBarMain",
  components: {},
  data: () => ({
    routes,
    appBar: {
      title: "The Tinnitus Community Project",
      icons: {
        magnify: "mdi-magnify",
      },
      btns: {
        donate: "Donate",
        contact: "Contact Us",
      },
      info: {
        title: "Tinnitus Support Team: 0800 018 0527",
        body: [
          {
            text: "Mon-Fri, 9am-5pm",
          },
          {
            text: "Text/SMS: 07537 416841 | Web chat: via chat icon",
          },
          {
            text: "Our forum | Our free e-newsletter",
          },
          { text: "Our office: 0114 250 9933" },
        ],
      },
    },
  }),
  methods: {
    openDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    ...mapMutations({
      toggleCentralDrawerState: "toggleDrawerState",
    }),
  },
  watch: {
    //Closing drawer in case an option is clicked
    group: {
      handler(val, oldVal) {
        this.isDrawerOpen = false;
      },
    },
    //Notifying central state of drawer state
    isDrawerOpen: {
      handler(val, oldVal) {
        this.toggleCentralDrawerState();
      },
    },
  },
  computed: {
    ...mapState({
      socialMediaIcons: state => state.socialMediaIcons,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
