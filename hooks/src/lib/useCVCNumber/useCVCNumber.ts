import { useState } from "react";

import useCVCValidation from "./useCVCNumberValidation";

import { INPUT_RULES } from "../constants/card-custom-hook";

const useCVC = () => {
  const [CVCNumber, setCVCNumber] = useState("");
  const { errorState, errorText, validateCVCNumber } = useCVCValidation();

  const handleCVCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const canCVCNumberUpdate = validateCVCNumber(value);

    if (!canCVCNumberUpdate) return;

    setCVCNumber(value);
  };

  const isCVCNumberInputCompleted = CVCNumber.length === INPUT_RULES.validCVCNumberLength;

  return {
    CVCNumber,
    isCVCNumberInputCompleted,
    errorState,
    errorText,
    handleCVCChange,
  };
};

export default useCVC;
