import { useState } from "react";

import { INPUT_REGEX } from "../../constants/regex";
import { ERROR_MESSAGES } from "../../constants/errorMessage";

function useCVCNumber(maxLength: number) {
  const [CVCNumber, setCVCNumber] = useState("");
  const [CVCNumberError, setCVCNumberError] = useState(false);

  const handleCVCNumberChange = (value: string) => {
    const isValidCVC = INPUT_REGEX.CVCNumber(maxLength).test(value);
    setCVCNumberError(!isValidCVC);

    setCVCNumber(value);
  };

  const getCVCNumberErrorMessage = () => {
    return CVCNumberError
      ? ERROR_MESSAGES.maxLengthNumber(maxLength)
      : undefined;
  };

  return {
    CVCNumber,
    CVCNumberError,
    getCVCNumberErrorMessage,
    handleCVCNumberChange,
  };
}

export default useCVCNumber;
