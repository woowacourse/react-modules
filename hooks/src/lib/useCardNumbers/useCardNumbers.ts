import type {
  CardNumbersType,
  CardNumbersValidStatesType,
} from "../types/CardNumberTypes";

import Validation from "../utils/Validation";
import ValidationResult from "../types/ValidationResult";
import { useState } from "react";

interface CardNumbersValidationResult {
  cardNumbers: CardNumbersType;
  validStates: CardNumbersValidStatesType;
  validationResult: ValidationResult;
  handleUpdateCardNumbers: (inputIndex: number, value: string) => void;
}

export default function useCardNumbers(
  initialValues: CardNumbersType = ["", "", "", ""]
): CardNumbersValidationResult {
  const [cardNumbers, setCardNumbers] =
    useState<CardNumbersType>(initialValues);
  const [validStates, setValidStates] = useState<CardNumbersValidStatesType>([
    true,
    true,
    true,
    true,
  ]);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const updateCardNumbers = (inputIndex: number, value: string) => {
    setCardNumbers((prev) => {
      const newCardNumbers = [...prev];
      newCardNumbers[inputIndex] = value;
      return newCardNumbers as CardNumbersType;
    });
  };

  const handleUpdateCardNumbers = (inputIndex: number, value: string) => {
    updateCardNumbers(inputIndex, value);

    const isNewInputValid = validateCardNumber(value);

    const newValidStates = validStates.map((prevState, index) =>
      index === inputIndex ? isNewInputValid : prevState
    ) as CardNumbersValidStatesType;
    setValidStates(newValidStates);

    const isAllInputValid = newValidStates.every((isValid) => isValid === true);

    const validationResult: ValidationResult = isAllInputValid
      ? { isValid: true }
      : {
          isValid: false,
          errorMessage:
            "카드 번호는 4자리의 숫자여야 합니다. 확인 후 다시 입력해주세요.",
        };

    setValidationResult(validationResult);
  };

  return {
    cardNumbers,
    validStates,
    validationResult,
    handleUpdateCardNumbers,
  };
}

function validateCardNumber(value: string) {
  return Validation.isNumeric(value) && Validation.hasLength(value, 4);
}
