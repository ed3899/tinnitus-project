<template>
  <div id="navbar-main-container include">
    <!-- Nav Bar -->
    <v-app-bar dark>
      <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>The Tinnitus Community Project</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-hover #default="{hover}">
          <v-icon :class="{ 'blue darken-1 rounded-0': hover }"
            >mdi-card-search</v-icon
          >
        </v-hover>
      </v-btn>

      <template #extension>
        <v-tabs align-with-title fixed-tabs>
          <v-tabs-slider color="blue"></v-tabs-slider>

          <v-hover #default="{hover}" v-for="(item, i) in items" :key="i">
            <v-tab
              :to="{ path: item.route }"
              exact-active-class="blue--text"
              v-text="item.text"
              :class="{ 'blue darken-1 rounded-0 white--text': hover }"
            >
            </v-tab>
          </v-hover>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="isDrawerOpen" absolute bottom temporary>
      <v-list nav dense rounded>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="{ path: item.route }"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
//% Vuex
import { mapMutations } from "vuex";

//% Components

export default {
  name: "NavBarMain",
  components: {},
  data: () => ({
    isDrawerOpen: false,
    group: null,
    items: [
      { text: "Home", icon: "mdi-home", route: "/" },
      { text: "About Us", icon: "mdi-office-building", route: "/about" },
      { text: "Learn More", icon: "mdi-book-search", route: "/learn-more" },
      { text: "Contact Us", icon: "mdi-email", route: "contact-us" },
    ],
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
