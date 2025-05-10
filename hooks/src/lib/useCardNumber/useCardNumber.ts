import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";

const CARDNUMBER_VALID_LENGTH = 4;

const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INPUT_LENGTH_LIMIT: `${CARDNUMBER_VALID_LENGTH}자리를 입력해주세요.`,
};

interface SingleCardNumberError {
  errorState: boolean;
  message: string;
}

interface CardNumberError {
  first: SingleCardNumberError;
  second: SingleCardNumberError;
  third: SingleCardNumberError;
  fourth: SingleCardNumberError;
}

export type CardNumberLabel = "first" | "second" | "third" | "fourth";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [validationResult, setValidationResult] = useState<CardNumberError>({
    first: { errorState: false, message: "" },
    second: { errorState: false, message: "" },
    third: { errorState: false, message: "" },
    fourth: { errorState: false, message: "" },
  });

  const validate = (label: CardNumberLabel, inputValue: string) => {
    let isError = false;
    let message = "";

    if (!checkNumber(inputValue)) {
      message = ERROR_MESSAGE.INVALID_NUMBER;
      isError = true;
    } else if (!checkValidLength(inputValue, CARDNUMBER_VALID_LENGTH)) {
      message = ERROR_MESSAGE.INPUT_LENGTH_LIMIT;
      isError = true;
    }

    const result = { errorState: isError, message };

    setValidationResult((prev) => ({
      ...prev,
      [label]: result,
    }));

    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!["first", "second", "third", "fourth"].includes(name)) return;

    setCardNumber((prev) => ({
      ...prev,
      [name]: value,
    }));

    validate(name as CardNumberLabel, value);
  };

  return { cardNumber, handleChange, validationResult };
};
export default useCardNumber;
