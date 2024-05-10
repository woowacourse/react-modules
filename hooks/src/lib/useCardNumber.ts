import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";

import { makeLengthBlurValidator, numericOnlyValidator } from "./constants/validators";
import useValidation from "./domains/useValidation";
import getCardBrand from "./domains/getCardBrand";
import getCardFormat from "./domains/getCardFormat";

const validators: Validator[] = [numericOnlyValidator, makeLengthBlurValidator(16)];

const useCardNumber = () => {
  const cardNumberState: InputState = useInput("");

  const { inputState, onChange, onBlur } = useValidation(cardNumberState, validators);
  const cardBrand = getCardBrand(inputState.value);
  const formattedValue = getCardFormat(inputState.value, cardBrand);

  return { inputState, cardBrand, formattedValue, onChange, onBlur };
};

export default useCardNumber;
