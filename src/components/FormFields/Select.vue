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
      :name="netlifyFormInputName"
    ></v-select>
  </ValidationProvider>
</template>

<script>
export default {
  name: "Select",

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

    "netlify-form-input-name": {
      type: String,
      required: true,
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
