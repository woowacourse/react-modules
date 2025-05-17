import { useState } from "react";
import { CardInputError } from "../types/cardErrorType";

export const ERROR_MESSAGE = {
  EMPTY_CARD_COMPANY: "카드사를 선택해주세요.",
};

const useCardCompany = (validCardCompanies: string[] = []) => {
  const [cardCompany, setCardCompany] = useState("");
  const [validationResult, setValidationResult] = useState<CardInputError>({
    errorState: false,
    message: "",
  });

  const validate = (cardCompany: string) => {
    if (cardCompany.length === 0) {
      setValidationResult({
        errorState: true,
        message: ERROR_MESSAGE.EMPTY_CARD_COMPANY,
      });
      return;
    }

    if (!validCardCompanies.includes(cardCompany)) {
      setValidationResult({
        errorState: true,
        message: "유효하지 않은 카드사입니다.",
      });
      return;
    }

    setValidationResult({ errorState: false, message: "" });
  };

  const handleChange = (cardCompany: string) => {
    setCardCompany(cardCompany);
    validate(cardCompany);
  };

  return { cardCompany, handleChange, validationResult };
};

export default useCardCompany;
