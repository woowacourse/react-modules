import { useState } from "react";

const useCardCVC = () => {
  const [, setInput] = useState<string>("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCVCValidate = (input: string) => {
    setInput(input);
    validateCVC(input);
  };

  const validateCVC = (input: string) => {
    if (Number.isNaN(Number(input))) {
      setIsValid(false);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    if (input.length !== 3) {
      setIsValid(false);
      setErrorMessage("3글자의 숫자를 입력해 주세요.");
      return;
    }
  };

  return { handleCVCValidate, isValid, errorMessage, validateCVC };
};

export default useCardCVC;
