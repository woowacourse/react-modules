import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

export interface CardNumberFormatType {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

const useCardNumberFormat = () => {
  const [cardNumberFormat, setCardNumberFormat] =
    useState<CardNumberFormatType>({
      first: "",
      second: "",
      third: "",
      fourth: "",
    });

  const resetCardNumberFormat = () => {
    return setCardNumberFormat((prevValue) => {
      return {
        ...prevValue,
        first: "",
        second: "",
        third: "",
        fourth: "",
      };
    });
  };

  const setThreePartCardNumberFormat = (cardNumber: string) => {
    setCardNumberFormat((prevValue) => {
      return {
        ...prevValue,
        first: cardNumber.slice(0, 4),
        second: cardNumber.slice(4, 10),
        third: cardNumber.slice(10),
      };
    });
  };

  const setFourPartCardNumberFormat = (cardNumber: string) => {
    setCardNumberFormat((prevValue) => {
      return {
        ...prevValue,
        first: cardNumber.slice(0, 4),
        second: cardNumber.slice(4, 8),
        third: cardNumber.slice(8, 12),
        fourth: cardNumber.slice(12),
      };
    });
  };

  const updateCardNumberFormat = (cardNumber: string) => {
    resetCardNumberFormat();

    if (
      cardInputValidator.validateDinersCardNumber(cardNumber) ||
      cardInputValidator.validateAMEXCardNumber(cardNumber)
    ) {
      setThreePartCardNumberFormat(cardNumber);
    } else setFourPartCardNumberFormat(cardNumber);
  };

  return { cardNumberFormat, updateCardNumberFormat };
};

export default useCardNumberFormat;
