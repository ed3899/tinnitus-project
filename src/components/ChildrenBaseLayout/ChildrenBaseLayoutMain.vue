<template>
  <v-container fluid class="temp-border">
    <v-row no-gutters class="temp-border__item pa-2">
      <v-img
        height="40vh"
        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ></v-img>
    </v-row>
  </v-container>
</template>

<script>
import { routePaths } from "../../router/routes.js";
import { routeComparator as routeComparatorUtil } from "../../utils/routeComparator.js";

export default {
  name: "ChildrenBaseLayoutMain",
  data: () => ({}),
  computed: {
    actualRouteIsSupport_WhereCanIGetHelp() {
      return routeComparatorUtil(this, "support", "whereCanIGetHelp");
    },
    actualRouteIsSupport_YourStories() {
      return routeComparatorUtil(this, "support", "yourStories");
    },
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss" scoped></style>
