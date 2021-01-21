<template>
  <HomeLayout>
    <template v-if="actualRouteIsHome" #carousel>
      <CarouselMain />
    </template>
    <template v-else #router-view>
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
  computed: {
    actualRouteIsHome() {
      const [homePath1, homePath2] = ["/", "/home"];
      switch (this.$route.path) {
        case homePath1:
        case homePath2: {
          return true;
        }
      }
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
