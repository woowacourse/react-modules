import { ChangeEvent, useState } from "react";
import { REGEX } from "./constants";

interface ValidationResult {
  isValid: boolean;
  errorMessages: string[];
}

const MAX_LENGTH = 26;

const useCardHolder = () => {
  const [cardHolder, setCardHolder] = useState("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: false,
    errorMessages: [],
  });

  const handleCardHolderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const errors: string[] = [];
    const isValidNameFormat = REGEX.onlyUpperAlphabetAndOneBlank.test(value);
    const isValidLength = value.length <= MAX_LENGTH;

    if (!isValidNameFormat) {
      errors.push("1개 이하의 공백이 연속된 대문자 영어로 입력해주세요.");
    }

    if (!isValidLength) {
      errors.push(`${MAX_LENGTH}자 이내로 입력해주세요.`);
    }

    setValidationResult({
      isValid: isValidNameFormat && isValidLength,
      errorMessages: errors,
    });
    if (errors.length !== 0) return;
    setCardHolder(value);
  };

  return { validationResult, cardHolder, handleCardHolderChange };
};

export default useCardHolder;
