import { useState } from "react";

const ERROR_MESSAGE = {
  EMPTY_CARD_COMPANY: "카드사를 선택해주세요.",
};

const useCardCompany = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = (value: string) => {
    if (value.length === 0) {
      setIsValid(false);
      setErrorMessage(ERROR_MESSAGE.EMPTY_CARD_COMPANY);
      return;
    }
    setErrorMessage("");
    setIsValid(true);
  };

  return { isValid, errorMessage, validate };
};

export default useCardCompany;
