<template>
  <v-navigation-drawer v-model="value" height="70%" app temporary>
    <v-list nav dense>
      <v-list-group
        v-for="({ name, path }, i) in normalizedRoutes"
        :key="name + path + i"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title v-text="name"></v-list-item-title>
        </template>

        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
//%Router
import { routes } from "../../router/routes";

export default {
  name: "NavBarNavDrawer",

  props: ["modelValue"],
  emits: ["update:modelValue"],

  data: () => ({
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
  }),

  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },

    normalizedRoutes() {
      return routes.filter(({ name }) => name !== "NotFound404");
    },
  },
};
</script>
