<template>
  <v-row>
    <v-col class="text-center" cols="12">
      {{ actualYear }} — <strong>Vuetify</strong>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FooterMain",
  data: () => ({}),
  computed: {
    actualYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped></style>
