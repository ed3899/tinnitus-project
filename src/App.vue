<template>
  <v-app>
    <NavBarMain />

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>

    <FooterMain />
  </v-app>
</template>

<script>
import NavBarMain from "./components/NavBar/NavBarMain.vue";
import FooterMain from "./components/Footer/FooterMain.vue";

export default {
  name: "App",

  components: { NavBarMain, FooterMain },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.temp-border {
}
</style>
