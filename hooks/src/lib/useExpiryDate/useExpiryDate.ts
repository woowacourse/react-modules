import { useState } from "react";

import useExpiryDateValidation from "./useExpiryDateValidation";

import { ExpiryDateKeys } from "../types/card-custom-hook";

const useExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState<Record<ExpiryDateKeys, string>>({
    month: "",
    year: "",
  });

  const { errorState, errorText, validateExpiryDate } =
    useExpiryDateValidation();

  const updateExpiryDate = (name: string, value: string) => {
    setExpiryDate((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const canUpdate = validateExpiryDate(name, value, expiryDate);

    if (!canUpdate) return;

    updateExpiryDate(name, value);
  };

  const isExpiryDateCompleted = Object.values(expiryDate).every(
    (cardNumber) => cardNumber.length === 2
  );

  return {
    expiryDate,
    errorState,
    isExpiryDateCompleted,
    errorText,
    handleExpiryDateChange,
  };
};

export default useExpiryDate;
