import { InputState } from "./useInput";
import { Validator } from "./validation";
import useValidations from "./useValidations";

const useValidation = (inputState: InputState, validators: Validator[]) => {
  const { inputStates, onChanges, onBlurs } = useValidations([inputState], validators);
  return { inputState: inputStates[0], onChange: onChanges[0], onBlur: onBlurs[0] };
};

export default useValidation;
