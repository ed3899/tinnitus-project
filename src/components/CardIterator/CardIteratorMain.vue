<template>
  <v-data-iterator
    :items="itemsArray"
    :items-per-page.sync="itemsPerPage"
    :page.sync="page"
    :search="search"
    hide-default-footer
    class="temp-border__item ma-1 pa-1"
  >
    <!-- Data header -->
    <template #header>
      <v-row
        no-gutters
        class="temp-border__item ma-1 pa-0"
        align="center"
        justify="center"
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
        class="temp-border__item ma-1 pa-1"
        justify="space-around"
        align-content="space-around"
      >
        <v-col
          v-for="item in items"
          :key="item.title + item.body"
          cols="5"
          class="temp-border__item ma-1 pa-1"
        >
          <v-card
            rounded="xl"
            hover
            class="temp-border__item pa-1 d-flex flex-column"
          >
            <v-img
              height="200px"
              :src="item.img"
              class="flex-grow-0 flex-shrink-1"
            >
            </v-img>

            <!-- Fix text wrapping problem, done with word-break on css -->
            <v-card-title
              v-text="item.title"
              class="card-title-format text-h6 flex-grow-1 flex-shrink-0"
            >
            </v-card-title>

            <v-card-text v-text="item.body" class="flex-grow-1 flex-shrink-0">
            </v-card-text>
          </v-card>

          <v-divider></v-divider>
        </v-col>
      </v-row>
    </template>

    <!-- Data footer -->
    <template #footer>
      <v-row
        no-gutters
        class="temp-border__item ma-1 pa-1"
        align="center"
        justify="center"
      >
        <span>Items per page</span>

        <!-- Data footer menu -->
        <v-menu offset-y>
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
</style>
