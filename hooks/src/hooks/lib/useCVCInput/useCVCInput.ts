import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import { InputState } from "../type/cardType";

interface Props {
  CVCState: InputState;
  handleCVCChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MAX_CVC_LENGTH = 3;

const useCVCInput = (): Props => {
  const [cvcState, setCVCState] = useState<InputState>({
    value: "",
    isValid: false,
    errorMessage: "",
  });

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let isValid = true;
    let errorMessage = "";

    if (!validator.isValidEmptyValue(value)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
    } else if (!validator.isValidDigit(value)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.ONLY_NUMBER;
    } else if (!validator.isValidLength({ value: value, matchedLength: MAX_CVC_LENGTH })) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.INVALID_CVC_LENGTH;
    }

    setCVCState({
      value: value,
      isValid,
      errorMessage,
    });
  };

  return { CVCState: cvcState, handleCVCChange };
};

export default useCVCInput;
