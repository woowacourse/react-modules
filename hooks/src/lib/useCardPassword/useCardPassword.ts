import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";

const PASSWORD_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INPUT_LENGTH_LIMIT: `${PASSWORD_VALID_LENGTH}자리를 입력해주세요.`,
};

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState("");
  const [validationResult, setValidationResult] = useState({
    errorState: false,
    message: "",
  });

  const validate = (value: string) => {
    if (!checkNumber(value)) {
      const result = {
        errorState: true,
        message: ERROR_MESSAGE.INVALID_NUMBER,
      };
      setValidationResult(result);
      return result;
    }

    if (!checkValidLength(value, PASSWORD_VALID_LENGTH)) {
      const result = {
        errorState: true,
        message: ERROR_MESSAGE.INPUT_LENGTH_LIMIT,
      };
      setValidationResult(result);
      return result;
    }

    const result = { errorState: false, message: "" };
    setValidationResult(result);
    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCardPassword(inputValue);
    validate(inputValue);
  };

  return { cardPassword, handleChange, validationResult };
};

export default useCardPassword;
