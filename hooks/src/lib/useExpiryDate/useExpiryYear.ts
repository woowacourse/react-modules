import { useState } from "react";
import useExpiryYearValidation from "./useExpiryYearValidation";

const useExpiryYear = () => {
  const [expiryYear, setExpiryYear] = useState("");

  const { errorState, setErrorState, errorText, validateExpiryYear } =
    useExpiryYearValidation();

  const handleExpiryYearChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const canUpdate = validateExpiryYear(value);

    if (!canUpdate) return;

    setExpiryYear(value);
  };

  return {
    expiryYear,
    errorState,
    setErrorState,
    errorText,
    handleExpiryYearChange,
  };
};

export default useExpiryYear;
