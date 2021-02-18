<template>
  <v-breadcrumbs :items="breadcrumbItems">
    <template #item="{ item }">
      <v-breadcrumbs-item
        :disabled="item.disabled"
        :to="{ path: item.to }"
        :exact="item.exact"
        :exact-active-class="weAreOnDarkMode ? 'white--text' : ''"
        class="text-capitalize"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>

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
      breadcrumbItems: state => state.currentBreadcrumbs,
    }),

    weAreOnDarkMode() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>
