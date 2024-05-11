import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import { useState } from "react";
import { expiryDateFormatter } from "../utils/format";
import { InputState } from "../type/cardType";

interface Props {
  ExpiryDateState: InputState;
  handleExpiryDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MIN_MONTH = 1;
const MAX_MONTH = 12;
const MAX_DATE_LENGTH = 5;

const useExpiryDateInput = (): Props => {
  const [expiryDateState, setExpiryDateState] = useState<InputState>({
    value: "",
    isValid: false,
    errorMessage: "",
  });

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = expiryDateFormatter(e.target.value);
    let isValid = true;
    let errorMessage = "";

    const date = value.split("/");

    for (let i = 0; i < date.length; i++) {
      if (!validator.isValidEmptyValue(date[i])) {
        isValid = false;
        errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
      } else if (!validator.isValidDigit(date[i])) {
        isValid = false;
        errorMessage = ERROR_MESSAGE.ONLY_NUMBER;
      } else if (!validator.isValidLength({ value: value, matchedLength: MAX_DATE_LENGTH })) {
        isValid = false;
        errorMessage = ERROR_MESSAGE.INVALID_DATE_LENGTH;
      } else if (!validator.isNumberInRange({ min: MIN_MONTH, max: MAX_MONTH, compareNumber: Number(date[0]) })) {
        isValid = false;
        errorMessage = ERROR_MESSAGE.OUT_OF_RANGE_MONTH;
      }
    }

    setExpiryDateState({
      value: value,
      isValid,
      errorMessage,
    });
  };

  return { ExpiryDateState: expiryDateState, handleExpiryDateChange };
};

export default useExpiryDateInput;
