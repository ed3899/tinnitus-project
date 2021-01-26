<template>
  <v-container :fluid="true">
    <!-- 1stRow -->
    <v-row class="temp-border">
      <v-col cols="4 d-flex flex-column">
        <v-card>
          <v-card-title>
            <h1 class="text-h5">{{ firstRow.vCardTitle }}</h1>
          </v-card-title>

          <v-card-text>
            <p
              v-for="{ text } in firstRow.vCardContent"
              :key="text"
              v-text="text"
            ></p>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="teal accent-4" @click="revealCardToggle">
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <h1 class="display-1 text--primary">
                  {{ firstRow.vCardRevealContent.header }}
                </h1>
                <p>
                  {{ firstRow.vCardRevealContent.body }}
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="revealCardToggle">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col class="text-center temp-border__item" cols="4">
        {{ actualYear }} — <span class="text-subtitle-2">Tinnitus Project</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FooterMain",
  data: () => ({
    reveal: false,
    firstRow: {
      vCardTitle: "Contact Us",
      vCardContent: [
        { text: "Helpline: 0800 018 0527" },
        {
          text: "example@tinnitus.org",
        },
        {
          text: "Office: 0114 250 9933",
        },
        {
          text: "Text/SMS: 07537 416841",
        },
      ],
      vCardRevealContent: {
        header: "Tinnitus",
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium blanditiis accusamus aut dolores incidunt a fuga eos
              veniam esse aspernatur quibusdam consequuntur, quas harum pariatur
              iusto dicta. Quos, fugit magnam?`,
      },
    },
  }),
  computed: {
    actualYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    revealCardToggle() {
      this.reveal = !this.reveal;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
