<template>
  <v-breadcrumbs :items="breadcrumbItems">
    <template #divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Breadcrumbs",
  computed: {
    ...mapState({
      breadcrumbItems: state => state.CentralState.currentBreadcrumbs,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
