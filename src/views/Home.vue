<template>
  <v-container fluid>
    <v-row class="mt-n10">
      <CarouselMain />
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
};
</script>

<style lang="scss" scoped></style>
