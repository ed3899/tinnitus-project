<template>
  <v-row
    v-if="actualRouteIsOurVision"
    no-gutters
    justify="space-around"
    class="temp-border__item ma-3 pa-3"
  >
    <v-col
      cols="6"
      class="temp-border__item pa-3 d-flex flex-column justify-space-around"
    >
      <v-row
        v-for="{ title, body } in routeBased.normalizedHeadings"
        :key="body"
        no-gutters
        class="temp-border__item pa-3 ma-3"
      >
        <template v-if="title.toLowerCase() === 'our mission'">
          <h2 v-text="title" class="text-h2"></h2>

          <p v-text="body" class="text-body-1"></p>

          <h2
            v-text="routeBased.valuesHeading.title"
            class="text-h2 my-3 d-flex"
          ></h2>

          <v-row
            v-for="{ name, description } in routeBased.valuesHeading.values"
            no-gutters
            class="temp-border__item pa-3 my-3 d-flex flex-column"
            :key="description"
          >
            <h3 v-text="name" class="text-h6"></h3>
            <p v-text="description" class="text-body-1"></p>
          </v-row>
        </template>

        <template v-else>
          <h2 v-text="title" class="text-h2"></h2>

          <p v-text="body" class="text-body-1"></p>
        </template>
      </v-row>
    </v-col>

    <v-col
      cols="4"
      class="d-flex flex-column align-center justify-space-around second-col-format temp-border__item pa-3"
    >
      <v-card
        width="65%"
        height="40%"
        class="temp-border__item"
        v-for="{ title, links } in dummyCardData"
        :key="title"
        elevation="13"
      >
        <v-card-title v-text="title"></v-card-title>

        <v-row no-gutters v-for="link in links" :key="link">
          <v-card-text v-text="link"></v-card-text>
          <v-divider class="mx-4 purple"></v-divider>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { data as dummyDataLoader } from "../../../data/AboutUsOurVision";

const { headings } = dummyDataLoader();

export default {
  name: "ChildrenOurVision",
  data: () => ({}),
  computed: {
    normalizedHeadings() {
      //Normalize the data. Extract all the heading except the one with the property values from AboutUsOurVision.js
      const normalizedHeadings = headings.filter(item =>
        item.hasOwnProperty("body")
      );
      return normalizedHeadings;
    },
    valueHeading() {
      //The opposite of the previous. Here because it's only one item I accessed it via index
      const values = headings.filter(item => item.hasOwnProperty("values"));
      return values[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
