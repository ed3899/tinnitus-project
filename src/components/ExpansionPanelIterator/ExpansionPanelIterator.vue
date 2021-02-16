<template>
  <v-data-iterator
    :items="itemsArray"
    :items-per-page.sync="itemsPerPage"
    :page.sync="page"
    :search="search"
    :footer-props="{ itemsPerPageOptions: itemsPerPageArray }"
    :style="[weAreOnDevMode ? brownBorder : '']"
    class="pa-1"
  >
    <!-- Header -->
    <template #header>
      <v-row
        no-gutters
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1"
      >
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
      </v-row>
    </template>

    <!-- Main -->
    <template #default="{items : teamArray}">
      <v-row
        no-gutters
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1 my-1"
      >
        <v-expansion-panels>
          <v-expansion-panel
            v-for="{ name, bio } in teamArray"
            :key="name + bio"
          >
            <v-expansion-panel-header :expand-icon="'mdi-menu-down'">
              {{ name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-text="bio"
              class="pl-5 pb-3"
            ></v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
//% Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

export default {
  name: "ExpansionPanelIterator",
  props: {
    itemsArray: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    itemsPerPageArray: [3, 5, 8, -1],
    search: "",
    page: 1,
    itemsPerPage: 5,
  }),
  computed: {
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
};
</script>
