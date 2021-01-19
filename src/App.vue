<template>
  <AppLayout>
    <template #navbar>
      <NavBarMain />
    </template>
    <template #v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </template>
    <template #v-footer>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </template>
  </AppLayout>
</template>

<script>
import NavBarMain from "./components/NavBar/NavBarMain.vue";
import AppLayout from "./layouts/AppLayout.vue";

export default {
  name: "App",

  components: { NavBarMain, AppLayout },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss"></style>
