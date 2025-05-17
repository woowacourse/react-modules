import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";
import { CardInputError } from "../types/cardErrorType";

const PASSWORD_VALID_LENGTH = 2;

export const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INPUT_LENGTH_LIMIT: `${PASSWORD_VALID_LENGTH}자리를 입력해주세요.`,
};

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState("");
  const [validationResult, setValidationResult] = useState<CardInputError>({
    errorState: false,
    message: "",
  });

  const validate = (cardPassword: string) => {
    if (!checkNumber(cardPassword)) {
      setValidationResult({
        errorState: true,
        message: ERROR_MESSAGE.INVALID_NUMBER,
      });
      return;
    }

    if (!checkValidLength(cardPassword, PASSWORD_VALID_LENGTH)) {
      setValidationResult({
        errorState: true,
        message: ERROR_MESSAGE.INPUT_LENGTH_LIMIT,
      });
      return;
    }
    setValidationResult({ errorState: false, message: "" });
  };

  const handleChange = (cardPassword: string) => {
    setCardPassword(cardPassword);
    validate(cardPassword);
  };

  return { cardPassword, handleChange, validationResult };
};

export default useCardPassword;
