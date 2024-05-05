import { useState } from "react";
import { ERROR_MESSAGES } from "../constants/messages";

function useCardCompany() {
  const [cardCompany, setCardCompany] = useState("");
  const [cardCompanyError, setCardCompanyError] = useState(false);

  const handleCardCompanyChange = (value: string) => {
    const isSelected = value !== "";
    setCardCompanyError(!isSelected);

    setCardCompany(value);
  };

  const getCardCompanyErrorMessage = () => {
    return cardCompanyError ? ERROR_MESSAGES.company : undefined;
  };

  return {
    cardCompany,
    cardCompanyError,
    getCardCompanyErrorMessage,
    handleCardCompanyChange,
  };
}

export default useCardCompany;
