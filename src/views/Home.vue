<template>
  <v-container fluid>
    <v-row class="mt-n10">
      <CarouselMain />
    </v-row>
    <v-row>
      <router-view></router-view>
    </v-row>
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
};
</script>

<style lang="scss" scoped></style>
