<template>
  <v-container fluid>
    <!-- Nav Bar -->
    <v-app-bar
      app
      color="teal lighten-1"
      height="65"
      elevation="13"
      class="overflow-hidden"
    >
      <v-container class="d-flex mt-2">
        <v-col cols="4" align-self="center">
          <v-app-bar-title v-text="appBar.title"></v-app-bar-title>
        </v-col>

        <v-col cols="8">
          <v-row
            class="d-flex justify-end"
            align-content="center"
            align="center"
            no-gutters
          >
            <v-btn icon class="mr-10">
              <v-icon v-text="appBar.icons.magnify"></v-icon>
            </v-btn>

            <v-btn
              icon
              v-for="({ icon, link }, i) in socialMediaIcons"
              :key="icon + i"
              :href="link"
            >
              <v-icon v-text="icon"></v-icon>
            </v-btn>

            <v-btn
              v-text="appBar.btns.donate"
              rounded
              color="success"
              class="ml-5"
            ></v-btn>

            <v-dialog v-model="appBar.dialog" persistent max-width="600px">
              <template #activator="{ on, attrs }">
                <v-btn
                  v-text="appBar.btns.contact"
                  rounded
                  outlined
                  color="black"
                  class="ml-5"
                  v-bind="attrs"
                  v-on="on"
                ></v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal first name*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="[
                            'Skiing',
                            'Ice hockey',
                            'Soccer',
                            'Basketball',
                            'Hockey',
                            'Reading',
                            'Writing',
                            'Coding',
                            'Basejump',
                          ]"
                          label="Interests"
                          multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="appBar.dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="appBar.dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-container>

      <!-- NavTabs -->

      <template #extension>
        <v-tabs fixed-tabs slider-color="red" show-arrows>
          <!-- Nav Tab Menu -->
          <v-menu
            v-for="({ alias: parentAlias, name, children }, i) in routes"
            :key="i"
            open-on-hover
            offset-y
            rounded="0"
            close-on-content-click
            left
          >
            <template #activator="{ on, attrs }">
              <v-hover #default="{ hover }">
                <v-tab
                  :to="parentAlias"
                  exact-active-class="blue--text"
                  :class="{ 'blue darken-1 rounded-0 white--text': hover }"
                  v-text="name"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  class="ms-3"
                >
                </v-tab>
              </v-hover>
            </template>

            <v-list>
              <v-hover
                v-for="({ name, path: childrenPath }, i) in children"
                :key="i"
                #default="{ hover }"
              >
                <v-list-item
                  :class="{ 'blue darken-1 rounded-0 white--text': hover }"
                  class="align-self-center mr-4"
                  :to="`${parentAlias}/${childrenPath}`"
                >
                  <v-list-item-title v-text="name"></v-list-item-title>
                </v-list-item>
              </v-hover>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-container>
</template>

<script>
//% Vuex
import { mapMutations } from "vuex";
import { routes } from "../../router/routes.js";
import { mapState } from "vuex";

//% Components

export default {
  name: "NavBarMain",
  components: {},
  data: () => ({
    routes,
    appBar: {
      title: "The Tinnitus Community Project",
      icons: {
        magnify: "mdi-magnify",
      },
      btns: {
        donate: "Donate",
        contact: "Contact Us",
      },
      info: {
        title: "Tinnitus Support Team: 0800 018 0527",
        body: [
          {
            text: "Mon-Fri, 9am-5pm",
          },
          {
            text: "Text/SMS: 07537 416841 | Web chat: via chat icon",
          },
          {
            text: "Our forum | Our free e-newsletter",
          },
          { text: "Our office: 0114 250 9933" },
        ],
      },
      dialog: false,
    },
  }),
  methods: {
    openDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    ...mapMutations({
      toggleCentralDrawerState: "toggleDrawerState",
    }),
  },
  watch: {
    //Closing drawer in case an option is clicked
    group: {
      handler(val, oldVal) {
        this.isDrawerOpen = false;
      },
    },
    //Notifying central state of drawer state
    isDrawerOpen: {
      handler(val, oldVal) {
        this.toggleCentralDrawerState();
      },
    },
  },
  computed: {
    ...mapState({
      socialMediaIcons: state => state.socialMediaIcons,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
