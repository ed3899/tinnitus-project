<template>
  <v-container class="temp-border pa-1">
    <v-row no-gutters class="temp-border__item pa-3 ma-3" justify="center">
      <v-expansion-panels accordion inset focusable>
        <v-expansion-panel
          v-for="{ name, bio } in paginatedTeamMembers"
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

    <v-row no-gutters class="temp-border__item pa-3 ma-3" justify="center">
      <v-col
        cols="12"
        class="temp-border__item pa-3 ma-3 d-flex flex-column align-center"
      >
        <v-pagination
          v-model="teamPage"
          :length="teamPaginationLength"
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        >
        </v-pagination>
        <v-subheader v-text="totalMembers"></v-subheader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { data as dummyTeamDataLoader } from "../../../data/AboutUsOurTeam.js";

export default {
  name: "ChildrenOurTeam",
  data: () => ({
    icons: {
      menuDown: "mdi-menu-down",
    },
    teamPage: 1,
    teamMembersPerPage: 10,
  }),
  computed: {
    paginatedTeamMembers() {
      //Cloning the array to avoid mutation
      const clonedTeam = [...dummyTeamDataLoader()];
      return clonedTeam.slice(this.paginationBase, this.paginationCut);
    },
    teamPaginationLength() {
      //Cloning the array to avoid mutation
      const clonedTeam = [...dummyTeamDataLoader()];
      return Math.ceil(clonedTeam.length / this.teamMembersPerPage);
    },
    paginationBase() {
      return this.paginationCut - this.teamMembersPerPage;
    },
    paginationCut() {
      return this.teamPage * this.teamMembersPerPage;
    },
    totalMembers() {
      const clonedTeam = [...dummyTeamDataLoader()];
      return `Our current total members: ${clonedTeam.length}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
