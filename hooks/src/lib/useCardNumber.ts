import { useState } from "react";

const numberRegex = /^[0-9]*$/;

interface CustomErrorMessagesType {
  length?: string;
}

const getCardBrand = (value: string) => {
  if (value[0] === "4") return "Visa";
  return "none";
};

export default function useCardNumber(
  customErrorMessage?: CustomErrorMessagesType
) {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isValid = errorMessage === "";

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (!numberRegex.test(value)) return;

    if (getCardBrand(value) === "Visa") {
      if (value.length > 16) {
        return;
      }

      setCardNumber(value);

      if (value.length < 16) {
        setErrorMessage("16자리를 입력해 주세요.");
        return;
      }

      setErrorMessage("");
    }
  };

  const cardBrand = () => {
    return getCardBrand(cardNumber);
  };

  return {
    cardNumber,
    errorMessage,
    isValid,
    handleCardNumberChange,
    cardBrand,
  };
}
