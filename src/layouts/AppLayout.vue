<template>
  <v-app id="main-app-layout">
    <nav>
      <slot name="navbar"></slot>
    </nav>
    <v-main>
      <slot name="v-main"></slot>
    </v-main>
    <v-footer>
      <slot name="v-footer"></slot>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AppLayout",
};
</script>

<style lang="sass" scoped></style>
