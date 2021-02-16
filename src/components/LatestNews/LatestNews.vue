<template>
  <!-- v-for not allowed in root component -->
  <v-card
    :height="height"
    :width="width"
    :elevation="elevation"
    :style="[weAreOnDevMode ? border__item : '']"
  >
    <v-card-title v-text="title"></v-card-title>

    <v-row no-gutters v-for="link in links" :key="link">
      <v-card-text v-text="link"></v-card-text>
      <v-divider class="mx-4 purple"></v-divider>
    </v-row>
  </v-card>
</template>

<script>
//% Utils
import { weAreOnDevMode, greenBorder } from "../../utils/index";

export default {
  name: "LatestNews",
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
    height: {
      type: [Number, String],
      required: true,
    },
    width: {
      type: [Number, String],
      required: true,
    },
    elevation: {
      type: Number,
      required: true,
    },
  },
  computed: {
    weAreOnDevMode,
    greenBorder,
  },
};
</script>
