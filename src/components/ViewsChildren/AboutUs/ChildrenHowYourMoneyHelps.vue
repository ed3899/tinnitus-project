<template>
  <v-container class="temp-border pa-1">
    <!-- 1st row -->
    <v-row no-gutters class="temp-border__item pa-3 ma-3">
      <v-row no-gutters class="temp-border__item pa-3 ma-3">
        <h2 v-text="firstRow.title" class="text-h2"></h2>
      </v-row>

      <v-row no-gutters class="temp-border__item pa-3 ma-3">
        <p v-text="firstRow.paragraphOne" class="text-body-1"></p>

        <p v-text="firstRow.paragraphTwo" class="text-body-1"></p>
      </v-row>
    </v-row>

    <v-divider></v-divider>

    <!-- 2nd row -->
    <v-row no-gutters class="temp-border__item pa-3 ma-3">
      <v-row no-gutters class="temp-border__item pa-3 ma-3">
        <h2 v-text="secondRow.title" class="text-h2"></h2>
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
        <p v-text="thirdRow.paragraph" class="ma-0 text-body-2"></p>

        <v-btn v-text="thirdRow.btn" color="success"> </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ChildrenHowYourMoneyHelps",
  computed: {
    ...mapState("dummyData", {
      highlights: state => state.About.HowYourMoneyHelps.highlights,
      firstRow: state => state.About.HowYourMoneyHelps.firstRow,
      secondRow: state => state.About.HowYourMoneyHelps.secondRow,
      thirdRow: state => state.About.HowYourMoneyHelps.thirdRow,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
