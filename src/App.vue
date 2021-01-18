<template>
  <v-app id="main-v-app">
    <div id="main-v-app__navbar-main">
      <NavBarMain />
    </div>

    <div id="main-v-app__router-view">
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
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

<style lang="scss"></style>
