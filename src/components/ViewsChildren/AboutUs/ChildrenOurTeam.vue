<template>
  <v-container class="temp-border__item pa-1">
    <v-row></v-row>
  </v-container>
</template>

<script>
import { data as dummyTeamDataLoader } from "../../../data/AboutUsOurTeam.js";
const dummyTeamData = dummyTeamDataLoader();

export default {
  name: "ChildrenOurTeam",
  mounted() {
    console.log(dummyTeamData.slice(0, 2));
  },
};
</script>

<style lang="scss" scoped></style>
