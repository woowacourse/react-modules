import { useState } from "react";

const ERROR_MESSAGE = {
  EMPTY_CARD_COMPANY: "카드사를 선택해주세요.",
};

const useCardCompany = () => {
  const [cardCompany, setCardCompany] = useState("");
  const [validationResult, setValidationResult] = useState({
    state: false,
    message: "",
  });

  const validate = (inputValue: string) => {
    if (inputValue.length === 0) {
      setValidationResult({
        state: true,
        message: ERROR_MESSAGE.EMPTY_CARD_COMPANY,
      });
      return;
    }
    setValidationResult({ state: false, message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCardCompany(inputValue);
    validate(inputValue);
  };

  return { cardCompany, handleChange, validationResult };
};

export default useCardCompany;
