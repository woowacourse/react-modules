import { useState, ChangeEvent } from "react";
import { COMMON_ERROR, CVC_NUMBER } from "./constants/validation";
import {
  isValidNumberValue,
  validateCVCLength,
} from "../validators/cardInputValidator";

interface CardCVCInfo {
  cardCVC: string;
  isValid: boolean;
  errorMessages: string[];
}

const useCardCVC = (cardCVCLength: number) => {
  const [cardCVCInfo, setCardCVCInfo] = useState<CardCVCInfo>({
    cardCVC: "",
    isValid: false,
    errorMessages: [],
  });

  const handleCardCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const errorMessages: string[] = [];

    const isValidNumber = isValidNumberValue(value);
    if (!isValidNumber) {
      errorMessages.push(COMMON_ERROR.notNumeric);
    }

    const isValidCVC = validateCVCLength(value, cardCVCLength);
    if (!isValidCVC) {
      errorMessages.push(CVC_NUMBER.errorMessage.inValidLength(cardCVCLength));
    }

    setCardCVCInfo({
      cardCVC: value,
      isValid: isValidNumber && isValidCVC,
      errorMessages,
    });
  };

  return {
    cardCVCInfo,
    handleCardCVC,
  };
};

export default useCardCVC;
