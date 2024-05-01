import { useState } from "react";

import { INPUT_REGEX } from "../constants/regex";

function useCVCInput(maxLength: number) {
  const [CVCNumber, setCVCNumber] = useState("");
  const [CVCNumberErrorState, setCVCNumberErrorState] = useState({
    isError: false,
    errorMessage: "",
  });

  const updateErrorState = (isValid: boolean) => {
    if (isValid) {
      setCVCNumberErrorState({
        isError: false,
        errorMessage: "",
      });
    } else {
      setCVCNumberErrorState({
        isError: true,
        errorMessage: `${maxLength}자리 숫자로 입력해 주세요.`,
      });
    }
  };

  const handleCVCNumberChange = (value: string) => {
    const isValidCVCNumber = INPUT_REGEX.CVCNumber(maxLength).test(value);

    updateErrorState(isValidCVCNumber);
    setCVCNumber(value);
  };

  return {
    CVCNumber,
    CVCNumberErrorState,
    handleCVCNumberChange,
  };
}

export default useCVCInput;
