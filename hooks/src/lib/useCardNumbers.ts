import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";

import useValidations from "./domains/useValidations";
import { makeLengthBlurValidator, numericOnlyValidator } from "./constants/validators";

const validators: Validator[] = [numericOnlyValidator, makeLengthBlurValidator(4)];

const useCardNumbers = () => {
  const cardNumberStates: InputState[] = [useInput(""), useInput(""), useInput(""), useInput("")];

  const { inputStates, onChanges, onBlurs } = useValidations(cardNumberStates, validators);

  return { inputStates, onChanges, onBlurs };
};

export default useCardNumbers;
