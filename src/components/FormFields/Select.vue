<template>
  <ValidationProvider
    #default="{errors, valid, changed}"
    :rules="rules"
    :name="name"
    :vid="vid"
    :mode="interactionMode"
    tag="div"
  >
    <v-select
      v-model="modelValue"
      :items="items"
      :label="label"
      :required="required"
      :success-messages="
        valid && changed && successMsgActive ? 'Looking good!' : ''
      "
      :error-messages="errors"
    ></v-select>
  </ValidationProvider>
</template>

<script>
export default {
  name: "Select",

  emits: ["input"],

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

    items: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    modelValue: "",
  }),

  watch: {
    modelValue(val) {
      // allows us to use v-model on our input.
      this.$emit("input", val);
    },
  },
};
</script>
