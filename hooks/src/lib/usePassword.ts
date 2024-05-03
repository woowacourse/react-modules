import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import useValidation from "./domains/useValidation";
import { makeLengthBlurValidator, numericOnlyValidator } from "./constants/validators";

const validators: Validator[] = [numericOnlyValidator, makeLengthBlurValidator(4)];

const usePassword = () => {
  const password: InputState = useInput("");

  const { inputState, onChange, onBlur } = useValidation(password, validators);

  return { inputState, onChange, onBlur };
};

export default usePassword;
