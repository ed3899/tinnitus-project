<template>
  <v-container fluid>
    <!-- Nav Bar -->
    <v-app-bar app color="teal lighten-1" height="65" elevation="13">
      <!-- First Row -->
      <v-row
        no-gutters
        justify="space-around"
        align-content="center"
        align="center"
      >
        <!-- Title -->
        <v-col cols="5">
          <v-app-bar-title>The Tinnitus Community Project</v-app-bar-title>
        </v-col>

        <!-- Icons -->
        <v-col cols="6" class="d-flex justify-end align-center">
          <!-- Search -->
          <v-btn icon class="mr-10">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <!-- Social media -->
          <v-btn
            icon
            v-for="({ icon, link }, i) in socialMediaIcons"
            :key="icon + i"
            :href="link"
          >
            <v-icon v-text="icon"></v-icon>
          </v-btn>

          <!-- Donate and contact -->
          <v-btn rounded color="success" class="ml-5">Donate</v-btn>

          <!-- Contact dialog -->
          <NavBarContactDialog />
        </v-col>
      </v-row>

      <!-- NavTabs -->
      <template #extension>
        <v-tabs
          slider-color="red"
          show-arrows
          class="d-flex justify-space-around"
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
  </v-container>
</template>

<script>
//% Vuex
import { routes } from "../../router/routes.js";
import { mapState } from "vuex";

//% Components
import NavBarContactDialog from "./NavBar_ContactDialog.vue";

export default {
  name: "NavBarMain",
  components: { NavBarContactDialog },
  data: () => ({
    routes,
  }),
  computed: {
    ...mapState({
      socialMediaIcons: state => state.socialMediaIcons,
    }),
  },
};
</script>

<style lang="scss" scoped>
.tab-menu-parent-format {
  width: 50rem;
}
</style>
