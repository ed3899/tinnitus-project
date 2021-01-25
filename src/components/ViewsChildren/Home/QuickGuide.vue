<template>
  <v-container class="temp-border">
    <!-- 1st row / Image-->
    <v-row class="temp-border__item">
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

    <!-- 2nd row -->
    <v-row class="temp-border__item">
      <h1 class="text-h1">{{ secondRow.heading }}</h1>
      <p class="text-body-1">{{ secondRow.body }}</p>
    </v-row>

    <!-- 3rd row -->
    <v-row class="temp-border__item">
      <v-expansion-panels class="mt-5" popout mandatory>
        <v-expansion-panel class="" v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuickGuide",
  data: () => ({
    secondRow: {
      heading: "What is tinnitus?",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, rem
        sed hic deserunt mollitia animi perspiciatis est temporibus! Optio hic
        enim sed maxime ab error dolorum? Quasi soluta odit et? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Reiciendis neque excepturi
        in saepe modi. Molestiae eveniet provident laborum iste eius iusto
        aperiam reprehenderit numquam fugit cum. Dolores nemo quidem dolor?`,
    },
  }),
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

  &__item {
    @extend %__first-item;
  }
}
</style>
