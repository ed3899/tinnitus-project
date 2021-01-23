<template>
  <v-container class="temp-border">
    <!-- 1st row / Image-->
    <v-row class="temp-border__first-item">
      <v-col align-self="center" class="d-flex justify-center" cols="12">
        <v-img
          class="temp-border__second-item"
          src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1000&q=80&h=300"
          max-height="300"
          max-width="1000"
          contain
        >
          <!-- Temporary placeholder -->
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <v-row>Quick Guide</v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuickGuide",
  data: () => ({}),
  computed: {},
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

  &__first-item {
    @extend %__first-item;
  }

  &__second-item {
    @extend %__second-item;
  }
}
</style>
