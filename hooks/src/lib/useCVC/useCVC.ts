import { useState } from "react";
import useCVCValidation from "./useCVCValidation";

const useCVC = () => {
  const [cvc, setCVC] = useState("");
  const { errorState, errorText, validateCVC } = useCVCValidation();

  const handleCVCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const canUpdate = validateCVC(value);

    if (!canUpdate) return;

    setCVC(value);
  };

  return {
    cvc,
    errorState,
    errorText,
    handleCVCChange,
  };
};

export default useCVC;
