<template>
  <ValidationProvider
    #default="{errors, valid, changed}"
    :rules="rules"
    :name="name"
    :vid="vid"
    :mode="interactionMode"
    tag="div"
  >
    <v-textarea
      v-model="modelValue"
      :counter="maxCharacters"
      :label="label"
      :success-messages="
        valid && changed && successMsgActive ? 'Looking good!' : ''
      "
      :error-messages="errors"
      :required="required"
      outlined
      filled
      auto-grow
    ></v-textarea>
  </ValidationProvider>
</template>

<script>
export default {
  name: "TextArea",

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

    maxCharacters: {
      type: Number,
      default: 1000,
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
