<template>
  <v-container :fluid="true">
    <!-- 1stRow -->
    <v-row class="temp-border">
      <!-- 1stCol -->
      <v-col cols="4 d-flex flex-column">
        <v-card>
          <v-card-title class="text-h5">
            {{ firstRow.firstCol.vCardTitle }}
          </v-card-title>

          <v-card-text>
            <p
              v-for="{ text } in firstRow.firstCol.vCardContent"
              :key="text"
              v-text="text"
            ></p>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="teal accent-4" @click="revealCardToggle">
              {{ firstRow.firstCol.vCardButtons.learn }}
            </v-btn>
          </v-card-actions>

          <!-- Expand -->
          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <h1 class="display-1 text--primary">
                  {{ firstRow.firstCol.vCardRevealContent.header }}
                </h1>
                <p>
                  {{ firstRow.firstCol.vCardRevealContent.body }}
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="revealCardToggle">
                  {{ firstRow.firstCol.vCardButtons.close }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>

      <!-- 2ndCol -->
      <v-col cols="4">
        <v-card>
          <v-card-title class="text-h5">Useful links</v-card-title>
          <v-card-text>
            <v-list rounded>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="{ text, link } in firstRow.secondCol.vCardItems"
                  :key="text"
                  :href="link"
                  dense
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="text-center temp-border__item" cols="4">
        <v-row>
          <v-card>
            <v-card-text>
              {{ firstRow.thirdCol.subRow1.vCardText }}</v-card-text
            >
            <v-card-actions>
              <v-list-item>
                <v-row align="center" justify="center">
                  <v-btn icon color="blue">
                    <v-icon class="mr-1">
                      mdi-facebook
                    </v-icon>
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-row>

        <v-row>
          {{ actualYear }} —
          <span class="text-subtitle-2">Tinnitus Project</span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FooterMain",
  data: () => ({
    reveal: false,
    firstRow: {
      firstCol: {
        vCardTitle: "Contact Us",
        vCardContent: [
          { text: "Helpline: 0800 018 0527" },
          {
            text: "example@tinnitus.org",
          },
          {
            text: "Office: 0114 250 9933",
          },
          {
            text: "Text/SMS: 07537 416841",
          },
        ],
        vCardRevealContent: {
          header: "Tinnitus",
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium blanditiis accusamus aut dolores incidunt a fuga eos
              veniam esse aspernatur quibusdam consequuntur, quas harum pariatur
              iusto dicta. Quos, fugit magnam?`,
        },
        vCardButtons: {
          learn: "Learn More",
          close: "Close",
        },
      },
      secondCol: {
        vCardItems: [
          {
            text: "Sitemap",
            link: "https://www.google.com",
          },
          {
            text: "Accessibility",
            link: "example.com",
          },
          {
            text: "Terms and conditions",
            link: "example.com",
          },
          {
            text: "Policies and procedures",
            link: "example.com",
          },
          {
            text: "Information library",
            link: "example.com",
          },
          {
            text: "Forum",
            link: "example.com",
          },
          {
            text: "Your contact preferences",
            link: "example.com",
          },
          {
            text: "Press contact",
            link: "example.com",
          },
        ],
      },
      thirdCol: {
        subRow1: {
          vCardText: `Material on this site is for information purposes only and is not a substitute for medical advice - you should always see your doctor and/or medical professional.`,
        },
      },
    },
  }),
  computed: {
    actualYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    revealCardToggle() {
      this.reveal = !this.reveal;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
