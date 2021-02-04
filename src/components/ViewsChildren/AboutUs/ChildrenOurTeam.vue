<template>
  <v-container class="temp-border pa-1">
    <v-row no-gutters class="temp-border__item pa-3" justify="center">
      <v-expansion-panels accordion inset focusable>
        <v-expansion-panel
          v-for="{ name, bio } in dummyTeamData"
          :key="bio + name"
        >
          <v-expansion-panel-header class="text-h5">
            {{ name }}
            <template v-slot:actions>
              <v-icon v-text="icons.menuDown" color="primary"></v-icon>
            </template>
          </v-expansion-panel-header>

          <v-expansion-panel-content
            v-text="bio"
            class="text-body-1 pa-3"
          ></v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

    <v-pagination v-model="page" :length="4" circle></v-pagination>
  </v-container>
</template>

<script>
import { data as dummyTeamDataLoader } from "../../../data/AboutUsOurTeam.js";
const dummyTeamData = dummyTeamDataLoader();

export default {
  name: "ChildrenOurTeam",
  data: () => ({
    dummyTeamData,
    icons: {
      menuDown: "mdi-menu-down",
    },
    page: 1,
  }),
  computed: {},
  mounted() {
    console.log(dummyTeamData.slice(0, 10));
  },
};
</script>

<style lang="scss" scoped></style>
