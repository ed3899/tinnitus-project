<template>
  <v-container>
    <v-card
      class="temp-border__item"
      v-for="{ title, links } in news"
      :key="title"
      elevation="13"
    >
      <v-card-title v-text="title"></v-card-title>

      <v-row no-gutters v-for="link in links" :key="link">
        <v-card-text v-text="link"></v-card-text>
        <v-divider class="mx-4 purple"></v-divider>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { data as dummyNewsLoader } from "../../data/LatestNews.js";
export default {
  name: "LatestNews",
  data: () => ({
    news: dummyNewsLoader(),
  }),
};
</script>

<style lang="scss" scoped></style>
