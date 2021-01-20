<template>
  <v-container fluid>
    <!-- Nav Bar -->
    <v-app-bar app color="teal lighten-1" prominent>
      <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="mb-5"
        >The Tinnitus Community Project</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- NavTabs -->

      <template #extension>
        <v-tabs fixed-tabs slider-color="red" show-arrows>
          <!-- Nav Tab Menu -->
          <v-menu
            v-for="({ path, name }, i) in routes"
            :key="i"
            open-on-hover
            offset-y
            rounded="0"
            close-on-content-click
            left
          >
            <template #activator="{ on, attrs }">
              <v-hover #default="{hover}">
                <v-tab
                  :to="{ path }"
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

            <!-- <v-list>
              <v-hover
                v-for="(subRoute, i) in item.subRoutes"
                :key="i"
                #default="{hover}"
              >
                <v-list-item
                  :class="{ 'blue darken-1 rounded-0 white--text': hover }"
                  class="align-self-center mr-4"
                >
                  <v-list-item-title
                    v-text="subRoute.title"
                  ></v-list-item-title>
                </v-list-item>
              </v-hover>
            </v-list> -->
          </v-menu>
        </v-tabs>
      </template>
    </v-app-bar>

    <!-- NavDrawer -->
    <v-navigation-drawer v-model="isDrawerOpen" absolute bottom temporary>
      <v-list nav dense rounded>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="({ path, name, icon }, i) in routes"
            :key="i"
            :to="{ path }"
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="name"> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
//% Vuex
import { mapMutations } from "vuex";
import { routes } from "../../router/routes.js";
//% Components

export default {
  name: "NavBarMain",
  components: {},
  data: () => ({
    isDrawerOpen: false,
    group: null,
    items: [
      {
        text: "Home",
        icon: "mdi-home",
        route: "/home",
        subRoutes: [
          { title: "Click Me" },
          { title: "Click Me" },
          { title: "Click Me" },
          { title: "Click Me 2" },
        ],
      },
      {
        text: "About Us",
        icon: "mdi-office-building",
        route: "/about",
        subRoutes: [
          { title: "Click Me" },
          { title: "Click Me" },
          { title: "Click Me" },
          { title: "Click Me 2" },
        ],
      },
      {
        text: "Learn More",
        icon: "mdi-book-search",
        route: "/learn-more",
        subRoutes: [
          { title: "Click Me" },
          { title: "Click Me" },
          { title: "Click Me" },
          { title: "Click Me 2" },
        ],
      },
      {
        text: "Contact Us",
        icon: "mdi-email",
        route: "contact-us",
        subRoutes: [
          { title: "Click Me" },
          { title: "Click Me" },
          { title: "Click Me" },
          { title: "Click Me 2" },
        ],
      },
    ],
    routes,
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
  computed: {},
};
</script>

<style lang="scss" scoped></style>
