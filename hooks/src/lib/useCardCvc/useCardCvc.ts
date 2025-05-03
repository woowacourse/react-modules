import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";

const CVC_VALID_LENGTH = 3;

const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INPUT_LENGTH_LIMIT: `${CVC_VALID_LENGTH}자리를 입력해주세요.`,
};

const useCardCvc = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = (value: string) => {
    if (!checkNumber(value)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
      setIsValid(false);
      return;
    }

    if (!checkValidLength(value, CVC_VALID_LENGTH)) {
      setErrorMessage(ERROR_MESSAGE.INPUT_LENGTH_LIMIT);
      setIsValid(false);
      return;
    }
    setErrorMessage("");
    setIsValid(true);
  };

  return { isValid, errorMessage, validate };
};

export default useCardCvc;
