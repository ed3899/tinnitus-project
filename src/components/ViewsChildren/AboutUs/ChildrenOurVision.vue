<template>
  <v-container class="temp-border__item pa-1">
    <v-row
      v-for="{ title, body } in normalizedHeadings"
      :key="body"
      no-gutters
      class="temp-border__item pa-3 ma-3"
    >
      <template v-if="title.toLowerCase() === 'our mission'">
        <h2 v-text="title" class="text-h2"></h2>

        <p v-text="body" class="text-body-1"></p>

        <h2 v-text="valuesHeading.title" class="text-h2 my-3 d-flex"></h2>

        <v-row
          v-for="{ name, description } in valuesHeading.values"
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
  </v-container>
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
    valuesHeading() {
      //The opposite of the previous. Here because it's only one item I accessed it via index
      const values = headings.filter(item => item.hasOwnProperty("values"));
      return values[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
