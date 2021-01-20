<template>
  <v-container fluid>
    <v-row><h1>This is an about page</h1></v-row>
    <v-row>
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutUsView",
};
</script>

<style lang="scss" scoped></style>
