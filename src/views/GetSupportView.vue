<template>
  <v-container class="temp-border mt-n6 pa-3" fluid>
    <!-- 1st row -->
    <v-row no-gutters class="temp-border__item ma-3 pa-3">
      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <h2 class="text-h2">How loud is loud?</h2>
      </v-row>

      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <p class="text-body-2">
          If you are trying to understand how loud sounds are, and what is and
          isn’t safe then this information should help.
        </p>

        <p class="text-body-2">
          When thinking about sound levels you also need to be aware of exposure
          times, so how long sounds are safe for, this will help you understand
          when and how to protect yourself.
        </p>
      </v-row>
    </v-row>

    <!-- 2nd row -->
    <v-row no-gutters class="temp-border__item ma-3 pa-3">
      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <h2 class="text-h2">What is a decibel?</h2>
      </v-row>
      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <p class="text-body-2">
          A decibel dB is the unit used to measure the intensity of a sound –
          85dB and above is the level at which noise becomes unsafe without the
          use of hearing protection. 85dB and over hearing protection should be
          provided.
        </p>

        <p class="text-body-2">
          For sounds under 85dB, there should be no need for hearing protection.
          Although if you work in a noisy environment, up to 80dB, you should be
          trained and educated to understand the risks and hearing protection
          should be made available.
        </p>

        <p class="text-body-2">
          These rules do not relate to social noise, and that’s where you need
          to make sure you protect yourself.
        </p>
      </v-row>
    </v-row>

    <!-- 3rd row -->
    <v-row no-gutters class="temp-border__item ma-3 pa-3">
      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <h2 class="text-h2">Sound levels and exposure times</h2>
      </v-row>

      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <p class="text-body-1">
          Here are some examples of sound levels and maximum exposure times,
          after which hearing protection is required. These examples should give
          you a gauge for sound levels, some sounds are unavoidable and we
          aren't saying avoid the below sounds - for example, you can't avoid a
          crying baby, but it's good to know how to understand what
        </p>
      </v-row>

      <v-row no-gutters class="temp-border__item ma-3 pa-3">
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          dense
          class="elevation-8"
        >
        </v-data-table>
      </v-row>
    </v-row>

    <v-row no-gutters class="temp-border__item ma-3 pa-3">
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GetSupportView",
  data: () => ({
    headers: [
      {
        text: "Decibel",
        align: "start",
        sortable: false,
        value: "decibels",
      },
      {
        text: "Source",
        value: "source",
      },
      {
        text: "Recommended exposure time",
        value: "hours",
      },
    ],
    items: [
      {
        decibels: "85db",
        source: "Kitchen blender",
        hours: "8 hours",
      },
      {
        decibels: "88dB",
        source: "Forklift truck",
        hours: "4 hours",
      },
      {
        decibels: "91dB",
        source: "Tube train",
        hours: "2 hours",
      },
      {
        decibels: "94dB",
        source: "Lawnmower",
        hours: "1 hours",
      },
      {
        decibels: "97dB",
        source: "Industrial fire alarm",
        hours: "0.5 hours or '30 mins'",
      },
      {
        decibels: "100dB",
        source: "Handheld drill",
        hours: "0.25 hours or '15 min'",
      },
      {
        decibels: "103dB",
        source: "MP3 player max vol",
        hours: "0.125 hours or '7.5 mins'",
      },
      {
        decibels: "106dB",
        source: "Motorbike",
        hours: "0.0625 hours or '3.75 mins'",
      },
      {
        decibels: "109dB",
        source: "Crying baby",
        hours: "0.03 hours or '112 secs'",
      },
      {
        decibels: "112dB",
        source: "Live rock band",
        hours: "0.01 hours or '66 secs'",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
