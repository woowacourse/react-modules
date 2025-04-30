import { useState } from "react";
import { INITIAL_EXPIRY_DATE_STATE } from "./constants";
import { ExpireDateState } from "./types";
import { validateCardExpiryDate } from "./utils";

const useCardExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState<ExpireDateState>(
    INITIAL_EXPIRY_DATE_STATE
  );

  const handleExpiryChange = (value: string) => {
    if (value.length > 4) {
      return;
    }

    setExpiryDate({ value });
  };

  return {
    expiryDate,
    handleExpiryChange,
    errorState: validateCardExpiryDate(expiryDate.value),
  };
};

export default useCardExpiryDate;
