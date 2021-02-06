<template>
  <!-- v-for not allowed in root component -->
  <v-card
    :height="height"
    :width="width"
    :key="key"
    elevation="13"
    class="temp-border__item"
  >
    <v-card-title v-text="title"></v-card-title>

    <v-row no-gutters v-for="link in links" :key="link">
      <v-card-text v-text="link"></v-card-text>
      <v-divider class="mx-4 purple"></v-divider>
    </v-row>
  </v-card>
</template>

<script>
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
    key: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
