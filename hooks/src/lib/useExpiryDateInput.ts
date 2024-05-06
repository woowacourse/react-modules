import { useState } from "react";
import useExpiryDateValidation from "./validation/useExpiryDateValidation";

type CardExpiryName = "month" | "year";

const useCardExpiryDateInput = () => {
  const { expiryDateValidation, isExpiryDateValid } = useExpiryDateValidation();

  const [expiryDate, setExpiryDate] = useState({
    value: {
      month: "",
      year: "",
    },
    ...expiryDateValidation,
  });

  const handleExpiryDateChange = (value: string, name: CardExpiryName) => {
    if (isExpiryDateValid(value, name)) return;
    setExpiryDate({
      errorMessage: { ...expiryDate.value, [name]: "" },
      isError: { ...expiryDate.isError, [name]: false },
      value: { ...expiryDate.value, [name]: value },
    });
  };

  return { expiryDate, handleExpiryDateChange };
};

export default useCardExpiryDateInput;
