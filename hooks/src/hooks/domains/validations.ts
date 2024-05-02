import { InputState } from "./useInput";
import validation, { Validator } from "./validation";

const validations = (inputStates: InputState[], validators: Validator[]) => {
  for (let i = 0; i < inputStates.length; i++) {
    const matchedValidators = validators.filter(({ index }) => (index !== undefined ? index.includes(i) : true));
    validation(inputStates[i], matchedValidators);
  }
  // const globalValidators = validators.filter(({ type }) => type === "global");
  // if (inputStates.every(({ status }) => status === "blur")) {
  //   for (let i = 0; i < inputStates.length; i++) {
  //     validation(inputStates[i], globalValidators);
  //   }
  // }
};

export default validations;
