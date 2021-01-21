<template>
  <v-container tag="div" class="temp-container-border mt-n6 " fluid>
    <v-container tag="div" fluid class="ma-0 pa-0">
      <!-- 1st row -->
      <v-row>
        <slot name="carousel"></slot>
      </v-row>
      <!-- 2nd row -->
      <v-row>
        <slot name="router-view"></slot>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "HomeLayout",
};
</script>

<style lang="scss" scoped>
.temp-container-border {
  border: 1px solid blue;
}
</style>
