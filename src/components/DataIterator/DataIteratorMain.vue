<template>
  <v-data-iterator
    :items="stories"
    :items-per-page.sync="storiesPerPage"
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
          v-for="story in items"
          :key="story.name + story.content"
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
              :src="story.img"
              class="flex-grow-0 flex-shrink-1"
            >
            </v-img>

            <!-- Fix text wrapping problem, done with word-break on css -->
            <v-card-title
              v-text="story.name"
              class="card-title-format text-h6 flex-grow-1 flex-shrink-0"
            >
            </v-card-title>

            <v-card-text
              v-text="story.content"
              class="flex-grow-1 flex-shrink-0"
            >
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
              {{ storiesPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(number, i) in storiesPerPageArray"
              :key="number * i + i"
              @click="updateStoriesPerPage(number)"
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
  name: "DataIteratorMain",
  data: () => ({
    search: "",
    //Load the stories to Vuex
    //Add props
    stories: [
      {
        name: "We have much to be thankful for",
        content: `The current lockdown is not Jim's first experience of one. He also knows what it's like to be nursed in isolation with a virus. Read his story here.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `I began to take control`,
        content: `Jenny contacted us wanting to share what happened to her on a night out six years ago, when she forgot to take and wear earplugs. She hoped sharing her story would encourage more people to use earplugs when we are able to get back to clubs, gigs and festivals.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `My life with Tinnitus`,
        content: `Read our blog, written by Amy, aged 11, who has tinnitus and is supporting Tinnitus Week.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `Amy’s brave tinnitus battle`,
        content: `Amy McLaughlin was diagnosed with tinnitus at eight years old. Here, her mum, explains the impact living with tinnitus has had on Amy and their family life.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `"Because tinnitus is an unseen injury, it doesn’t get the attention it warrants."`,
        content: `Harris Tatakis was blown up in April 2007 by an IED and suffered a serious injury. He explains how the tinnitus caused by the explosion impacted his life.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `"Keep trying to do the things you enjoy doing"`,
        content: `Adam has always suffered from ear problems, including tinnitus. Now he shares his tips for living successfully with the condition.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `"People can’t believe George has tinnitus"`,
        content: `George aged 10, was diagnosed with tinnitus and is now finding school much easier thanks to coping techniques. Here his mum Niki shares their story.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `My life with Tinnitus`,
        content: `12-year-old Isabel shares her experience of tinnitus. Tinnitus can affect the daily lives of both adults and children. Read Isabel's experience with tinnitus here.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `Gordon's story`,
        content: `Gordon Wright got in touch to share the story of his tinnitus, and we were keen to find out more about his rock and roll days. Read the story here.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `"I am desperate to do whatever I can to raise awareness"`,
        content: `Sarah Love reveals the enormous impact tinnitus has had on her everyday life and why she is driven to campaign for tinnitus awareness. Read more here.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `"I always wear earplugs"`,
        content: `Hampus lives and works in Mumbai, trying to big in Bollywood. How does he cope with his tinnitus and the noise of the city?`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
      {
        name: `We have been trained for this.`,
        content: `Sarah Richardson shares with the BTA how her experience of managing tinnitus has equipped for coping with Covid-19 isolation.`,
        img: `https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80`,
      },
    ],
    storiesPerPageArray: [3, 5, 8],
    storiesPerPage: 3,
    page: 1,
    btn: {
      readMore: "read more",
    },
  }),
  computed: {
    storyKeys() {
      //Pick a random story. In this case the first one since all of them should share the same structure
      return Object.keys(this.stories[0]);
    },
    numberOfPages() {
      return Math.ceil(this.stories.length / this.storiesPerPage);
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
    updateStoriesPerPage(number) {
      this.storiesPerPage = number;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-title-format {
  word-break: normal;
}
</style>
