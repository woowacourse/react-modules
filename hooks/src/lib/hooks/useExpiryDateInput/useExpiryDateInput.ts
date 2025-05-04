import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import { CARD_INPUT } from "../constants/cardValidationInfo";

type ExpiryDateInputState = {
  value: string;
  isValid: boolean;
};

interface Props {
  expiryDateState: ExpiryDateInputState[];
  errorMessage: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const INPUT_COUNT = 2;
const MAX_LENGTH = 2;

const useExpiryDateInput = (): Props => {
  const [expiryDateState, setExpiryDateState] = useState<
    ExpiryDateInputState[]
  >(Array.from({ length: INPUT_COUNT }, () => ({ value: "", isValid: true })));

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;

    let isValid = true;
    let errorMessage = "";

    if (validator.hasNaN(inputValue)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.REQUIRE.NUMBER;
    } else if (!validator.hascorrectLength(inputValue, MAX_LENGTH)) {
      isValid = false;
      errorMessage = `숫자 ${CARD_INPUT.MAX_LENGTH.EXPIRE_DATE}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`;
    } else if (!validator.isValidMonth(inputValue) && index === 0) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.EXPIRY.INVALID_MONTH;
    } else if (!validator.isValidYear(inputValue) && index === 1) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.EXPIRY.INVALID_YEAR;
    }

    const updatedState = expiryDateState.map((item, i) =>
      i === index ? { value: inputValue, isValid } : item
    );

    setExpiryDateState(updatedState);
    setErrorMessage(errorMessage);
  };

  return {
    expiryDateState,
    errorMessage,
    handleInputChange,
  };
};

export default useExpiryDateInput;
