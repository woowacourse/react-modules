import { useState, ChangeEvent } from "react";
import { COMMON_ERROR, CARD_NUMBER } from "./constants/validation";

import { PAYMENT_COMPANY } from "./constants/paymentCompany";
import {
  getPaymentCompany,
  getFormattedCardNumbers,
} from "./../validators/paymentCompanyValidator";
import {
  isValidNumberValue,
  validateCardNumberLength,
} from "../validators/cardInputValidator";

interface CardNumberInfo {
  cardNumber: string | undefined;
  paymentCompany: string;
  isValid: boolean;
  maxLength: number;
  errorMessages: string[];
}

const useCardNumbers = () => {
  const [cardNumberInfo, setCardNumberInfo] = useState<CardNumberInfo>({
    cardNumber: "",
    isValid: false,
    paymentCompany: PAYMENT_COMPANY.NONE.name,
    maxLength:
      PAYMENT_COMPANY.NONE.length + PAYMENT_COMPANY.NONE.whiteSpaceCount,
    errorMessages: [],
  });

  const onChangeCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const pureCardNumbers = value.replace(/\s+/g, "");
    const errorMessages: string[] = [];

    const isValidNumber = isValidNumberValue(pureCardNumbers);
    if (!isValidNumber) {
      errorMessages.push(COMMON_ERROR.notNumeric);
    }

    const paymentCompany = getPaymentCompany(pureCardNumbers);

    const formattedCardNumbers = getFormattedCardNumbers(
      paymentCompany,
      pureCardNumbers
    );

    const cardNumberLength = PAYMENT_COMPANY[paymentCompany].length;
    const isValidCardNumberLength = validateCardNumberLength(
      pureCardNumbers,
      cardNumberLength
    );
    if (!isValidCardNumberLength) {
      errorMessages.push(
        CARD_NUMBER.errorMessage.invalidLength(paymentCompany, cardNumberLength)
      );
    }

    setCardNumberInfo({
      cardNumber: formattedCardNumbers?.join(" "),
      isValid: isValidNumber && isValidCardNumberLength,
      paymentCompany,
      maxLength:
        cardNumberLength + PAYMENT_COMPANY[paymentCompany].whiteSpaceCount,
      errorMessages,
    });
  };

  return {
    cardNumberInfo,
    onChangeCardNumbers: onChangeCardNumbers,
  };
};

export default useCardNumbers;
