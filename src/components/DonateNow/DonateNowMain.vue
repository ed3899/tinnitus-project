<template>
  <v-card
    :width="width"
    :height="height"
    class="temp-border__item d-flex flex-column justify-space-between align-center pa-2"
  >
    <v-img
      height="40%"
      width="80%"
      src="https://images.unsplash.com/photo-1588779481061-1706804c9556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=354&q=80"
      position="center center"
    ></v-img>

    <v-card-actions class="mt-3">
      <v-btn v-text="cardBtn" rounded outlined class="text-uppercase"></v-btn>
    </v-card-actions>

    <v-card-text v-text="cardText" class="align-self-left"></v-card-text>
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
  },
  data: () => ({
    cardBtn: "Donate now",
    cardText: `TOGETHER WE CAN SILENCE TINNITUS. The Covid-19 pandemic has made tinnitus
      worse for nearly half of UK sufferers. We urgently need your help to
      support more people living with tinnitus.`,
  }),
};
</script>

<style lang="scss" scoped></style>
