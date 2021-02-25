<template>
  <ValidationProvider
    #default="{errors, valid, changed}"
    :rules="rules"
    :vid="vid"
    :mode="interactionMode"
    :name="name"
    tag="div"
  >
    <v-radio-group
      v-model="inquiryType"
      :label="label"
      :error-messages="errors"
      :success-messages="
        valid && changed && successMsgActive ? 'Looking good!' : ''
      "
      @change="valueChange"
    >
      <template v-for="{ option } in radioOptions">
        <!-- The rest -->
        <v-row
          no-gutters
          v-if="option != 'other'"
          :key="option"
          align="center"
          :style="[weAreOnDevMode ? greenBorder : '']"
          class="my-1 text-capitalize"
        >
          <v-radio :label="option" :value="option"></v-radio>
        </v-row>

        <!-- Other -->
        <v-row
          no-gutters
          v-else
          :key="option"
          align="center"
          :style="[weAreOnDevMode ? greenBorder : '']"
          class="my-1 text-capitalize"
        >
          <v-radio :label="option" :value="option" class="mr-3"></v-radio>
          <v-text-field
            v-model="inquirySubject"
            :disabled="isOtherTextDisabled"
            dense
            single-line
            clearable
            class="mr-3"
          ></v-text-field>
        </v-row>
      </template>
    </v-radio-group>
  </ValidationProvider>
</template>

<script>
//% Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

export default {
  name: "RadioGroup",

  emits: ["input:inquiry-type", "input:inquiry-subject"],

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

    radioOptions: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    inquiryType: "",

    inquirySubject: "",
  }),

  computed: {
    isOtherTextDisabled() {
      //Disable if is different from other
      const notOther = this.$store.state.formDialog.inquiry.type !== "other";
      return notOther;
    },

    //% Development
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },

  watch: {
    inquiryType(val) {
      // allows us to use v-model on our input.
      this.$emit("input:inquiry-type", val);
    },

    inquirySubject(val) {
      this.$emit("input:inquiry-subject", val);
    },
  },

  methods: {
    valueChange() {
      this.inquirySubject = "";
    },
  },
};
</script>
