import { InputState } from "./useInput";
import validation, { Validator } from "./validation";

const validations = (inputStates: InputState[], validators: Validator[]) => {
  for (let i = 0; i < inputStates.length; i++) {
    const matchedValidators = validators.filter(({ index }) => (index !== undefined ? index.includes(i) : true));
    validation(inputStates[i], matchedValidators);
  }
};

export default validations;
