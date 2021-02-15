<template>
  <v-sheet elevation="8" :width="width" rounded="xl" color="grey">
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-item
        v-for="{ title, text } in cards"
        :key="title + text"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'white'"
          class="ma-4 d-flex flex-column justify-space-around"
          width="20rem"
          @click="toggle"
        >
          <v-img
            height="15rem"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            class="flex-grow-0 flex-shrink-0"
          >
            <v-card-title
              v-text="title"
              class="white--text card-text-overflow-fix"
            ></v-card-title>
          </v-img>

          <v-card-text
            v-text="text"
            class="flex-grow-1 flex-shrink-0"
          ></v-card-text>

          <v-card-actions class="d-flex justify-start">
            <v-btn
              v-for="btn in btns"
              :key="btn"
              v-text="btn"
              color="orange"
              text
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "NewsSlider",
  props: {
    width: {
      type: [Number, String],
      required: true,
    },
    cards: {
      type: [Array],
      required: true,
    },
  },
  data: () => ({
    model: null,
    btns: { share: "Share", read: "Read More" },
  }),
};
</script>

<style lang="scss" scoped>
.card-text-overflow-fix {
  word-break: normal;
}
</style>
