<template>
  <ValidationProvider
    #default="{errors, valid, changed}"
    :rules="rules"
    :name="name"
    :vid="vid"
    tag="div"
    :mode="interactionMode"
  >
    <v-text-field
      v-model="modelValue"
      @click:clear="modelValue = ''"
      :label="label"
      :error-messages="errors"
      :success-messages="
        valid && changed && successMsgActive ? 'Looking good!' : ''
      "
      :required="required"
      :maxlength="maxlength"
      :counter="counter"
      clearable
      :type="type"
    >
    </v-text-field>
  </ValidationProvider>
</template>

<script>
export default {
  name: "TextField",

  emits: ["update:value"],

  props: {
    value: {
      type: String,
      default: "",
    },

    rules: {
      type: [String, Object],
      default: "",
    },

    name: {
      type: String,
      required: true,
      default: "",
    },

    vid: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      required: true,
    },

    counter: {
      type: Boolean,
      default: true,
    },

    required: {
      type: Boolean,
      default: true,
    },

    interactionMode: {
      type: String,
      default: "eager",
    },

    successMsgActive: {
      type: Boolean,
      default: true,
    },

    maxlength: {
      type: Number,
      default: 25,
    },

    type: {
      type: String,
      default: "text",
    },
  },

  data: () => ({
    modelValue: "",
  }),

  watch: {
    modelValue(val) {
      // allows us to use v-model on our input. //caught by value.sync -
      // go to https://v3.vuejs.org/guide/migration/v-model.html#using-v-bind-sync
      this.$emit("update:value", val);
    },
  },
};
</script>
