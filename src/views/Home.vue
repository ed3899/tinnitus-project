<template>
  <v-container tag="div" class="temp-container-border mt-n6" fluid>
    <v-container tag="div" class="ma-0 pa-0" fluid>
      <v-row>
        <v-breadcrumbs :items="breadcrumbItems">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-row>

      <v-row v-if="exactRouteIsHome" style="height: 100vh;">
        <v-row>
          <CarouselMain />
        </v-row>
      </v-row>

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
import { mapState } from "vuex";

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
    ...mapState({
      breadcrumbItems: state => state.CentralState.currentBreadcrumbs,
    }),
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
};
</script>

<style lang="scss" scoped>
.temp-container-border {
  border: 1px solid blue;
}
</style>
