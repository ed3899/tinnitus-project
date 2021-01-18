<template>
  <v-app id="main-v-app">
    <div id="main-v-app__navbar-main">
      <NavBarMain />
    </div>
    <div id="main-v-app__router-view">
      <router-view></router-view>
    </div>
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

<style lang="scss">
.temp-height {
  height: 100vh;
}
</style>
