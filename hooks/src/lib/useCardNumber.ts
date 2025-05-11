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

  const number = Number(value.slice(0, 2));
  if (number <= 55 && number >= 51) return "MasterCard";

  if (number === 36) return "Diners";

  if (number === 34 || number === 37) return "Amex";

  const numberr = Number(value.slice(0, 6));
  const numberrr = Number(value.slice(0, 3));
  const numberrrr = Number(value.slice(0, 4));

  if (
    (numberr >= 622126 && numberr <= 622925) ||
    (numberrr >= 624 && numberrr <= 626) ||
    (numberrrr >= 6282 && numberrrr <= 6288)
  )
    return "UnionPay";

  return "none";
};

export default function useCardNumber(
  customErrorMessage?: CustomErrorMessagesType
) {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isValid = !errorMessage;

  const validateCardNumberLength = (
    value: string,
    cardNumberLength: number
  ) => {
    if (value.length > cardNumberLength) {
      return;
    }

    setCardNumber(value);

    if (value.length < cardNumberLength) {
      setErrorMessage(`${cardNumberLength}자리를 입력해 주세요.`);
      return;
    }

    setErrorMessage("");
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (!numberRegex.test(value)) return;

    if (getCardBrand(value) === "Visa") {
      validateCardNumberLength(value, 16);
      return;
    }

    if (getCardBrand(value) === "MasterCard") {
      validateCardNumberLength(value, 16);
      return;
    }

    if (getCardBrand(value) === "Diners") {
      validateCardNumberLength(value, 14);
    }

    if (getCardBrand(value) === "Amex") {
      validateCardNumberLength(value, 16);
    }

    if (getCardBrand(value) === "UnionPay") {
      validateCardNumberLength(value, 16);
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

    return result.join(" ").trim();
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
