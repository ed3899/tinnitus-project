import { setInteractionMode, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "We need your name!",
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
