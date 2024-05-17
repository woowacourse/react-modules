import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";
import { CONDITION } from "../constants/cardCustomHook";

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
    return setCardNumberFormat(() => {
      return {
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
        first: cardNumber.slice(
          CONDITION.threePartFirstStartIndex,
          CONDITION.threePartSecondStartIndex
        ),
        second: cardNumber.slice(
          CONDITION.threePartSecondStartIndex,
          CONDITION.threePartThirdStartIndex
        ),
        third: cardNumber.slice(CONDITION.threePartThirdStartIndex),
      };
    });
  };

  const setFourPartCardNumberFormat = (cardNumber: string) => {
    setCardNumberFormat(() => {
      return {
        first: cardNumber.slice(
          CONDITION.fourPartFirstStartIndex,
          CONDITION.fourPartSecondStartIndex
        ),
        second: cardNumber.slice(
          CONDITION.fourPartSecondStartIndex,
          CONDITION.fourPartThirdStartIndex
        ),
        third: cardNumber.slice(
          CONDITION.fourPartThirdStartIndex,
          CONDITION.fourPartFourthStartIndex
        ),
        fourth: cardNumber.slice(CONDITION.fourPartFourthStartIndex),
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
