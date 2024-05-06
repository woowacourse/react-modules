import { useState, ChangeEvent } from "react";
import { validateCardCompany } from "../validators/cardInputValidator";
import { CARD_COMPANY } from "./constants/validation";

interface CardCompanyInfo {
  cardCompany: string;
  isValid: boolean;
  errorMessages: string[];
}

const useCardCompany = () => {
  const [cardCompanyInfo, setCardCompanyInfo] = useState<CardCompanyInfo>({
    cardCompany: "",
    isValid: false,
    errorMessages: [],
  });

  const handleCardCompany = (
    event: ChangeEvent<HTMLSelectElement>,
    defaultValue: string
  ) => {
    const { value } = event.target;

    const isValidSelection = validateCardCompany(value, defaultValue);
    const errorMessages = isValidSelection
      ? []
      : [CARD_COMPANY.errorMessage.notSelected];

    setCardCompanyInfo({
      cardCompany: value,
      isValid: isValidSelection,
      errorMessages,
    });
  };

  return {
    cardCompanyInfo,
    handleCardCompany,
  };
};

export default useCardCompany;
