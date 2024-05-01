import { useState, ChangeEvent } from "react";
import { validateCardCompany } from "../validators/newCardInputValidator";

const useCardCompany = () => {
  const [cardCompanyInfo, setCardCompanyInfo] = useState({
    cardCompany: "",
    isError: false,
  });
  const handleCardCompany = (
    event: ChangeEvent<HTMLSelectElement>,
    defaultValue: string
  ) => {
    const { value } = event.target;
    const isError = validateCardCompany(value, defaultValue);

    setCardCompanyInfo((prev) => {
      return {
        ...prev,
        cardCompany: value,
      };
    });

    if (isError) {
      setCardCompanyInfo((prev) => {
        return {
          ...prev,
          isError: false,
        };
      });
      return;
    }

    setCardCompanyInfo((prev) => {
      return {
        ...prev,
        isError: true,
      };
    });
  };
  return {
    cardCompanyInfo,
    handleCardCompany,
  };
};

export default useCardCompany;
