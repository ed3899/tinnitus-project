<template>
  <v-data-iterator
    :items="itemsArray"
    :items-per-page.sync="itemsPerPage"
    :page.sync="page"
    :search="search"
    hide-default-footer
    :style="[weAreOnDevMode ? brownBorder : '']"
    class="ma-1 pa-1"
  >
    <!-- Data header -->
    <template #header>
      <v-row
        no-gutters
        align="center"
        justify="center"
        :style="[weAreOnDevMode ? brownBorder : '']"
        class="temp-border__item ma-1 pa-0"
      >
        <v-toolbar>
          <v-text-field
            v-model="search"
            clearable
            flat
            hide-details
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
        </v-toolbar>
      </v-row>
    </template>

    <!-- Data main-->
    <template #default="{items}">
      <v-row
        no-gutters
        justify="space-around"
        align-content="space-around"
        :style="[weAreOnDevMode ? brownBorder : '']"
        class="ma-1 pa-1"
      >
        <v-col
          v-for="item in items"
          :key="item.title + item.body"
          cols="5"
          class="ma-1 pa-1"
          :style="[weAreOnDevMode ? greenBorder : '']"
        >
          <!-- Card -->
          <v-hover #default="{hover}">
            <v-card
              hover
              shaped
              class="d-flex flex-column"
              :style="[weAreOnDevMode ? greenBorder : '']"
            >
              <v-img
                height="200px"
                :src="item.img"
                class="flex-grow-0 flex-shrink-1"
              >
              </v-img>

              <!-- Fixed text wrapping problem, done with word-break on css -->
              <v-card-title
                v-text="item.title"
                class="card-title-format text-h6 flex-grow-1 flex-shrink-0"
              >
              </v-card-title>

              <v-card-text v-text="item.body" class="flex-grow-1 flex-shrink-0">
              </v-card-text>

              <!-- Card transition -->
              <v-expand-transition>
                <v-card
                  v-if="hover"
                  shaped
                  class="d-flex align-center transition-fast-in-fast-out orange darken-2 v-card--reveal"
                >
                  <v-card-text class="pa-1 text-center">
                    <h3
                      v-text="btn.readMore"
                      class="text-h3 text-capitalize white--text"
                    ></h3>
                  </v-card-text>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-hover>

          <v-divider></v-divider>
        </v-col>
      </v-row>
    </template>

    <!-- Data footer -->
    <template #footer>
      <v-row
        no-gutters
        class="ma-1 pa-1"
        align="center"
        justify="center"
        :style="[weAreOnDevMode ? brownBorder : '']"
      >
        <span>Items per page</span>

        <!-- Menu -->
        <v-menu offset-y>
          <!-- Items p/page -->
          <template #activator="{on, attrs}">
            <v-btn text color="primary" v-bind="attrs" v-on="on" class="ml-2">
              {{ itemsPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(number, i) in itemsPerPageArray"
              :key="number * i + i"
              @click="updateItemsPerPage(number)"
            >
              <v-list-item-title v-text="number"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <!-- Page btns -->
        <span class="mr-4 grey--text">
          Page {{ page }} of {{ numberOfPages }}
        </span>

        <v-btn
          fab
          outlined
          dark
          color="blue darken-3"
          class="mr-1"
          @click="formerPage"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn
          fab
          outlined
          dark
          color="blue darken-3"
          class="ml-1"
          @click="nextPage"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
//% Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

export default {
  name: "CardIteratorMain",
  props: {
    itemsArray: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    search: "",
    itemsPerPageArray: [3, 5, 8],
    itemsPerPage: 3,
    page: 1,
    btn: {
      readMore: "read more",
    },
  }),
  computed: {
    storyKeys() {
      //Pick a random story. In this case the first one since all of them should share the same structure
      return Object.keys(this.itemsArray[0]);
    },
    numberOfPages() {
      return Math.ceil(this.itemsArray.length / this.itemsPerPage);
    },

    //% Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
  methods: {
    nextPage() {
      const thereIsANextPage = this.page + 1 <= this.numberOfPages;
      if (thereIsANextPage) this.page += 1;
    },
    formerPage() {
      const thereIsAPreviousPage = this.page - 1 >= 1;
      if (thereIsAPreviousPage) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-title-format {
  word-break: normal;
}

.v-card--reveal {
  bottom: 0;
  opacity: 0.8 !important;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
