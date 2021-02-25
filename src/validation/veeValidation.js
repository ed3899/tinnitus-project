import { setInteractionMode, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

setInteractionMode("eager");

extend("required", {
  ...required,

  message: "We need your your name!",
});

extend("minmax", {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },

  params: ["min", "max"],

  message(fieldName, { min, max }) {
    return `The ${fieldName} field must be between ${min} and ${max} characters`;
  },
});

extend("max", {
  validate(value, { max }) {
    return value.length <= max;
  },

  params: ["max"],

  message: (fieldName, { max }) => {
    return `The ${fieldName} field must have ${max} characters at most`;
  },
});
