<template>
  <v-navigation-drawer v-model="value" app temporary width="75vw">
    <v-list nav>
      <!-- Parent -->
      <v-list-group
        v-for="({ path: parentPath, name, icon: parentIcon, children },
        i) in normalizedRoutes"
        :key="name + parentPath + i"
        no-action
        @click="goToRoute(parentPath)"
        :prepend-icon="parentIcon"
        :value="currentRoute === parentPath"
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title v-text="name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="({ path: childPath, name }, i) in children"
          :key="childPath + name + i"
          :to="{ path: `${parentPath}/${childPath}` }"
          exact
          exact-active-class="teal accent-1 black--text"
        >
          <v-list-item-content>
            <v-list-item-title
              v-text="name"
              class="text-capitalize"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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

  data: () => ({}),

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

    currentRoute() {
      return this.$route.path;
    },
  },

  methods: {
    goToRoute(parentPath) {
      this.$emit("update:modelValue", false);
      if (this.$route.path === parentPath) {
        return;
      } else {
        this.$router.push({ path: parentPath });
      }
    },
  },
};
</script>
