import { useState } from "react";
import { INITIAL_EXPIRE_DATE_STATE } from "./constants";
import { ExpireDateState } from "./types";
import { validateCardExpiryDate } from "./utils";

export const useCardExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState<ExpireDateState>(
    INITIAL_EXPIRE_DATE_STATE
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
