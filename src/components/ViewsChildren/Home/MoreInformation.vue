<template>
  <v-container class="temp-border">
    <v-row>More Information</v-row>
  </v-container>
</template>

<script>
export default {
  name: "MoreInformation",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit({ type: "createBreadcrumbs", component: vm });
    });
  },
};
</script>

<style lang="scss" scoped>
.temp-border {
  border: 1px solid brown;
}
</style>
