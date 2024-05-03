import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import useValidation from "./domains/useValidation";
import { makeMaxLengthValidator, noConsecutiveSpaceValidator, upperCaseOnlyValidator } from "./constants/validators";

const validators: Validator[] = [upperCaseOnlyValidator, noConsecutiveSpaceValidator, makeMaxLengthValidator(30)];
const useOwnerName = () => {
  const ownerName: InputState = useInput("");

  const { inputState, onChange, onBlur } = useValidation(ownerName, validators);

  return { inputState, onChange, onBlur };
};

export default useOwnerName;
