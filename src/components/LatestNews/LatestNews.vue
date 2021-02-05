<template>
  <v-card
    class="temp-border__item"
    elevation="13"
    :height="height"
    :width="width"
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
  },
};
</script>

<style lang="scss" scoped></style>
