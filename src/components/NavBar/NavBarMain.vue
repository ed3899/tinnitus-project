<template>
  <div id="navbar-main-container">
    <v-app-bar dark>
      <v-app-bar-nav-icon @click="showDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>The tinnitus funding project</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <div>
      <NavBarNavigationDrawer :drawer-state="true" :list-group="null" />
    </div>
  </div>
</template>

<script>
//% Vuex
import { mapMutations, mapState } from "vuex";

//% Components
import NavBarNavigationDrawer from "./NavBarNavigationDrawer.vue";

export default {
  name: "NavBarMain",
  components: {
    NavBarNavigationDrawer,
  },
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped></style>
