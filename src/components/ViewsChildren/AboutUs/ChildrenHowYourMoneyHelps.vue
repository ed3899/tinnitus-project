<template>
  <v-container class="temp-border pa-1">
    <!-- 1st row -->
    <v-row no-gutters class="temp-border__item pa-3 ma-3">
      <v-row no-gutters class="temp-border__item pa-3 ma-3">
        <h2 v-text="staticContent.firstRow.title" class="text-h2"></h2>
      </v-row>

      <v-row no-gutters class="temp-border__item pa-3 ma-3">
        <p v-text="staticContent.firstRow.paragraphOne" class="text-body-1"></p>

        <p v-text="staticContent.firstRow.paragraphTwo" class="text-body-1"></p>
      </v-row>
    </v-row>

    <v-divider></v-divider>

    <!-- 2nd row -->
    <v-row no-gutters class="temp-border__item pa-3 ma-3">
      <v-row no-gutters class="temp-border__item pa-3 ma-3">
        <h2 v-text="staticContent.secondRow.title" class="text-h2"></h2>
      </v-row>

      <v-row no-gutters class="temp-border__item pa-3 ma-3">
        <ul>
          <li
            v-for="{ content } in highlights"
            v-text="content"
            :key="content"
          ></li>
        </ul>
      </v-row>
    </v-row>

    <v-divider></v-divider>

    <!-- 3rd row -->
    <v-row no-gutters class="temp-border__item pa-3 ma-3">
      <v-col
        cols="12"
        class="temp-border__item pa-3 d-flex justify-space-around align-center"
      >
        <p
          v-text="staticContent.thirdRow.paragraph"
          class="ma-0 text-body-2"
        ></p>

        <v-btn v-text="staticContent.thirdRow.btn" color="success"> </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { data as dummyHighlightsLoader } from "../../../data/AboutUsHowYourMoneyHelps.js";

export default {
  name: "ChildrenHowYourMoneyHelps",
  data: () => ({
    highlights: dummyHighlightsLoader(),
    staticContent: {
      firstRow: {
        title: "How your money helps",
        paragraphOne: `Our work is paid for by the generosity of members and supporters like
          you.`,
        paragraphTwo: ` We receive no money directly from the government, so we are reliant on
          the generosity and support of members of the public and grant-making
          organisations to be able to support people with tinnitus across the
          UK.`,
      },
      secondRow: {
        title: "2020 Highlights",
      },
      thirdRow: {
        paragraph: "Download our latest annual review to read more",
        btn: "Our impact",
      },
    },
  }),
};
</script>

<style lang="scss" scoped></style>
