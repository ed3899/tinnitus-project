<template>
  <v-container class="temp-border">
    <v-row>
      <v-col>
        <v-img
          class="temp-border"
          src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1000&q=80&h=300"
          max-height="300"
          max-width="1000"
          contain
        ></v-img>
      </v-col>
    </v-row>
    <v-row>Quick Guide</v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuickGuide",
};
</script>

<style lang="scss" scoped>
.temp-border {
  border: 1px solid brown;
}
</style>
