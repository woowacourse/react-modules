import { InputState } from "./useInput";
import validation, { Validator } from "./validation";

const validations = (inputStates: InputState[], validators: Validator[]) => {
  inputStates.forEach((inputState, i) => {
    const matchedValidators = validators.filter(({ index: v_idx }) => (v_idx !== undefined ? v_idx.includes(i) : true));
    validation(inputState, matchedValidators);
  });
};

export default validations;
