import { useState, ChangeEvent } from "react";
import { COMMON_ERROR, USERNAME } from "./constants/validation";
import {
  isEmptyValue,
  validateUserName,
} from "../validators/cardInputValidator";

interface cardUserNameInfo {
  cardUserName: string;
  isValid: boolean;
  errorMessages: string[];
}

const useCardUserName = (cardUserNameLength: number) => {
  const [cardUserNameInfo, setCardUserNameInfo] = useState<cardUserNameInfo>({
    cardUserName: "",
    isValid: false,
    errorMessages: [],
  });

  const onChangeCardUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const errorMessages: string[] = [];

    const isValidInput = !isEmptyValue(value);
    if (!isValidInput) {
      errorMessages.push(COMMON_ERROR.empty);
    }

    const isValidUserName = validateUserName(value, cardUserNameLength);
    if (!isValidUserName) {
      errorMessages.push(
        USERNAME.errorMessage.invalidLength(cardUserNameLength)
      );
    }

    setCardUserNameInfo({
      cardUserName: value,
      isValid: isValidInput && isValidUserName,
      errorMessages,
    });
  };

  return {
    cardUserNameInfo,
    onChangeCardUserName: onChangeCardUserName,
  };
};

export default useCardUserName;
