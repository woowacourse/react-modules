import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";

import useValidations from "./domains/useValidations";
import { makeLengthValidator, numericOnlyValidator } from "./constants/validators";

const validators: Validator[] = [numericOnlyValidator, makeLengthValidator(4)];

const useCardNumber = () => {
  const cardNumberStates: InputState[] = [useInput(""), useInput(""), useInput(""), useInput("")];

  const { inputStates, onChanges, onBlurs } = useValidations(cardNumberStates, validators);

  return { inputStates, onChanges, onBlurs };
};

export default useCardNumber;
