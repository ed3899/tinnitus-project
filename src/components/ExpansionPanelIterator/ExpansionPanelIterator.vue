<template>
  <v-data-iterator :items="itemsArray">
    <template #default="{items : teamArray}">
      <v-row no-gutters>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="{ name, bio } in teamArray"
            :key="name + bio"
          >
            <v-expansion-panel-header v-text="name"></v-expansion-panel-header>
            <v-expansion-panel-content v-text="bio"></v-expansion-panel-content>
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
  }),
};
</script>

<style lang="scss" scoped></style>
