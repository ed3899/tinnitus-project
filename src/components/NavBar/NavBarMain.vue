<template>
  <div id="navbar-main-container include">
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <!-- Nav Bar -->
    <v-app-bar dark>
      <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>The tinnitus funding project</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Nav Drawer active-class="deep-purple--text text--accent-4" -->

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
    group: {
      handler(val, oldVal) {
        this.isDrawerOpen = false;
      },
    },
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
