import { useState, ChangeEvent } from "react";
import { validateCardCompany } from "../validators/cardInputValidator";

const useCardCompany = () => {
  const [cardCompanyInfo, setCardCompanyInfo] = useState({
    cardCompany: "",
    isValid: false,
  });

  const handleCardCompany = (
    event: ChangeEvent<HTMLSelectElement>,
    defaultValue: string
  ) => {
    const { value } = event.target;
    const isValid = validateCardCompany(value, defaultValue);

    setCardCompanyInfo((prev) => {
      return {
        ...prev,
        cardCompany: value,
      };
    });

    if (isValid) {
      setCardCompanyInfo((prev) => {
        return {
          ...prev,
          isValid: true,
        };
      });
      return;
    }
  };

  return {
    cardCompanyInfo,
    handleCardCompany,
  };
};

export default useCardCompany;
