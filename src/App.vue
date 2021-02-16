<template>
  <v-app>
    <NavBarMain />

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>

    <NewsletterPopUp />

    <FooterMain />
  </v-app>
</template>

<script>
import NavBarMain from "./components/NavBar/NavBarMain.vue";
import FooterMain from "./components/Footer/FooterMain.vue";
import NewsletterPopUp from "./components/NewsletterPopUp/NewsletterPopUp.vue";

export default {
  name: "App",

  components: { NavBarMain, FooterMain, NewsletterPopUp },

  mounted() {
    console.log(process.env.NODE_ENV);
  },
};
</script>

<style lang="scss">
.temp-border {
}
</style>
