<template>
  <v-container fluid>
    <v-row>
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
