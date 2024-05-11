import { useState } from "react";

import useExpiryMonthValidation from "./useExpiryMonthValidation";

const useExpiryMonth = () => {
  const [expiryMonth, setExpiryMonth] = useState("");

  const { errorState, setErrorState, errorText, validateExpiryMonth } =
    useExpiryMonthValidation();

  const handleExpiryMonthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const canUpdate = validateExpiryMonth(value);

    if (!canUpdate) return;

    setExpiryMonth(value);
  };

  return {
    expiryMonth,
    errorState,
    setErrorState,
    errorText,
    handleExpiryMonthChange,
  };
};

export default useExpiryMonth;
