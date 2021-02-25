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
      maxlength="25"
      :counter="counter"
      clearable
    >
    </v-text-field>
  </ValidationProvider>
</template>

<script>
export default {
  name: "TextField",

  emits: ["update:modelValue"],

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
