<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
//% Vuex
import { mapState } from "vuex";

export default {
  name: "NavBarNavigationDrawer",
  computed: {
    //Two-way Computed Property
    // https://next.vuex.vuejs.org/guide/forms.html#two-way-computed-property
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.$store.commit("showDrawer", value);
        console.log(value);
      },
    },
    ...mapState(["group"]),
  },
};
</script>

<style lang="scss" scoped></style>
