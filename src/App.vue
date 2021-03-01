<template>
  <v-app :style="[weAreOnDevMode ? brownBorder : '']">
    <NavBarMain />

    <v-main :style="[weAreOnDevMode ? greenBorder : '']">
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>

    <FooterMain />
  </v-app>
</template>

<script>
//%Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "./utils/index";

//%Components
import NavBarMain from "./components/NavBar/NavBarMain.vue";
import FooterMain from "./components/Footer/FooterMain.vue";

export default {
  name: "App",

  components: { NavBarMain, FooterMain },

  computed: {
    //%Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
};
</script>
