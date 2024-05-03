import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import useValidations from "./domains/useValidations";
import { makeLengthBlurValidator, numericOnlyValidator } from "./constants/validators";

export const monthValidator: Validator = {
  validate: (value) => Number(value) >= 1 && Number(value) <= 12,
  errorMessage: "월의 범위는 1~12여야 합니다.",
  index: [0],
};
const validators: Validator[] = [numericOnlyValidator, monthValidator, makeLengthBlurValidator(2)];
const useExpiryDate = () => {
  const expiryDates: InputState[] = [useInput(""), useInput("")];

  const { inputStates, onChanges, onBlurs } = useValidations(expiryDates, validators);

  return { expiryDates: inputStates, onChanges, onBlurs };
};

export default useExpiryDate;
