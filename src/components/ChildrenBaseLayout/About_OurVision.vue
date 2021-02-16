<template>
  <v-container :style="weAreOnDevMode ? brownBorder : ''" class="pa-0 ma-0">
    <v-row
      v-for="{ title, body } in normalizedHeadings"
      :key="body"
      no-gutters
      :style="weAreOnDevMode ? greenBorder : ''"
      class="pa-2 ma-1"
    >
      <template v-if="title.toLowerCase() === 'our mission'">
        <h2 v-text="title" class="text-h2"></h2>

        <p v-text="body" class="text-body-1"></p>

        <h2 v-text="valuesHeading.title" class="text-h2 my-3 d-flex"></h2>

        <v-row
          v-for="{ name, description } in valuesHeading.values"
          no-gutters
          :style="weAreOnDevMode ? greenBorder : ''"
          class="pa-3 my-3 d-flex flex-column"
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
//%Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

export default {
  name: "AboutOurVision",
  data: () => ({
    headings: [
      {
        title: "What we do",
        body: `We are an independent charity supporting thousands of people who
      experience tinnitus and advise medical professionals from across
      the world. We are the primary source of support and information
      for people with tinnitus in the UK, facilitating an improved
      quality of life. We aim to encourage prevention through our
      educational programme and to seek effective treatment for tinnitus
      through a medical research programme. We seek to provide the most
      appropriate and expert advice and information free of charge via
      our confidential freephone helpline on 0800 018 0527.`,
      },
      {
        title: "Our vision",
        body: `We want "A world where no one suffers from tinnitus." That is a
      powerful statement and one we believe is achievable. It is
      achievable now, to an extent that there are management tools and
      methods available to enable some not to 'suffer'. However, we also
      want to find better ways to manage tinnitus – and ultimately a
      cure.`,
      },
      {
        title: "Our mission",
        body: `To drive progress towards a cure and deliver excellent support to
      help people living with tinnitus.`,
      },
      {
        title: "Our values",
        values: [
          {
            name: "Compassion",
            description: `Address the needs of our community with empathy and kindness.`,
          },
          {
            name: "Integrity",
            description: `Treat everyone with fairness, openness and honesty`,
          },
          {
            name: "Trust",
            description: `Be objective and current, justifying what we do and say based on evidence.`,
          },
          {
            name: "Boldness",
            description: `Be courageous in everything that we do and constantly challenge.`,
          },
        ],
      },
    ],
  }),
  computed: {
    normalizedHeadings() {
      //Normalize the data. Extract all the heading except the one with the property values from AboutUsOurVision.js
      return this.headings.filter(item => item.hasOwnProperty("body"));
    },
    valuesHeading() {
      //The opposite of the previous. Here because it's only one item, it is accessed via index
      const values = this.headings.filter(item =>
        item.hasOwnProperty("values")
      );
      return values[0];
    },
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
};
</script>
