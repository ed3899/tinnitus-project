<template>
  <v-data-iterator
    :items="itemsArray"
    :items-per-page.sync="itemsPerPage"
    :page.sync="page"
    :search="search"
    :footer-props="{ itemsPerPageOptions: itemsPerPageArray }"
  >
    <template #header>
      <v-row no-gutters class="temp-border__item pa-1 ma-1">
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

    <template #default="{items : teamArray}">
      <v-row no-gutters class="temp-border__item pa-1 ma-1">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="{ name, bio } in teamArray"
            :key="name + bio"
          >
            <v-expansion-panel-header :expand-icon="icons.menuDown">
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
export default {
  name: "ExpansionPanelIterator",
  props: {
    itemsArray: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    icons: {
      menuDown: "mdi-menu-down",
    },
    itemsPerPageArray: [3, 5, 8, -1],
    search: "",
    page: 1,
    itemsPerPage: 5,
  }),
};
</script>

<style lang="scss" scoped></style>
