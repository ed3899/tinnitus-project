<template>
  <v-container ref="top-container" class="temp-border d-flex flex-column">
    <!-- 1st row / Image-->
    <v-row class="temp-border__item mb-5">
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
    <v-row
      class="temp-border__item mb-5"
      align="center"
      align-content="space-around"
    >
      <v-col>
        <h1 class="text-h1">{{ secondRow.firstColumn.heading }}</h1>
        <p class="text-body-1">{{ secondRow.firstColumn.body }}</p>
      </v-col>
      <v-col>
        <v-expansion-panels class="temp-border__item" popout mandatory>
          <v-expansion-panel
            v-for="({ header, body }, i) in secondRow.secondColumn"
            :key="i"
          >
            <v-expansion-panel-header class="text-h6"
              >{{ i + 1 }}. {{ header }}</v-expansion-panel-header
            >
            <v-expansion-panel-content class="text-body-2">
              {{ body }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <!-- 3th row -->
    <v-row class="temp-border__item" justify="center">
      <v-btn class="my-5" rounded color="primary" @click="scrollToTop">
        {{ thirdRow.btnText }}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuickGuide",
  data: () => ({
    secondRow: {
      firstColumn: {
        heading: "What is tinnitus?",
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, rem
        sed hic deserunt mollitia animi perspiciatis est temporibus! Optio hic
        enim sed maxime ab error dolorum? Quasi soluta odit et? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Reiciendis neque excepturi
        in saepe modi. Molestiae eveniet provident laborum iste eius iusto
        aperiam reprehenderit numquam fugit cum. Dolores nemo quidem dolor?`,
      },
      secondColumn: [
        {
          header: "What does tinnitus sound like?",
          body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
        },
        {
          header: "Who gets tinnitus?",
          body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
        },
        {
          header: "What causes tinnitus?",
          body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
        },
        {
          header: "Why have I got tinnitus? - I have good hearing!",
          body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
        },
        {
          header: "What should I do?",
          body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
        },
        {
          header: "I'm hearing noises in my head, not my ears!",
          body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
        },
        {
          header: "Why am I hearing music when nothing is playing?",
          body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
        },
        {
          header: "Is there a cure for tinnitus?",
          body: `Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
        },
      ],
    },

    thirdRow: {
      btnText: "Back To Top",
    },
  }),
  computed: {
    element() {
      return this.$refs["top-container"];
    },
  },
  methods: {
    scrollToTop() {
      this.$vuetify.goTo(this.element);
    },
  },
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
