import { useRef } from "react";

type UserCardNumbersValidationProps = {
  value: string[];
};

const useCardNumbersValidation = ({ value }: UserCardNumbersValidationProps) => {
  const ref = useRef({ isValid: false, errorMessage: "" });

  for (const cardNumber of value) {
    if (cardNumber === "") {
      ref.current = {
        isValid: false,
        errorMessage: "숫자 4자리를 입력해주세요.",
      };
      break;
    }
    if (!/^\d+$/.test(cardNumber)) {
      ref.current = {
        isValid: false,
        errorMessage: "숫자만 입력해주세요.",
      };
      break;
    }

    if (cardNumber.length < 4) {
      ref.current = {
        isValid: false,
        errorMessage: "4자리 숫자를 입력해주세요.",
      };
      break;
    }
    ref.current = {
      isValid: true,
      errorMessage: "",
    };
  }

  return { validationResult: ref.current };
};

export default useCardNumbersValidation;
