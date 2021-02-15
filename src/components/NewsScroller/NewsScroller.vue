<template>
  <v-window show-arrows show-arrows-on-hover>
    <!-- Arrows -->
    <template #prev="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </template>
    <template #next="{ on, attrs }">
      <v-btn color="info" v-bind="attrs" v-on="on">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </template>

    <!-- Windows item -->
    <v-window-item v-for="n in 5" :key="`card-${n}`">
      <v-row
        align="center"
        align-content="center"
        justify="space-around"
        class="temp-border__item ma-1 pa-1"
      >
        <v-col
          v-for="x in 3"
          :key="`card-within-${x}`"
          cols="3"
          class="temp-border__item d-flex justify-center"
        >
          <v-card
            color="grey"
            height="14rem"
            width="90%"
            class="temp-border__item d-flex flex-column justify-space-around align-center"
          >
            <h1 style="font-size: 5rem;" class="white--text">Slide {{ n }}</h1>
            <v-card-actions>
              <v-btn>Action</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-window-item>
  </v-window>
</template>

<script>
export default {
  name: "NewsScroller",
};
</script>

<style lang="scss" scoped></style>
