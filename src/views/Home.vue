<template>
  <v-container tag="div" class="temp-container-border mt-n6 " fluid>
    <v-container tag="div" fluid class="ma-0 pa-0">
      <!-- 1st row -->
      <v-row v-if="exactRouteIsHome">
        <CarouselMain />
      </v-row>
      <!-- 2nd row -->
      <v-row v-else>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CarouselMain from "../components/Carousel/CarouselMain.vue";

export default {
  name: "HomeView",
  components: {
    CarouselMain,
  },
  data: () => ({}),
  computed: {
    exactRouteIsHome() {
      const [homePath1, homePath2] = ["/", "/home"];
      switch (this.$route.path) {
        case homePath1:
        case homePath2: {
          return true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.temp-container-border {
  border: 1px solid blue;
}
</style>
