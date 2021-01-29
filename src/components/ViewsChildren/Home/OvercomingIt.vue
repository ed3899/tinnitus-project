<template>
  <v-container class="temp-border">
    <v-row>Overcoming It</v-row>
  </v-container>
</template>

<script>
export default {
  name: "OvercomingIt",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
};
</script>

<style lang="scss" scoped>
.temp-border {
  @extend %temp-border;

  &__item {
    @extend %__first-item;
  }
}
</style>
