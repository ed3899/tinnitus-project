<template>
  <v-container>
    <!-- Nav Bar -->
    <v-app-bar
      app
      :height="$vuetify.breakpoint.smAndDown ? 100 : 75"
      elevation="13"
      :class="navBarClass"
      hide-on-scroll
      scroll-threshold="200"
    >
      <!-- Hamburguer menu -->
      <v-app-bar-nav-icon
        @click="drawerProp = true"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <!-- First Row -->
      <v-row
        no-gutters
        justify="space-around"
        align-content="center"
        align="center"
      >
        <!-- Title -->
        <v-col
          sm="12"
          md="5"
          lg="5"
          xl="5"
          :class="[
            $vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : '',
          ]"
        >
          <v-app-bar-title
            :class="[$vuetify.breakpoint.smAndDown ? 'mt-7' : '']"
            >The Tinnitus Community Project</v-app-bar-title
          >
        </v-col>

        <!-- Icons -->
        <v-col
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="d-flex"
          :class="[
            $vuetify.breakpoint.smAndDown
              ? 'justify-center align-center'
              : 'justify-end align-center',
          ]"
        >
          <!-- Search -->
          <v-btn icon class="mr-10 hidden-sm-and-down">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <!-- Social media -->
          <v-btn
            icon
            v-for="({ icon, link }, i) in socialMediaIcons"
            :key="icon + i"
            :href="link"
            class="hidden-sm-and-down"
          >
            <v-icon v-text="icon"></v-icon>
          </v-btn>

          <!-- Donate and contact -->
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            :class="navBarDonate"
            class="ml-5"
            >Donate</v-btn
          >

          <!-- Contact dialog -->
          <!-- Contact btn -->
          <NavBarContactDialog />

          <!-- Toggle dark mode -->
          <v-btn
            @click.stop="toggleDarkMode"
            icon
            :class="[$vuetify.breakpoint.smAndDown ? 'ml-1' : 'ml-5 mr-n5']"
          >
            <v-icon v-show="isDarkModeOn">mdi-weather-sunny</v-icon>

            <v-icon v-show="!isDarkModeOn">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- NavTabs -->
      <template #extension>
        <v-tabs
          slider-color="red"
          show-arrows
          :class="[
            $vuetify.breakpoint.mdAndUp
              ? 'd-flex justify-space-around'
              : 'd-none',
          ]"
        >
          <v-menu
            v-for="({ path: parentPath, name, children }, i) in routes"
            :key="parentPath + name + children + i"
            open-on-hover
            offset-y
            rounded="0"
            close-on-content-click
            right
            transition="slide-y-transition"
          >
            <!-- Parent menu -->
            <template #activator="{ on, attrs }">
              <v-hover v-if="name !== 'NotFound404'" #default="{ hover }">
                <v-tab
                  v-text="name"
                  v-bind="attrs"
                  v-on="on"
                  :to="parentPath"
                  active-class="white--text"
                  exact-active-class="white--text"
                  :class="{ 'blue darken-1 rounded-0 white--text': hover }"
                  class="mx-10 tab-menu-parent-format"
                >
                </v-tab>
              </v-hover>
            </template>

            <!-- Children menu -->
            <v-list>
              <v-hover
                v-for="({ name, path: childrenPath }, i) in children"
                :key="i + childrenPath + name"
                #default="{ hover }"
              >
                <v-list-item
                  :to="`${parentPath}/${childrenPath}`"
                  exact-active-class="blue darken-1 rounded-0 white--text"
                  :class="{ 'blue darken-1 rounded-0': hover }"
                  class="mr-4"
                >
                  <v-list-item-title
                    v-text="name"
                    :class="{ 'white--text': hover }"
                    class="text-capitalize"
                  ></v-list-item-title>
                </v-list-item>
              </v-hover>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-app-bar>

    <!-- NavDrawer - Mobile Only -->
    <NavBarNavDrawer
      :modelValue="drawerProp"
      @update:modelValue="drawerProp = $event"
    />
  </v-container>
</template>

<script>
//% Vuex
import { routes } from "../../router/routes.js";
import { mapState } from "vuex";

//% Components
import NavBarContactDialog from "./NavBar_ContactDialog.vue";
import NavBarNavDrawer from "./NavBar_NavDrawer.vue";

export default {
  name: "NavBarMain",

  components: { NavBarContactDialog, NavBarNavDrawer },

  data: () => ({
    routes,
    drawerProp: false,
  }),

  computed: {
    ...mapState({
      socialMediaIcons: state => state.socialMediaIcons,
    }),

    //%Computed classes
    isDarkModeOn() {
      return this.$vuetify.theme.dark;
    },

    navBarClass() {
      return {
        "teal lighten-1": !this.$vuetify.theme.dark,
      };
    },

    navBarDonate() {
      return {
        success: !this.$vuetify.theme.dark,
        "green darken-2": this.$vuetify.theme.dark,
      };
    },
  },

  watch: {
    //Set dark mode key values to local storage
    isDarkModeOn(newVal) {
      //Local storage only parses string key value pairs
      if (newVal) {
        this.$vuetify.theme.options.themeCache.set(
          process.env.VUE_APP_DARK_MODE_LOCAL_STORAGE_NAME,
          "true"
        );
      } else {
        this.$vuetify.theme.options.themeCache.set(
          process.env.VUE_APP_DARK_MODE_LOCAL_STORAGE_NAME,
          "false"
        );
      }
    },
  },

  mounted() {
    //Verify if there was a previous dark mode
    this.$nextTick(() => {
      const appLocalStorageDarkVal = this.$vuetify.theme.options.themeCache.get(
        process.env.VUE_APP_DARK_MODE_LOCAL_STORAGE_NAME
      );

      const thereWasAPreviousDarkMode = appLocalStorageDarkVal === "true";

      if (thereWasAPreviousDarkMode) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    });
  },

  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-menu-parent-format {
  width: 50rem;
}
</style>
