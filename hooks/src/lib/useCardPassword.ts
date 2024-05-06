import { useState, ChangeEvent } from "react";
import { COMMON_ERROR, PASSWORD } from "./constants/validation";
import {
  validatePasswordLength,
  isValidNumberValue,
} from "../validators/cardInputValidator";

interface cardPasswordInfo {
  cardPassword: string;
  isValid: boolean;
  errorMessages: string[];
}

const useCardPassword = (cardPasswordLength: number) => {
  const [cardPasswordInfo, setCardPasswordInfo] = useState<cardPasswordInfo>({
    cardPassword: "",
    isValid: false,
    errorMessages: [],
  });

  const onChangeCardPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const errorMessages: string[] = [];

    const isValidNumber = isValidNumberValue(value);
    if (!isValidNumber) {
      errorMessages.push(COMMON_ERROR.notNumeric);
    }

    const isValidPasswordLength = validatePasswordLength(
      value,
      cardPasswordLength
    );
    if (!isValidPasswordLength) {
      errorMessages.push(
        PASSWORD.errorMessage.invalidLength(cardPasswordLength)
      );
    }

    setCardPasswordInfo({
      cardPassword: value,
      isValid: isValidNumber && isValidPasswordLength,
      errorMessages,
    });
  };

  return {
    cardPasswordInfo,
    onChangeCardPassword: onChangeCardPassword,
  };
};

export default useCardPassword;
