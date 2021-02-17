<template>
  <v-container
    fluid
    class="mt-n7 pa-1"
    :style="[weAreOnDevMode ? brownBorder : '']"
  >
    <v-row
      no-gutters
      class="mb-1 pa-1"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-col
        cols="12"
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1 d-flex flex-column justify-space-around align-center"
      >
        <h1 class="background-img">Opps!!!</h1>
        <h3 class="text-h3">
          404 - We couldn't find what you were looking for
        </h3>
      </v-col>
    </v-row>

    <v-row
      no-gutters
      justify="center"
      align-content="center"
      :style="[weAreOnDevMode ? brownBorder : '']"
    >
      <v-btn :to="{ path: routePaths.home.path }" exact x-large color="success">
        go to homepage
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
//% Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

//%Routes
import { routePaths } from "../../router/routes";

export default {
  name: "NotFound404",
  data: () => ({
    routePaths,
  }),
  computed: {
    //% Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
};
</script>

<style lang="scss" scoped>
.background-img {
  background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg")
    repeat;
  background-position: 40% 50%;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 200px;
}
</style>
