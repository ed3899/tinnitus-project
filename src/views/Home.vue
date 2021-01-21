<template>
  <HomeLayout>
    <template #carousel>
      <CarouselMain />
    </template>
    <template #router-view>
      <router-view></router-view>
    </template>
  </HomeLayout>
</template>

<script>
//%Layout
import HomeLayout from "../layouts/Home/HomeLayout.vue";
//%Sub-components
import CarouselMain from "../components/Carousel/CarouselMain.vue";

export default {
  name: "HomeView",
  components: {
    CarouselMain,
    HomeLayout,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped></style>
