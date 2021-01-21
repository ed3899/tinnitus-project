<template>
  <v-app>
    <nav>
      <NavBarMain />
    </nav>

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>

    <v-footer>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import NavBarMain from "./components/NavBar/NavBarMain.vue";

export default {
  name: "App",

  components: { NavBarMain },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss"></style>
