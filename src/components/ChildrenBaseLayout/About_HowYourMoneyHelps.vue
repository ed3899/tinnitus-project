<template>
  <v-container :style="[weAreOnDevMode ? brownBorder : '']" class="pa-1">
    <!-- Text -->
    <v-row no-gutters :style="[weAreOnDevMode ? brownBorder : '']" class="pa-1">
      <v-row
        no-gutters
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1"
      >
        <h2 class="text-h2">How your money helps</h2>
      </v-row>

      <v-row
        no-gutters
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1 mt-1"
      >
        <p class="text-body-1">
          Our work is paid for by the generosity of members and supporters like
          you.
        </p>

        <p class="text-body-1">
          We receive no money directly from the government, so we are reliant on
          the generosity and support of members of the public and grant-making
          organisations to be able to support people with tinnitus across the
          UK.
        </p>
      </v-row>
    </v-row>

    <v-divider></v-divider>

    <!-- Highlights-->
    <v-row
      no-gutters
      :style="[weAreOnDevMode ? brownBorder : '']"
      class="pa-1 my-1"
    >
      <!-- Title -->
      <v-row
        no-gutters
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1 mb-1"
      >
        <h2 class="text-h2">2020 Highlights</h2>
      </v-row>

      <!-- Content -->
      <v-row
        no-gutters
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1"
      >
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

    <!-- Mini footer -->
    <v-row no-gutters :style="[weAreOnDevMode ? brownBorder : '']" class="pa-1">
      <v-col
        cols="12"
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1 d-flex justify-space-around align-center"
      >
        <p class="ma-0 text-body-2">
          Download our latest annual review to read more
        </p>

        <v-btn color="success">Our impact</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//% Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

export default {
  name: "AboutHowYourMoneyHelps",
  data: () => ({
    highlights: [
      {
        content: `Hold 2 tinnitus debates in parliament as a result of the Tinnitus Roundtable event and Manifesto`,
      },
      {
        content: `Continue to invest in research projects to find out new management techniques for tinnitus, and lead to an eventual cure`,
      },
      {
        content: `Achieve 103,000 signatures on our petition urging the government to commit more funding to tinnitus research`,
      },
      {
        content: `Welcome 1,291,933 unique visitors to our website - providing reliable information about tinnitus`,
      },
      {
        content: `Answer 6,141 freephone helpline calls from members of the public needing support with their tinnitus or wanting to help a friend or relative`,
      },
      {
        content: `Provide training for 224 professionals through our events, workshops and lectures - helping to improve the quality of support offered to tinnitus patients`,
      },
    ],
  }),
  computed: {
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
};
</script>
