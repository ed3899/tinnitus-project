<template>
  <v-app>
    <div>
      <NavBarMain />
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
