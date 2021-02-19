<template>
  <v-card
    :width="width"
    :height="height"
    :elevation="elevation"
    :class="[
      $vuetify.breakpoint.smAndDown
        ? 'd-none'
        : 'd-flex flex-column justify-space-between align-center pa-2',
    ]"
  >
    <v-img
      height="40%"
      width="80%"
      src="https://images.unsplash.com/photo-1588779481061-1706804c9556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=354&q=80"
      position="center center"
    ></v-img>

    <v-card-actions class="mt-3">
      <v-btn rounded outlined class="text-uppercase">Donate now</v-btn>
    </v-card-actions>

    <v-card-text class="align-self-left"
      >TOGETHER WE CAN SILENCE TINNITUS. The Covid-19 pandemic has made tinnitus
      worse for nearly half of UK sufferers. We urgently need your help to
      support more people living with tinnitus.</v-card-text
    >
  </v-card>
</template>

<script>
export default {
  name: "DonateNow",

  props: {
    height: {
      type: [String, Number],
      required: true,
    },
    width: {
      type: [String, Number],
      required: true,
    },
    elevation: {
      type: Number,
      required: true,
    },
  },
};
</script>
