import { useState } from "react";

const numberRegex = /^[0-9]*$/;

interface CustomErrorMessagesType {
  length?: string;
}

type CardBrandType =
  | "Visa"
  | "MasterCard"
  | "Diners"
  | "Amex"
  | "UnionPay"
  | "none";

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

  const formatCardNumber = () => {
    const patterns: Record<CardBrandType, number[]> = {
      Visa: [4, 4, 4, 4],
      MasterCard: [4, 4, 4, 4],
      Diners: [4, 6, 4],
      Amex: [4, 6, 5],
      UnionPay: [4, 4, 4, 4],
      none: [],
    };

    const pattern = patterns[cardBrand()];

    const result = [];
    let start = 0;

    for (const len of pattern) {
      result.push(cardNumber.slice(start, start + len));
      start += len;
    }

    return result;
  };

  const cardBrand = () => {
    return getCardBrand(cardNumber);
  };

  return {
    cardNumber,
    formatCardNumber,
    errorMessage,
    isValid,
    handleCardNumberChange,
    cardBrand,
  };
}
