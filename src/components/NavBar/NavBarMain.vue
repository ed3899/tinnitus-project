<template>
  <v-container fluid>
    <!-- Nav Bar -->
    <v-app-bar app color="teal lighten-1" prominent>
      <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>

      <v-container class="d-flex">
        <v-col cols="4">
          <v-toolbar-title>The Tinnitus Community Project</v-toolbar-title>
        </v-col>
        <v-col cols="8">
          <v-row class="d-flex justify-end">
            <v-btn
              icon
              v-for="({ icon, link }, i) in socialMediaIcons"
              :key="icon + i"
              :href="link"
            >
              <v-icon v-text="icon"></v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
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
import { mapState } from "vuex";

//% Components

export default {
  name: "NavBarMain",
  components: {},
  data: () => ({
    isDrawerOpen: false,
    group: null,
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
  computed: {
    ...mapState({
      socialMediaIcons: state => state.socialMediaIcons,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
